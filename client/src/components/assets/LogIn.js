import React, { Component } from 'react';
import { MDBCol, MDBBtn, MDBRow } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from "axios";
var md5 = require('md5');

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: "",
            password: "",
            data: []
        }
    }
    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        const uname = this.state.uname;
        const password = this.state.password;
        if (uname !== '' && password !== '') {
            axios.get(`http://localhost:8008/api/v1/users/${uname}`)
                .then(response => {
                    if (response.data.data[0].password === md5(this.state.password)) {
                        this.props.history.push('/home')
                        alert('success', 'Successfully Logged In');
                    } else {
                        alert('error', 'Invalid Password');
                    }
                }).catch(err => {
                    alert('error', 'Invalid Username or Password');
                })
        } else {
            alert('error', 'Enter Username and Password');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit} >
                    <MDBCol className="main-div col-md-3">
                        <MDBCol className="col-md-12 form-div">
                            <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Instagram</h1>
                            <MDBRow>
                                <input type="text" id="example1" name="uname" className="form-control form-control-sm" placeholder="Username or email" onChange={this.changeHandler} />
                            </MDBRow>
                            <MDBRow>
                                <input type="password" id="example2" name="password" className="form-control form-control-sm" placeholder="Password" onChange={this.changeHandler} />
                            </MDBRow>
                            <MDBBtn color="primary" type="submit" size="sm">Log In</MDBBtn>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol className="sub-div col-md-3">
                        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </MDBCol>
                </form>
            </div>
        )
    }
}
export default LogIn;