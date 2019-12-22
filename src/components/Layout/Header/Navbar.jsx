import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import links from '../../../constants/HeaderMenu'
import { FiShoppingCart } from 'react-icons/fi'

export default class Navbar extends Component {
  state = {
    isMenuOpen: false,
    activeClass: '',
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let activeClass
      if (window.scrollY <= 0) {
        activeClass = 'transparent'
      } else {
        activeClass = 'white'
      }
      this.setState({
        activeClass: activeClass,
      })
    })
  }

  render() {
    const { isMenuOpen, activeClass } = this.state
    return (
      <StyledNavbar className={isMenuOpen ? 'white' : activeClass}>
        <Link to="/" className="brand">
          {this.props.siteTitle}
        </Link>
        <ul className={isMenuOpen ? 'show' : 'hide'}>
          {/* Creates a new link for each object inside the HeaderMenu.js file */}
          {links.map(({ link, name }, i) => (
            <li key={i}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
        {/* Buttons */}
        <div>
          {/* Cart */}
          <button className="cart">
            <FiShoppingCart />
          </button>
          {/* Burger Menu */}
          <button
            className="burger"
            onClick={() => {
              this.setState({
                isMenuOpen: !isMenuOpen,
              })
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </StyledNavbar>
    )
  }
}

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  transition: all 0.25s ease;
  .brand {
    font-family: var(--otherFont);
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  ul {
    border-top: 1px solid #eee;
    position: absolute;
    right: 0;
    top: 85px;
    width: 100%;
    text-align: center;
    height: calc(100vh - 86px);
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: 2rem;
    font-weight: 600;
    z-index: 9;
    li {
      margin: 0.75rem 0;
    }
  }
  .show {
    display: flex;
    color: var(--mainFill);
  }
  .burger {
    span {
      display: block;
      height: 2px;
      width: 16px;
      background: #fff;
      margin: 0.175rem 0;
      border-radius: 20px;
      :nth-child(2) {
        width: 14px;
      }
    }
  }
  .cart {
    font-size: 1.095rem;
    margin-right: 1.25rem;
  }
  @media (min-width: 992px) {
    padding: 1rem 2rem;
    .brand {
      width: 20%;
    }
    ul {
      width: 60%;
      border-top: none;
      margin-left: -200px;
      position: initial;
      height: auto;
      flex-direction: row;
      font-size: 1rem;
      display: block;
      background: initial;
      li {
        display: inline-block;
        margin: 0 1em;
        :first-child {
          margin-left: 0;
        }
        :last-child {
          margin-right: 0;
        }
      }
    }
    .burger {
      display: none;
    }
  }
`
