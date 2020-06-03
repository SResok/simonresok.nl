const path = require(`path`);
const _ = require("lodash");
const axios = require("axios");
const crypto = require("crypto");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const tagPage = path.resolve(`./src/templates/tag-page.js`);

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;
    const tagSet = new Set();

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      // Get tags for tags pages.
      if (post.node.frontmatter.tags) {
        post.node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag);
        });
      }

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      });
    });

    // Create tags pages.
    tagSet.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagPage,
        context: {
          tag
        }
      });
    });

    return null;
  });
};
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`
    });
  }
};

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  const fetchWakaTimeStats = () =>
    axios.get(`https://wakatime.com/api/v1/users/@simonresok/stats`);
  const res = await fetchWakaTimeStats();

  // map into these results and create nodes
  res.data.data.languages.map((language, i) => {
    const languageNode = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `WakaTimeLanguage`
      },
      children: [],

      name: language.name,
      percent: language.percent
    };

    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(languageNode))
      .digest(`hex`);
    // add it to languageNode
    languageNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(languageNode);
  });

  return;
};
