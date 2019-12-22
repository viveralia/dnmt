import React, { Component } from 'react'
import styled from 'styled-components'

export default class TopBar extends Component {
  state = {
    isTopBarShown: true,
  }

  render() {
    const { isTopBarShown } = this.state
    return (
      <StyledBar className={isTopBarShown ? 'show' : 'hide'}>
        <p>{this.props.message}</p>
      </StyledBar>
    )
  }
}

const StyledBar = styled.div`
  font-size: 75%;
  text-align: center;
  background: var(--accentFill);
  color: #fff;
  padding: 0.625em;
  font-weight: 600;
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.425rem;
    font-size: 1em;
  }
`
