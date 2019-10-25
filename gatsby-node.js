const { resolve } = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const component = resolve('src/components/markdown.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': resolve(__dirname, 'src/components'),
        '~pages': resolve(__dirname, 'src/pages')
      }
    }
  });
};
