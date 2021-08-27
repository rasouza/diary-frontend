import React from 'react'
import { Container } from 'reactstrap'
// used for making the prop types of this component
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <footer className={'footer' + (props.default ? ' footer-default' : '')}>
      <Container fluid={props.fluid}>
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
