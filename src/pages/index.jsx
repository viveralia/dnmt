import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Global/Hero'
import { graphql } from 'gatsby'
import TextBlock from '../components/Global/TextBlock'
import Masonry from '../components/Global/Masonry'
import SEO from '../components/Global/SEO'
import ProductsList from '../components/Global/Products/ProductsList'

export const query = graphql`
  {
    hero: file(relativePath: { eq: "house.jpg" }) {
      childImageSharp {
        heroImg: fluid(quality: 100, maxWidth: 2100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    masonry1: file(relativePath: { eq: "jacket.jpg" }) {
      childImageSharp {
        masonryImg: fluid(quality: 80, maxWidth: 2100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    masonry2: file(relativePath: { eq: "washed.jpg" }) {
      childImageSharp {
        masonryImg: fluid(quality: 80, maxWidth: 2100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    masonry3: file(relativePath: { eq: "ocean.jpg" }) {
      childImageSharp {
        masonryImg: fluid(quality: 80, maxWidth: 2100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    products: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            name
            price
            img {
              childImageSharp {
                fluid(quality: 80, maxHeight: 800, maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const index = ({ data }) => {
  const { heroImg } = data.hero.childImageSharp
  const products = data.products.edges
  const masonryItems = [
    {
      heading: 'The Custom Collection',
      buttonText: 'Shop now',
      linksTo: '/shop',
      img: data.masonry1.childImageSharp.masonryImg,
    },
    {
      heading: 'The Washed Collection',
      buttonText: 'Shop now',
      linksTo: '/shop',
      img: data.masonry2.childImageSharp.masonryImg,
    },
    {
      heading: 'The Wanderlust Collection',
      buttonText: 'Shop now',
      linksTo: '/shop',
      img: data.masonry3.childImageSharp.masonryImg,
    },
  ]

  let newProductInCart
  const addToCart = (name, price) => {
    newProductInCart = { name, price }
    console.log(newProductInCart)
  }

  return (
    <Layout
      topBarMessage="Free shipping worldwide this week only"
      newProductInCart={newProductInCart}
    >
      <SEO />
      <Hero
        img={heroImg}
        heading="Where will you go next?"
        body="Introducing the Wanderlust Collection, an active denim specially made for travel junkies like you"
        linksTo="/shop"
        buttonMessage="Shop now"
      />
      <TextBlock
        heading="about us"
        body="At Yoko & Co., our goal is to improve the quality of every bag that we make. We believe that manufacturing is a sacred process. We focus on making every day essentials out of luxury materials. We push the envelope from our studio in Copenhagen."
      />
      <Masonry masonryItems={masonryItems} />
      <ProductsList
        title="New arrivals"
        subtitle="Our new fall favourites are inspired by the color palettes of falling leaves."
        linkText="View all"
        linksTo="/shop"
        products={products}
        addToCart={addToCart}
      />
    </Layout>
  )
}

export default index
