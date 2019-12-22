import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Hero = ({ img, heading, body, linksTo, buttonMessage }) => {
  const stackedBg = [`linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25))`, img]
  return (
    <StyledHero>
      <BackgroundImage fluid={stackedBg} className="heroImg">
        <div className="text">
          <h1>{heading}</h1>
          <p className="muted">{body}</p>
          <Link to={linksTo} className="primaryButton">
            {buttonMessage}
          </Link>
        </div>
      </BackgroundImage>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  .heroImg {
    height: calc(90vh);
    :before,
    :after {
      background-position: 45% top;
    }
    .text {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #fff;
      padding: 2rem 1rem;
      width: 75%;
      h1 {
        font-family: var(--otherFont);
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      .primaryButton {
        margin-top: 1.5rem;
      }
    }
  }
  @media (min-width: 992px) {
    .heroImg {
      :before,
      :after {
        background-position: center;
      }
      .text {
        padding: 6rem 2rem;
        max-width: 550px;
        h1 {
          font-size: 2.5em;
        }
        p {
          font-size: 1.125em;
        }
        .primaryButton {
          margin-top: 2rem;
        }
      }
    }
  }
`

export default Hero
