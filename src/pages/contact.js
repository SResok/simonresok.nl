import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { FaEnvelope } from "react-icons/fa";
import Obfuscate from "react-obfuscate";

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle} location={location}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1 className="post-content-title">Contact</h1>

          <p>
            E-mail:&nbsp;
            <Obfuscate
              email="simonresok@hotmail.com"
              headers={{
                subject: "",
                body: ""
              }}
            />
          </p>
        </div>
      </article>
    </Layout>
  );
};

const contactQuery = graphql`
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
    query={contactQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
);
