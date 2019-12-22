import React, { Component } from 'react'
import './Global.css'
import styled from 'styled-components'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default class Layout extends Component {
  state = {
    cart: [],
  }

  render() {
    return (
      <StyledLayout>
        <Header
          topBarMessage={this.props.topBarMessage}
          newProductInCart={this.props.newProductInCart}
        />
        <main>{this.props.children}</main>
        <Footer />
      </StyledLayout>
    )
  }
}

const StyledLayout = styled.div`
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
  }
`
