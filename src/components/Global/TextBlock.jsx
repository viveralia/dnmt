import React from 'react'
import styled from 'styled-components'

const TextBlock = ({ heading, body }) => {
  return (
    <StyledText>
      <h2>{heading}</h2>
      <p>{body}</p>
    </StyledText>
  )
}

const StyledText = styled.section`
  padding: 6rem 1rem;
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
  h2 {
    text-transform: uppercase;
    font-family: var(--otherFont);
    font-size: 1.25em;
    margin-bottom: 1em;
  }
  p {
    color: var(--otherFill);
  }
`

export default TextBlock
