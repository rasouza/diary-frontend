/* eslint-disable camelcase */
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
import React from 'react'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup
} from 'reactstrap'
import Switch from 'react-bootstrap-switch'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { useDebounceFn } from 'ahooks'

// core components
import PanelHeader from 'components/PanelHeader/PanelHeader'
import { getUser } from 'api/supabase'

const DEBOUNCE_TIME = 300

export function UserProfile() {
  const { avatar_url, full_name, user_name, email } = getUser()
  const [saved, setSaved] = React.useState({ name: false, bio: false })
  const { register, watch } = useForm({
    defaultValues: {
      name: full_name,
      bio: 'Short Bio'
    }
  })

  const onChange = (value, { name }) => {
    // @TODO: send update request to backend
    setSaved({ [name]: true })
    console.log(value, name)
  }

  const { run } = useDebounceFn(onChange, { wait: DEBOUNCE_TIME })

  React.useEffect(() => {
    watch(run)
  }, [watch])

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col xl="8" sm="12">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          disabled
                          defaultValue={email}
                          placeholder="Email"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col xl="2" sm="6">
                      <FormGroup className="d-flex justify-content-xl-center align-items-baseline">
                        <Button className="btn-icon" color="github">
                          <i className="fab fa-github" />
                        </Button>

                        <div className="mx-1">
                          <Switch defaultValue={true} onColor="success" />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col xl="2" sm="6">
                      <FormGroup className="d-flex justify-content-xl-center align-items-baseline">
                        <Button className="btn-icon" color="twitter" disabled>
                          <i className="fab fa-twitter" />
                        </Button>
                        <div className="mx-1">
                          <Switch defaultValue={false} readonly />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup
                        className={classNames('has-label', {
                          'has-success': saved.name
                        })}>
                        <label>Name</label>
                        <Input
                          defaultValue={full_name}
                          placeholder="name"
                          type="text"
                          {...register('name')}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup
                        className={classNames('has-label', {
                          'has-success': saved.bio
                        })}>
                        <label>About Me</label>
                        <Input
                          cols="80"
                          defaultValue="Short Bio"
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                          {...register('bio')}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <div className="author">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img
                      alt={full_name}
                      className="avatar border-gray"
                      src={avatar_url}
                    />
                    <h5 className="title">{full_name}</h5>
                  </a>
                </div>
                <p className="description text-center">Short Bio</p>
              </CardBody>
              <hr />
              <div className="button-container">
                <Button
                  className="btn-icon btn-round"
                  color="neutral"
                  href={`https://github.com/${user_name}`}
                  target="_blank"
                  size="lg">
                  <i className="fab fa-github" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
