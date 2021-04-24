/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { find, pipe, get } from "lodash/fp";
// reactstrap components
import {
  Form, 
  Button,
  Card,
  CardHeader,
  Container,
  Row,
  Col
} from "reactstrap";
import { Redirect } from 'react-router-dom';
// core componentssss
import AuthHeader from "components/Headers/AuthHeader.js";
import { isAuthenticated } from "services/auth";
import { Configuration, PublicApi } from '@ory/kratos-client';

class Login extends React.Component {
  state = { csrf_token: '' };
  getQuerystring = (name) => (new URLSearchParams(window.location.search)).get(name);

  kratos = new PublicApi(new Configuration({ basePath: window.IDP_URL }));

  componentDidMount() {
    this.setState({ auth: isAuthenticated() })
    this.kratos.getSelfServiceLoginFlow(this.getQuerystring('flow'))
      .then(({ status, data: flow, ...response }) => {
        if (status !== 200) {
          return Promise.reject(flow);
        }

        const config = flow.methods.oidc.config
        const csrf_token = pipe(
          find({ name: 'csrf_token' }),
          get('value')
        )(config.fields)

        this.setState({ 
          action: config.action,
          csrf_token
        })
      })
  }

  githubSignIn(e) {
    console.log('this.state', this.state)
  }

  render() {
    console.log('this.state', this.state)
    const { auth } = this.state
    if (auth) {
      return <Redirect to="/admin" />
    } else {
      return (
        <>
          <AuthHeader
            title="The Programming Diary"
            lead="Lorem Ipsum Dolor Sit Amet"
          />
          <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
              <Col lg="5" md="7">
                <Card className="bg-secondary border-0 mb-0">
                  <CardHeader className="bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-3">
                      <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                    <Form method="POST" action={this.state.action}>
                      <input
                        type="hidden"
                        name="csrf_token"
                        value={this.state.csrf_token}
                      />
                      <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          type="submit"
                          value="github"
                          name="provider"
                        >
                          <span className="btn-inner--icon mr-1">
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
                          onClick={() => this.githubSignIn()}
                          type="submit"
                          value="twitter"
                          name="provider"
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/twitter.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Twitter</span>
                        </Button>
                      </Form>                      
                    </div>
                  </CardHeader>
                  </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <small>Create new account</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      );
    }
  }
}

export default Login;
