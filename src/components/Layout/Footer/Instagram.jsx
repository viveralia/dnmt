import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const getInstafeed = graphql`
  {
    allInstaNode(limit: 6) {
      edges {
        node {
          id
          username
          likes
          comments
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

const Instagram = () => {
  const response = useStaticQuery(getInstafeed)
  const pictures = response.allInstaNode.edges

  return (
    <StyledInstaFeed>
      <ul>
        {pictures.map(({ node }) => (
          <li key={node.id}>
            <Image fluid={node.localFile.childImageSharp.fluid} />
          </li>
        ))}
      </ul>
    </StyledInstaFeed>
  )
}

const StyledInstaFeed = styled.section`
  ul {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: 992px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`

export default Instagram
