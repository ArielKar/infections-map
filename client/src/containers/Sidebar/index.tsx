import React, {useCallback, useContext} from "react";
import styles from './Sidebar.module.scss';
import {Context} from "../../store";
import {FixedSizeList} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import {selectInfection} from "../../store/actions";
import InfectionItem from "../../components/InfectionItem";

const SideBar = () => {
    const [state, dispatch] = useContext(Context);
    const {infections, selectedInfection} = state;

    const onInfectionSelected = useCallback((index: number) => {
        dispatch(selectInfection(index));
    }, [dispatch]);

    return (
        <aside className={styles.sidebar}>
            <AutoSizer>
                {({height, width}) => (
                    <FixedSizeList
                        height={height}
                        width={width}
                        itemCount={infections.length}
                        itemSize={40}
                        itemData={{infections, selectedInfection, onInfectionSelected}}>
                        {InfectionItem}
                    </FixedSizeList>
                )}
            </AutoSizer>
        </aside>
    );
};

export default SideBar;
