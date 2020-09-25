import React from 'react';
import song from "../assets/audio_bg.mp3";

const Audio = () => {
        return (
            <div>
                <audio src={song} loop id="music" />
            </div>
        );
}

export default Audio;