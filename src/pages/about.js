import React from "react";
import { graphql, StaticQuery } from "gatsby";
// import Img from "gatsby-image"

import Layout from "../components/layout";
import SEO from "../components/seo";

const WakaTimeLanguages = props => {
  const languages = props.languages;
  return (
    <ul>
      {languages.map(language => (
        <li key={language.node.id}>
          {language.node.name} ({language.node.percent}%)
        </li>
      ))}
    </ul>
  );
};

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const languages = data.allWakaTimeLanguage.edges;
  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <header className="page-head">
        <h1 className="page-head-title">Over mij</h1>
        <p className="page-head-description">
          Ik ben Simon Resok. Ik ben als front-end web developer gespecialiseerd
          in onder andere HTML, CSS, JavaScript en toegankelijkheid voor
          iedereen.
        </p>

        <p>
          Momenteel aan het schrijven{" "}
          <small>
            (Via{" "}
            <a
              href="https://wakatime.com/@simonresok"
              target="_blank"
              rel="noopener noreferrer"
            >
              WakaTime
            </a>
            )
          </small>
        </p>
        <WakaTimeLanguages languages={languages} />
      </header>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    allWakaTimeLanguage {
      edges {
        node {
          id
          name
          percent
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
