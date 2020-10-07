import React, {useContext, useEffect, useRef, useState} from "react";
import styles from './InfectionDetails.module.scss';
import {Context} from "../../store";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || 'no_token';

const InfectionDetailsMap = () => {
    const [state, dispatch] = useContext(Context);
    const mapContainer = useRef<any>();
    const mapObj = useRef<mapboxgl.Map>();
    const [mapLocation, setMapLocation] = useState({
        lon: 0,
        lat: 0,
        zoom: 1.5
    });
    useEffect(() => {
        mapObj.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [mapLocation.lon, mapLocation.lat],
            zoom: mapLocation.zoom
        });
    }, [mapLocation.lat, mapLocation.lon, mapLocation.zoom]);

    useEffect(() => {
        if (state.selectedInfection != undefined) {
            if (mapObj.current) {
                const {location: {lon, lat}, datetime} = state.infections[state.selectedInfection];
                const popup = new mapboxgl.Popup({offset: [0, -30],}).setText(`
                Location: ${lon} ${lat}
                Added: ${new Date(datetime).toLocaleString()}
                `);

                new mapboxgl.Marker()
                    .setLngLat([lon, lat])
                    .setPopup(popup)
                    .addTo(mapObj.current).togglePopup();
                mapObj.current.flyTo({zoom: 5, center: [lon, lat]});
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.infections, state.selectedInfection]);


    return (
        <section className={styles.content}>
            <div ref={mapContainer} className={styles.mapContainer}/>
        </section>
    );
};

export default InfectionDetailsMap;
