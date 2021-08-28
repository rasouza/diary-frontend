import React, { useState, useRef } from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container
} from 'reactstrap'
import Datetime from 'react-datetime'
import ReactQuill from 'react-quill'
import Loader from 'react-loader-spinner'
import NotificationAlert from 'react-notification-alert'

import 'react-quill/dist/quill.snow.css'
import 'moment/locale/en-gb'

import PanelHeader from 'components/PanelHeader/PanelHeader'
import { useMutation } from 'react-query'
import { createStory } from './api'
import { sendSuccess, sendError } from 'lib/notify'

export default function Story() {
  const notify = useRef(null)

  const [thoughts, setThoughts] = useState('')
  const [date, setDate] = useState(new Date())
  const [link, setLink] = useState('')
  const [summary, setSummary] = useState('')

  const mutation = useMutation((story) => createStory(story), {
    onSuccess: () =>
      notify.current.notificationAlert(sendSuccess('Story saved successfully')),
    onError: (error) =>
      notify.current.notificationAlert(sendError(error.response.data.message))
  })
  const mutateStory = () => {
    mutation.mutate({ date, link, summary, thoughts })
  }

  const handleLink = (event) => {
    setLink(event.target.value)
  }

  const handleSummary = (event) => {
    setSummary(event.target.value)
  }

  return (
    <>
      <NotificationAlert ref={notify} />
      <PanelHeader size="sm" />
      <div className="content">
        <Row className="justify-content-center">
          <Col md="8" sm="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col>
                    <CardTitle tag="h4">What have you achieved?</CardTitle>
                  </Col>
                  <Col>
                    <Button
                      onClick={mutateStory}
                      color="success"
                      className="float-right">
                      {mutation.isLoading ? (
                        <Loader
                          type="TailSpin"
                          color="#FFF"
                          height={15}
                          width={41}
                        />
                      ) : (
                        <strong>Create</strong>
                      )}
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Container>
                  <Form>
                    <Row>
                      <FormGroup className="col-sm-12 col-md-3">
                        <Label for="date">Date</Label>
                        <Datetime
                          timeFormat={false}
                          dateFormat={true}
                          id="date"
                          value={date}
                          onChange={setDate}
                        />
                      </FormGroup>
                      <FormGroup className="col-md-9">
                        <Label for="link">Link (optional)</Label>
                        <Input
                          type="url"
                          id="link"
                          onChange={handleLink}
                          value={link}
                        />
                      </FormGroup>
                    </Row>
                    <FormGroup>
                      <Label for="summary">Summary</Label>
                      <Input
                        id="summary"
                        placeholder="I started a new component on my frontend..."
                        onChange={handleSummary}
                        value={summary}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="thoughts">Additional thoughts</Label>
                      <ReactQuill
                        id="thoughts"
                        theme="snow"
                        value={thoughts}
                        onChange={setThoughts}
                      />
                    </FormGroup>
                  </Form>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
