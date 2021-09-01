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
import { Card, CardBody, Row, Col } from 'reactstrap'

// core components
import PanelHeader from 'components/PanelHeader/PanelHeader'
import { useStoriesByChunk } from './hooks'
import { TimelineCard } from './components/TimelineCard'
import { useLoading } from 'lib/LoadingProvider'
import ReactNotificationAlert from 'react-notification-alert'

export function Timeline() {
  const { data = [], isLoading } = useStoriesByChunk(2)
  const { setLoading } = useLoading()
  const notify = React.useRef(null)

  React.useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  return (
    <>
      <ReactNotificationAlert ref={notify} />
      <PanelHeader size="sm" />
      <div className="content">
        <div className="header text-center">
          <h3 className="title">Timeline</h3>
        </div>
        <Row>
          <Col md="12">
            <Card className="card-timeline card-plain">
              <CardBody>
                <ul className="timeline">
                  {data.map((chunk, key) => (
                    <React.Fragment key={key}>
                      {chunk[0] && (
                        <TimelineCard
                          story={chunk[0]}
                          inverted
                          notify={notify}
                        />
                      )}
                      {chunk[1] && (
                        <TimelineCard story={chunk[1]} notify={notify} />
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
