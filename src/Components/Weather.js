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
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                let locationPlace = {
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude
                }
                fetch(`http://api.weatherapi.com/v1/current.json?key=abd620940ef44119b1f161639201704&q=${locationPlace.lat + ',' + locationPlace.lon}`)
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
    }

    render() {
        const {error, isLoaded, items} = this.state
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div style={{position: "absolute", top: "20%", right: "50px"}}>
                    <h4 style={{color: "#fff"}}>Your location  {items.location.name}</h4>
                    <div><span style={{color: "#fff"}}>Last updated:  {items.current.last_updated}</span></div>
                    <div className="flexWeather"><img src={items.current.condition.icon} alt="weather"/><span style={{color: "#fff"}}>{items.current.condition.text}</span></div>
                    <div><span style={{color: "#fff"}}>Temperature  {items.current.temp_c}&#8451;</span></div>
                    <div className="flexWeather"><span style={{color: "#fff"}}>Wind  {items.current.wind_dir}</span><span style={{color: "#fff"}}>{items.current.wind_kph} kph</span></div>

                </div>
            )
        }
    }
}

export default Weather;