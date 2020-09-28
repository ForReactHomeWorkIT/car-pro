import React, {Component} from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        }
    }

    componentDidMount() {
        const geo = navigator.geolocation.getCurrentPosition(
            (pos) => {
                let locationPlace = pos.coords.latitude + "," + pos.coords.longitude

                fetch(`http://api.weatherapi.com/v1/current.json?key=abd620940ef44119b1f161639201704&q=${locationPlace}`)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({
                                isLoaded: true,
                                items: result
                            }, (error) => {
                                this.setState({
                                    isLoaded: true,
                                    error
                                })
                            })
                        }
                    )
            }
        )
        if(!geo) {
            fetch(`http://api.weatherapi.com/v1/current.json?key=abd620940ef44119b1f161639201704&q=Kiev`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result
                        }, (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            })
                        })
                    }
                )
        }
    }

    render() {
        const {error, isLoaded, items} = this.state
        if (error) {
            return <p style={{position: "absolute", top: "20%", right: "50px"}}>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p style={{position: "absolute", top: "20%", right: "50px"}}>Loading...</p>
        } else {
            return (
                <div style={{position: "absolute", top: "20%", right: "50px",width: "15%"}}>
                    <h4 style={{color: "#fff"}}>Your location {items.location.name}</h4>
                    <div><span style={{color: "#fff"}}>Last updated: {items.current.last_updated}</span></div>
                    <div className="flex"><img src={items.current.condition.icon} alt="weather" width={100}/><span
                        style={{color: "#fff", fontSize: "3vw", width: "30%", paddingTop: "10px"}}>{items.current.temp_c}&#8451;</span></div>
                    <div className="flex"><span style={{color: "#fff"}}>Wind {items.current.wind_dir}</span><span
                        style={{color: "#fff"}}>{items.current.wind_kph} kph</span></div>

                </div>
            )
        }
    }
}

export default Weather;