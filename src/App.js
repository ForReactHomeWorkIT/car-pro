import React, {Component} from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Mute from "./Components/SoundEffect/Mute";
import Sound from "./Components/SoundEffect/Sound";
import Audio from "./Components/SoundEffect/Audio";
import Exchange from "./Components/Exchange";
import Weather from "./Components/Weather";


const animItems = document.getElementsByClassName('scrollItem')

function animOnScroll() {
    if (animItems) {
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }

        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')
            } else {
                animItem.classList.remove('_active')
            }
        }
    }
}

window.addEventListener('scroll', animOnScroll)

export default class App extends Component {
    constructor(props) {
        super(props);
        this.audioOn = this.audioOn.bind(this);
        this.audioOff = this.audioOff.bind(this);
        this.state = {audio: true};
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
                <Audio/>
                {sound}
                <Exchange/>
                <Weather/>
                <Wrapper audio={this.state.audio}/>
            </div>
        )
    }
}


