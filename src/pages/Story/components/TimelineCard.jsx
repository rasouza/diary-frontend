import React from 'react'
import PropTypes from 'prop-types'
import {
  Badge,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap'
import moment from 'moment'
import parse from 'html-react-parser'
import classNames from 'classnames'
import { useDeleteStory } from '../hooks'

moment.locale(window.navigator.language)

export function TimelineCard({ story, inverted = false }) {
  const { id, date, link, summary, thoughts } = story
  const deleteStory = useDeleteStory()

  return (
    <li key={id} className={classNames({ 'timeline-inverted': inverted })}>
      <div className="timeline-badge">
        <i className="now-ui-icons education_agenda-bookmark" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <Badge color="primary">{moment(date).format('LL')}</Badge>{' '}
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              <Badge color="primary">
                <i className="fas fa-globe-americas" /> Link
              </Badge>
            </a>
          )}
        </div>
        <div className="timeline-body">
          <p>{summary}</p>

          {thoughts && (
            <>
              <hr />
              {parse(thoughts)}
            </>
          )}
        </div>
        <div className="timeline-footer float-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-round"
              color="primary"
              data-toggle="dropdown"
              type="button">
              <i className="now-ui-icons ui-1_simple-remove" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => deleteStory.mutate(id)}>
                <span className="text-danger">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </li>
  )
}

TimelineCard.propTypes = {
  story: PropTypes.object.isRequired,
  inverted: PropTypes.bool
}
