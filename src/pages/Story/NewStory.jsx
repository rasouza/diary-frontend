import React from 'react'
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
import classNames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import 'react-quill/dist/quill.snow.css'
import 'moment/min/locales'

import PanelHeader from 'components/PanelHeader/PanelHeader'
import { useCreateStory } from './hooks'
import { useNotify } from 'lib/NotifyProvider'
import { pipe, values, pluck, forEach } from 'ramda'

export function NewStory() {
  const { notifyError } = useNotify()
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

  const createStory = useCreateStory()

  const onSubmit = (data) => {
    createStory.mutate(data)
  }

  const onError = (errors) => {
    const notify = pipe(values, pluck('message'), forEach(notifyError))
    notify(errors)
  }

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row className="justify-content-center">
          <Col md="8" sm="12">
            <Card>
              <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <CardHeader>
                  <Row>
                    <Col xs="auto">
                      <CardTitle tag="h4">
                        What have you achieved today?
                      </CardTitle>
                    </Col>
                    <Col>
                      <Button
                        type="submit"
                        color="success"
                        className="float-right col-sm-12 col-md-auto">
                        {createStory.isLoading ? (
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
                                locale={window.navigator.language}
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
                          <Input
                            placeholder="Anything you would like to share"
                            {...register('link')}
                          />
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
