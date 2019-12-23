import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        console.log(this.state.loggedIn);
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Home</h1>
                <p><Link to="/logout">Logout</Link></p>
            </div>
        )
    }
}
export default Home;