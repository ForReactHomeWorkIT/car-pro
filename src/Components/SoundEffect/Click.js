import React from 'react';
import click from '../../assets/button_click.mp3'

const Click = () => {
    return (
        <div>
            <audio id="click" src={click}></audio>
        </div>
    );
};

export default Click;