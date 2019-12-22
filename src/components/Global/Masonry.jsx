import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

const Masonry = ({ masonryItems }) => {
  return (
    <StyledMasonry>
      {masonryItems.map(({ heading, buttonText, linksTo, img }, i) => {
        const stackedBg = [
          `linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25))`,
          img,
        ]
        return (
          <BackgroundImage fluid={stackedBg} className="masonry-item" key={i}>
            <div className="text">
              <h3>{heading}</h3>
              <Link to={linksTo} className="primaryButton">
                {buttonText}
              </Link>
            </div>
          </BackgroundImage>
        )
      })}
    </StyledMasonry>
  )
}

const StyledMasonry = styled.section`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  .masonry-item {
    min-height: calc(100vw - 1rem);
    position: relative;
    .text {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 1rem;
      color: #fff;
      h3 {
        margin-bottom: 1rem;
        width: 70%;
      }
      .primaryButton {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 600;
      }
    }
  }
  @media (min-width: 992px) {
    padding: 0 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .masonry-item {
      min-height: 300px;
      :nth-child(2) {
        grid-column: 2/3;
        grid-row: 1/3;
      }
      .text {
        h3 {
          font-size: 1.5rem;
        }
        .primaryButton {
          padding: 0.75rem 2rem;
          font-size: 1rem;
        }
      }
    }
  }
`

export default Masonry
