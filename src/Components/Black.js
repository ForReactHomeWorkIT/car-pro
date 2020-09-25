import React from 'react';
import styles from './components.module.css';
import Sound from "./Sound";
import Mute from "./Mute";


const Black = props => {
        return (
            <div className={styles.black}>
                <Sound />
                <Mute />
            </div>
        );
}

export default Black;