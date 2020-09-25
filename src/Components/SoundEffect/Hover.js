import React from 'react';
import hover from '../../assets/button_hover.mp3'
const Hover = () => {
    return (
        <div>
            <audio id="hover" src={hover} />
        </div>
    );
};

export default Hover;