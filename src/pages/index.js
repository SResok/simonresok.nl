import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Bio from "../components/bio"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="Home"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      <header className="page-head">
        <h1 className="page-head-title">Ik ben een front-end developer</h1>
        <p className="page-head-description">
          Lees over <Link to={`/about`}>mijn achtergrond en ervaring</Link>{/*  of{" "}
          <Link to={`/blog`}>mijn blog posts</Link> */}. Voor beschikbaarheid,{" "}
          <Link to={`/contact`}>neem contact op</Link>.
        </p>
      </header>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Index location={props.location} props data={data} {...props} />
    )}
  />
);
