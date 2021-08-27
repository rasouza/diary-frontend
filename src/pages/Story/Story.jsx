import React, { useState } from 'react'
import PanelHeader from 'components/PanelHeader/PanelHeader'
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
import 'moment/locale/en-gb'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Story() {
  const [editor, setEditor] = useState('')
  const [date, setDate] = useState(new Date())
  const [link, setLink] = useState('')
  const [summary, setSummary] = useState('')

  return (
    <>
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
                    <Button color="success" className="float-right">
                      <strong>Create</strong>
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
                          onChange={setLink}
                          value={link}
                        />
                      </FormGroup>
                    </Row>
                    <FormGroup>
                      <Label for="summary">Summary</Label>
                      <Input
                        id="summary"
                        placeholder="I started a new component on my frontend..."
                        onChange={setSummary}
                        value={summary}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="thoughts">Additional thoughts</Label>
                      <ReactQuill
                        id="thoughts"
                        theme="snow"
                        value={editor}
                        onChange={setEditor}
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
