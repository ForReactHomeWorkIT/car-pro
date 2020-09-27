import React from 'react'
import styles from './main.module.css'
import img from '../../assets/head_img.png'

export default function Main() {
    return (
        <>
            <hr/>
            <section className={styles.main_section}>
                <h1>CAR-PRO. <br/><span className={styles.prime}>BEST SERVICE, <br/> <span className={styles.second}>BEST LIFE...</span></span></h1>
                <div className={styles.head_img}></div>
            </section>
            <hr/>
        </>
    )
}
