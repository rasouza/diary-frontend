import React from 'react'
import { Container } from 'reactstrap'
// used for making the prop types of this component
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <footer className={'footer' + (props.default ? ' footer-default' : '')}>
      <Container fluid={props.fluid}>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/rasouza/diary-frontend"
                className="mr-4-px"
                target="_blank"
                rel="noreferrer">
                <i className="fab fa-github" /> Github
              </a>
            </li>
            <li>
              <a
                href="https://www.100daysofcode.com/"
                className="mr-4-px"
                target="_blank"
                rel="noreferrer">
                100 Days of Code
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          &copy; {1900 + new Date().getYear()}, Coded by{' '}
          <a href="https://rasouza.com.br" target="_blank" rel="noreferrer">
            R. A. Souza
          </a>
          .
        </div>
      </Container>
    </footer>
  )
}

Footer.defaultProps = {
  default: false,
  fluid: false
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
}

export default Footer
