import React from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import { graphql, useStaticQuery } from 'gatsby'

const getMeta = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Header = ({ topBarMessage }) => {
  const response = useStaticQuery(getMeta)
  const { title } = response.site.siteMetadata
  return (
    <header>
      <TopBar message={topBarMessage} />
      <Navbar siteTitle={title} />
    </header>
  )
}

export default Header
