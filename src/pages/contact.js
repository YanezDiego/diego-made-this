import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = () => (
  <div
    css={css`
      padding-top: 1.1rem;
      
    `}
  >
    <a
      className="contactLink"
      href="https://www.linkedin.com/in/diegosyanez/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>

    <a
      className="contactLink"
      href="https://github.com/YanezDiego"
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        text-decoration: none;
      `}
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>

    <a
      className="contactLink"
      href="mailto:diegosyanez92@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>
  </div>
)

export default Contact