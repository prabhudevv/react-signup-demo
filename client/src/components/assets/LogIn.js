import React, { Component } from 'react';
import { MDBCol, MDBBtn, MDBRow } from 'mdbreact';
import { Link } from 'react-router-dom';

class LogIn extends Component {
    render() {
        return (
            <div>
                <MDBCol className="main-div col-md-3">
                    <MDBCol className="col-md-12 form-div">
                        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Instagram</h1>
                        <MDBRow>
                            <input type="text" id="example1" className="form-control form-control-sm" placeholder="Username or email" />
                        </MDBRow>
                        <MDBRow>
                            <input type="password" id="example2" className="form-control form-control-sm" placeholder="Password" />
                        </MDBRow>
                        <MDBBtn color="primary" size="sm">Log In</MDBBtn>
                    </MDBCol>
                </MDBCol>

                <MDBCol className="sub-div col-md-3">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </MDBCol>
            </div>
        )
    }
}
export default LogIn;