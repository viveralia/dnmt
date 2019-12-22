import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const getMeta = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteTagline: tagline
        siteDescription: description
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const response = useStaticQuery(getMeta)
  const { siteTitle, siteTagline, siteDescription } = response.site.siteMetadata

  return (
    <Helmet defer={false} htmlAttributes={{ lang: 'en-US' }}>
      <title>
        {title ? `${title} | ${siteTitle}` : `${siteTitle} | ${siteTagline}`}
      </title>
      <meta
        name="description"
        content={description ? description : siteDescription}
      />
    </Helmet>
  )
}

export default SEO
