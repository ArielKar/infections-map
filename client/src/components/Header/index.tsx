import React, {FunctionComponent} from "react";
import {User} from "../../store/defs";
import styles from './Header.module.scss';

interface HeaderProps {
    user: User;
    infectionsCount: number;
}

const Header: FunctionComponent<HeaderProps> = ({user, infectionsCount}) => {
    return <header className={styles.header}>
        <div><h3>{`${user.fname} ${user.lname}`}</h3></div>
        <div><p>infections: <span>{infectionsCount}</span></p></div>
    </header>;
};

export default Header;