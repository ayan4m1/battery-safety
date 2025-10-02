/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, title }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <head>
      <meta content={metaDescription} name="description" />
      <meta content={title} property="og:title" />
      <meta content={metaDescription} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content="summary" name="twitter:card" />
      <meta content={site.siteMetadata.author} name="twitter:creator" />
      <meta content={title} name="twitter:title" />
      <meta content={metaDescription} name="twitter:description" />
      <title>
        {title} | {site.siteMetadata.title}
      </title>
    </head>
  );
}

SEO.defaultProps = {
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default SEO;
