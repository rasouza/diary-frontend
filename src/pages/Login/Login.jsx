/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from 'react'

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { useFeature } from '@growthbook/growthbook-react'

import { useAuth } from 'lib/AuthProvider'
import config from 'config'

// core components
import bgImage from 'assets/img/bg16.jpg'

export function Login() {
  const { github, twitter, auth } = useAuth()
  const login = useFeature('enable-login')
  const { dummyUser } = config

  let user = null
  if (login.value && login.off) {
    user = dummyUser
  } else if (auth.user()) {
    const {
      user_metadata: {
        avatar_url: avatar,
        full_name: name,
        user_name: username,
        email
      }
    } = auth.user()
    user = { avatar, name, email, username }
  }
  window.localStorage.setItem('user', JSON.stringify(user))

  useEffect(() => {
    document.body.classList.add('register-page')
    return function cleanup() {
      document.body.classList.remove('register-page')
    }
  }, [])

  if (user) return <Redirect to="/" />

  return (
    <>
      <div className="content">
        <div className="register-page">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col lg={5} md={8} xs={12}>
                <div className="info-area info-horizontal mt-5">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons design_app" />
                  </div>
                  <div className="description">
                    <h5 className="info-title">Code</h5>
                    <p className="description">
                      Code minimum an hour every day for the next 100 days
                    </p>
                  </div>
                </div>
                <div className="info-area info-horizontal">
                  <div className="icon icon-primary">
                    <i className="fab fa-twitter" />
                  </div>
                  <div className="description">
                    <h5 className="info-title">Tweet</h5>
                    <p className="description">
                      Tweet your progress every day with the #100DaysOfCode
                      hashtag.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={8} xs={12}>
                <Card className="card-signup">
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">Sign In with</CardTitle>
                    <div className="social btns-mr-5">
                      <Button
                        onClick={twitter}
                        className="btn-icon btn-round disabled"
                        color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        onClick={github}
                        className="btn-icon btn-round"
                        color="github">
                        <i className="fab fa-github" />
                      </Button>
                      <h5 className="card-description">and get started!</h5>
                    </div>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div
        className="full-page-background"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    </>
  )
}
