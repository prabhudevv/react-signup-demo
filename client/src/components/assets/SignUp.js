import React, { Component } from 'react';
import { MDBCol, MDBBtn, MDBRow } from 'mdbreact';
import { Link } from 'react-router-dom';
import alert from '../notifications/alertMessage';
import axios from 'axios';
import validator from 'validator';

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            fullname: "",
            uname: "",
            password: ""
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
        const email = this.state.email;
        const fullname = this.state.fullname;
        const uname = this.state.uname;
        const password = this.state.password;
        var insertObj = {
            email,
            fullname,
            uname,
            password
        }
        if (email !== '' && fullname !== '' && uname !== '' && password !== '') {
            if (validator.isEmail(email)) {
                if (validator.isAlphanumeric(uname)) {
                    axios.post(`http://localhost:8008/api/v1/users`, insertObj)
                        .then(response => {
                            if (response.data.success) {
                                this.props.history.push('/')
                                alert('success', 'Successfully registered new user');
                            } else {
                                this.setState({
                                    color: 'danger',
                                    res_msg: response.data.msg,
                                    isOpen: !this.state.isOpen
                                })
                            }
                        }).catch(err => console.log(err))
                } else {
                    alert('error', 'Enter valid username');
                }
            } else {
                alert('error', 'Enter valid email');
            }
        } else {
            alert('error', 'Fill all details');
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
                                <input type="text" id="example1" name="email" className="form-control form-control-sm" placeholder="Email" onChange={this.changeHandler} />
                            </MDBRow>
                            <MDBRow>
                                <input type="text" id="example2" name="fullname" className="form-control form-control-sm" placeholder="Fullname" onChange={this.changeHandler} />
                            </MDBRow>
                            <MDBRow>
                                <input type="text" id="example3" name="uname" className="form-control form-control-sm" placeholder="Username" onChange={this.changeHandler} />
                            </MDBRow>
                            <MDBRow>
                                <input type="password" id="example4" name="password" className="form-control form-control-sm" placeholder="Password" onChange={this.changeHandler} />
                            </MDBRow>
                            <MDBBtn color="primary" type="submit" size="sm">Sign up</MDBBtn>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol className="sub-div col-md-3">
                        <p>Have an account? <Link to="/">Log in</Link></p>
                    </MDBCol>
                </form>
            </div>
        )
    }
}
export default SignUp;