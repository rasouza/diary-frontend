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
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { createClient } from '@supabase/supabase-js'
// core components
import bgImage from "assets/img/bg16.jpg";


const db = createClient('https://cggwvqtadgufjgzxreuq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTU4MTk0MSwiZXhwIjoxOTQ1MTU3OTQxfQ.dFX_AxjSbjy9o34c-al9msFtJxVtUPmX0ZzW3saxOxc')
const githubSignIn = () => db.auth.signIn({provider: 'github'})
const twitterSignIn = () => db.auth.signIn({provider: 'twitter'})

function RegisterPage() {
  console.log('db', db.auth.user())
  
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);
  return (
    <>
      <div className="content">
        <div className="register-page">
          <Container>
            <Row className="justify-content-center">
              <Col lg={4} md={8} xs={12}>
                <Card className="card-signup">
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">Sign In with</CardTitle>
                    <div className="social btns-mr-5">
                      <Button onClick={twitterSignIn} className="btn-icon btn-round" color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button onClick={githubSignIn} className="btn-icon btn-round" color="github">
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
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      />
    </>
  );
}

export default RegisterPage;
