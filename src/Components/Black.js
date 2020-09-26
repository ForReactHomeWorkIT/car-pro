import React from 'react';
import styles from './components.module.css';


const Black = props => {
        return (
            <div className={styles.black}>
            </div>
        );
}

export default Black;

/*const geoLocation = navigator.geolocation;
if (undefined === geoLocation) {
    getWeather('Kiev');
} else {
    geoLocation.getCurrentPosition(
        (pos) => {
            let locationPlace = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude
            };
            getWeather(locationPlace);
        },
        (error) => {
            console.log(`Geo-location error (${error.code}): ${error.message}`);
            getWeather('Kiev');
        });*/