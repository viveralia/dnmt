import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { Link } from 'gatsby'

const ProductsList = ({
  title,
  subtitle,
  linksTo,
  linkText,
  products,
  addToCart,
}) => {
  return (
    <StyledList>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link to={linksTo}>{linkText}</Link>
      <ul>
        {products.map(({ node }, i) => (
          <Product key={i} product={node} addToCart={addToCart} />
        ))}
      </ul>
    </StyledList>
  )
}

const StyledList = styled.section`
  background: #eee;
  margin: 3rem 1rem;
  padding: 3rem 1.5rem;
  text-align: center;
  h2 {
    font-family: var(--otherFont);
    text-transform: uppercase;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  p {
    color: var(--otherFill);
    margin-bottom: 0.5rem;
  }
  a {
    color: var(--accentFill);
    position: relative;
    display: inline-block;
    margin-bottom: 3rem;
    :after {
      content: '→';
      position: absolute;
      padding-left: 0.5rem;
    }
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5em;
  }
  @media (min-width: 992px) {
    margin: 4rem 2rem;
    padding: 5rem 1.5rem;
    a {
      margin-bottom: 5rem;
    }
    ul {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`

export default ProductsList
