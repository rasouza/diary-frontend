/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import ReactDatetime from "react-datetime";

// core components
import StoryHeader from "components/Headers/StoryHeader.js";

class Profile extends React.Component {
  render() {
    return (
      <>
        <StoryHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="justify-content-md-center">
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Story</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#"
                        disabled
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        <i className="fab fa-github"></i>{" "}
                        rasouza/100-days-of-code
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-calendar-grid-58" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <ReactDatetime
                                inputProps={{
                                  placeholder: "Date Picker Here",
                                }}
                                timeFormat={false}
                                defaultValue={new Date()}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="title"
                            >
                              Today's Progress
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="title"
                              placeholder="Briefly describe what you did"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      More about
                    </h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>Thoughts</label>
                        <Input
                          className="form-control-alternative"
                          id="thoughts"
                          placeholder="Add any note or thoughts you would like to record"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <Col>
                        <FormGroup>
                          <label className="form-control-label" htmlFor="title">
                            Link (Optional)
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="title"
                            placeholder="https://example.com"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </div>
                    <Col xs="12">
                      <Button
                        block
                        color="success"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-book-bookmark" />
                        </span>
                        <span className="btn-inner--text">Save</span>
                      </Button>
                    </Col>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
