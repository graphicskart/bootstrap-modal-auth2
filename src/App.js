import React, { Component } from "react";
import { Button, Modal, Col, Row, ButtonGroup } from "react-bootstrap";
import "./App.css";
import { Login, Signup, ForgotPassword } from "./components";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      step: 1,
      theme: ""
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = theme => {
    this.setState({ show: true, step: 1, theme });
  };

  changeStep = step => {
    this.setState({
      step
    });
  };

  render() {
    return (
      <div className="App">
        <Col className="text-center">
          <ButtonGroup>
            <Button
              variant="outline-danger"
              onClick={() => this.handleShow("danger")}
            >
              Login
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => this.handleShow("primary")}
            >
              Login
            </Button>
            <Button
              variant="outline-success"
              onClick={() => this.handleShow("success")}
            >
              Login
            </Button>
          </ButtonGroup>
        </Col>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className={`bg-${this.state.theme}`}>
            <Row>
              <Col xs={12} sm={7} className="left-block">
                {this.state.step === 1 ? (
                  <Login changeStep={this.changeStep} />
                ) : null}
                {this.state.step === 2 ? (
                  <Signup changeStep={this.changeStep} />
                ) : null}
                {this.state.step === 3 ? (
                  <ForgotPassword changeStep={this.changeStep} />
                ) : null}
              </Col>
              <Col xs={12} sm={5} className="right-block">
                <Col xs={12}>
                  {this.state.step === 1 ? (
                    <h3 className="text-center title">Sign up Now</h3>
                  ) : null}
                  {this.state.step === 2 ? (
                    <h3 className="text-center title">Login Now</h3>
                  ) : null}
                  {this.state.step === 3 ? (
                    <h3 className="text-center title">Reset Password</h3>
                  ) : null}
                  <p className="title-message text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </p>
                  <Col xs={12} className="text-center">
                    {this.state.step === 1 ? (
                      <Button
                        variant="primary"
                        onClick={() => this.changeStep(2)}
                      >
                        REGISTER NOW
                      </Button>
                    ) : null}
                    {this.state.step === 2 ? (
                      <Button
                        variant="primary"
                        onClick={() => this.changeStep(1)}
                      >
                        LOGIN NOW
                      </Button>
                    ) : null}
                    {this.state.step === 3 ? (
                      <Button
                        variant="primary"
                        onClick={() => this.changeStep(1)}
                      >
                        LOGIN NOW
                      </Button>
                    ) : null}
                  </Col>
                </Col>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
