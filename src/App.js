import React, {Component} from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Mute from "./Components/Mute";
import Sound from "./Components/Sound";
import Audio from "./Components/Audio";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.audioOn = this.audioOn.bind(this);
        this.audioOff = this.audioOff.bind(this);
        this.state = { audio: true };
    }
    audioOn() {
        this.setState({audio: true})
        document.getElementById('music').pause()
    }
    audioOff() {
        this.setState({audio: false})
        document.getElementById('music').play()
    }

    render() {
        const audio = this.state.audio;
        let sound = null;
        audio
        ? sound = <Mute onClick={this.audioOff} className="sound"/>
        : sound = <Sound onClick={this.audioOn} className="sound"/>
        return (
            <div className="App">
                <Audio />
                {sound}
                <Wrapper />
            </div>
        )
    }
}

