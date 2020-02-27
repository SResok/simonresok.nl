import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"

import "../style/normalize.css"
import "../style/all.scss"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const Index = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      <header className="page-head">
        <h2 className="page-head-title">
          My portfolio with a bold, minimal theme, focused on clean typography.
        </h2>
      </header>
    </Layout>
  );
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Index location={props.location} props data={data} {...props} />
    )}
  />
)
