import React, {Component} from 'react';

const styles = {
    table: {
        position: "fixed",
        top: "20%",
        left: "20px",
        color: "#fff",
        border: "1px solid gray",
        padding: "10px"
    },
    caption: {
        font: "18pt Georgia",
        fontWeight: "bold",
        paddingBottom: "15px",
    },
    td: {
        font: "14pt Georgia", fontWeight: "bold", width: "100px"
    }
}

class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
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

    render() {
        const {error, isLoaded, items} = this.state
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p style={styles.table}>Loading...</p>
        } else {
            return (
                <table style={styles.table}>
                    <caption style={styles.caption}>
                        Exchange Rates
                    </caption>
                    <tr>
                        <td style={styles.td}>Currency</td>
                        {items.map(item => <td>{item.ccy}</td>)}
                    </tr>
                    <tr>
                        <td style={styles.td}>Buy</td>
                        {items.map(item => <td>{(+item.buy).toFixed(2)}</td>)}
                    </tr>
                    <tr>
                        <td style={styles.td}>Sale</td>
                        {items.map(item => <td>{(+item.sale).toFixed(2)}</td>)}
                    </tr>
                </table>

            )
        }
    }
}

export default Exchange;