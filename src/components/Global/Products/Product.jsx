import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Product = ({ product, addToCart }) => {
  const { name, price, img } = product.frontmatter
  const { fluid } = img.childImageSharp
  return (
    <StyledProduct>
      <div className="productImg">
        <Image fluid={fluid} alt={name} />
        <button
          className="secondaryButton"
          onClick={() => {
            addToCart(name, price)
          }}
        >
          Quick add
        </button>
      </div>
      <h3>{name}</h3>
      <p>${price}</p>
    </StyledProduct>
  )
}

const StyledProduct = styled.li`
  .productImg {
    position: relative;
    button {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 75%;
    }
  }
  h3 {
    margin-top: 0.75rem;
    margin-bottom: 0.25rem;
    font-weight: 500;
    font-size: 1.125rem;
  }
  p {
    color: var(--otherFill);
    font-size: 90%;
  }
`

export default Product
