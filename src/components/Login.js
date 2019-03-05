import React, { Component } from "react";
import { Row, Col, Button, FormControl, FormGroup } from "react-bootstrap";

const initialUser = {
  email: "",
  password: ""
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { ...initialUser }
    };
  }

  onChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert("Submmited successfuly.");
    this.setState({
      user: { ...initialUser }
    });
  };

  render() {
    return (
      <Row>
        <Col xs={12}>
          <form onSubmit={this.onSubmit}>
            <Row>
              <Col xs={12} className="form-container">
                <Col xs={12}>
                  <h4 className="title">Login</h4>
                  <p className="title-message">
                    Please fill in your basic info
                  </p>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col xs={12}>
                      <FormGroup>
                        <FormControl
                          placeholder="Email Address"
                          onChange={this.onChange}
                          value={this.state.user.email}
                          name="email"
                          required
                          type="email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControl
                          placeholder="Password"
                          type="password"
                          onChange={this.onChange}
                          value={this.state.user.password}
                          name="password"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs={12}>
                      <Row>
                        <Col xs={12} sm={6}>
                          <Button
                            variant="primary"
                            className="login-btn"
                            type="submit"
                          >
                            Log in
                          </Button>
                        </Col>
                        <Col xs={12} sm={6} className="text-right">
                          <a
                            href="javascript:void(0);"
                            onClick={() => this.props.changeStep(3)}
                          >
                            Forgot Password?
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    );
  }
}
