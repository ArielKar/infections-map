import {Infection} from "../../store/defs";
import React, {FunctionComponent} from "react";
import styles from "./InfectionItem.module.scss";

interface InfectionItemProps {
    index: number;
    style: object;
    data: { infections: Infection[], selectedInfection: number, onInfectionSelected: (index: number) => void }
}

const InfectionItem: FunctionComponent<InfectionItemProps> = (props) => {
    const {index, style, data} = props;
    const {infections, selectedInfection, onInfectionSelected} = data;

    const handleInfectionItemClick = () => {
        onInfectionSelected(index);
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

export default InfectionItem;