import React, {Component} from 'react';
import song from '../assets/audio_bg.mp3'

const Audio = props => {
        return (
            <div>
                <audio src={song}></audio>
            </div>
        );
}

export default Audio;