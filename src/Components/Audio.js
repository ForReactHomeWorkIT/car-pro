import React, {Component} from 'react';
import song from "../assets/audio_bg.mp3";

class Audio extends Component {
    render() {
        return (
            <div>
                <audio loop id="music"><source src={song}/></audio>
            </div>
        );
    }
}

export default Audio;