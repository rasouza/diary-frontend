import React from "react";
import { isAuthenticated } from "services/auth";
import { Redirect } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Col
} from "reactstrap";

class Login extends React.Component {
  getQuerystring = (name) => (new URLSearchParams(window.location.search)).get(name);
  
  render() {
    const auth = isAuthenticated();
    if (auth) {
      return <Redirect to="/" />
    } else {
      return (
        <>
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                  <small>Sign in with</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href={`${
                      window.USERS_URL
                    }/oauth2/github/auth?login_challenge=${this.getQuerystring('login_challenge')}`}
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src={require("assets/img/icons/common/github.svg")}
                      />
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </Button>
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href={`${window.USERS_URL}/accept-login/rasouza?login_challenge=${this.getQuerystring('login_challenge')}`}
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src={require("assets/img/icons/common/google.svg")}
                      />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </Col>
        </>
      );
    }
  }
}

export default Login;