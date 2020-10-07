import React, {FunctionComponent, useContext} from "react";
import styles from './Sidebar.module.scss';
import {Context} from "../../store";
import {FixedSizeList} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import {selectInfection} from "../../store/actions";

const SideBar = () => {
    const [state, dispatch] = useContext(Context);

    return (
        <aside className={styles.sidebar}>
            <AutoSizer>
                {({height, width}) => (
                    <FixedSizeList height={height} width={width} itemCount={state.infections.length} itemSize={40}>
                        {InfectionItem}
                    </FixedSizeList>
                )}
            </AutoSizer>
        </aside>
    );
};

interface InfectionItemProps {
    index: number;
    style: object;
}

const InfectionItem: FunctionComponent<InfectionItemProps> = ({index, style}) => {
    const [state, dispatch] = useContext(Context);
    const {infections, selectedInfection} = state;

    const handleInfectionItemClick = () => {
        dispatch(selectInfection(index));
    };

    return (
        <div style={style} className={styles.infectionListItem}>
            <button
                className={`${styles.infectionButton} ${selectedInfection === index && styles.selected}`}
                onClick={handleInfectionItemClick}
            >
                {new Date(infections[index].datetime).toLocaleString()}
            </button>
        </div>
    );
};

export default SideBar;
