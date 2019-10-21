import React, { Component } from 'react';
import { MDBCol, MDBBtn, MDBRow } from 'mdbreact';
import { Link } from 'react-router-dom';
import alert from '../notifications/alertMessage';
import axios from 'axios';

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
        var insertObj = {
            email: this.state.email,
            fullname: this.state.fullname,
            uname: this.state.uname,
            password: this.state.password
        }

        axios.post(`http://localhost:8008/api/v1/users`, insertObj)
            .then(response => {
                if (response.data.success) {
                    this.props.history.push('/')
                    alert('success', 'Successfully Added New User');
                } else {
                    this.setState({
                        color: 'danger',
                        res_msg: response.data.msg,
                        isOpen: !this.state.isOpen
                    })
                }
            }).catch(err => console.log(err))
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