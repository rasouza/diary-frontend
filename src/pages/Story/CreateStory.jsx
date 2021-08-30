import React, { useRef } from 'react'
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
import classNames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import 'react-quill/dist/quill.snow.css'
import 'moment/locale/en-gb'

import PanelHeader from 'components/PanelHeader/PanelHeader'
import { useMutation } from 'react-query'
import { createStory } from './api'
import { sendSuccess, sendError } from 'lib/notify'

export function CreateStory() {
  const notify = useRef(null)

  const schema = yup.object().shape({
    link: yup.string().url(),
    summary: yup.string().required()
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, touchedFields }
  } = useForm({ resolver: yupResolver(schema), mode: 'onBlur' })

  const mutation = useMutation((story) => createStory(story), {
    onSuccess: () => sendSuccess('Story saved successfully', notify),
    onError: (error) => sendError(error.response.data.message, notify)
  })

  const onSubmit = (data) => {
    mutation.mutate(data)
  }

  const onError = (errors) => {
    const messages = Object.values(errors).map((error) => error.message)
    sendError(messages, notify)
  }

  return (
    <>
      <NotificationAlert ref={notify} />
      <PanelHeader size="sm" />
      <div className="content">
        <Row className="justify-content-center">
          <Col md="8" sm="12">
            <Card>
              <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <CardHeader>
                  <Row>
                    <Col>
                      <CardTitle tag="h4">What have you achieved?</CardTitle>
                    </Col>
                    <Col>
                      <Button
                        type="submit"
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
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <Label for="date">Date</Label>
                          <Controller
                            name="date"
                            control={control}
                            defaultValue={new Date()}
                            render={({ field }) => (
                              <Datetime
                                {...field}
                                timeFormat={false}
                                dateFormat={true}
                              />
                            )}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="9">
                        <FormGroup
                          className={classNames('has-label', {
                            'has-danger': errors.link,
                            'has-success': touchedFields.link && !errors.link
                          })}>
                          <Label for="link">Link (optional)</Label>
                          <Input {...register('link')} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup
                      className={classNames('has-label', {
                        'has-danger': errors.summary,
                        'has-success': touchedFields.summary && !errors.summary
                      })}>
                      <Label for="summary">Summary</Label>
                      <Input
                        placeholder="I started a new component on my frontend..."
                        {...register('summary')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="thoughts">Additional thoughts</Label>
                      <Controller
                        name="thoughts"
                        control={control}
                        defaultValue={''}
                        render={({ field }) => (
                          <ReactQuill {...field} theme="snow" />
                        )}
                      />
                    </FormGroup>
                  </Container>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
