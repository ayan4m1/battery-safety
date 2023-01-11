import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';

import SEO from '~components/SEO';
import Layout from '~components/Layout';

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        <Col md={8}>
          <h1>Vapor Wilco LiPo Testing</h1>
        </Col>
        <Col md={4} className="text-end">
          <h2 className="text-muted">
            {data.allMarkdownRemark.edges.length} tests total
          </h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>
            I am a single individual who has been motivated to provide LiPo
            battery tests because of the lack of reliable, accurate information
            available online.
          </p>
          <p>
            My testing rig is a West Mountain Radio{' '}
            <a
              href="http://www.westmountainradio.com/product_info.php?products_id=cba4"
              target="_blank"
              rel="noopener noreferrer"
            >
              CBA IV Pro
            </a>
            . It is capable of testing to a high degree of accuracy at loads up
            to 150W or 40A, whichever comes first.
          </p>
          <p>
            For 4S packs, this means a limit of ~10A. I am saving up for an{' '}
            <a
              href="http://www.westmountainradio.com/product_info.php?products_id=cbaamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              amplifier
            </a>
            , which would allow testing a 4S pack up to 34A, but it&apos;s not
            available to me at the moment.
          </p>
          <p>
            Until I have developed my testing methodology fully, I feel
            uncomfortable assigning grades or ratings to packs, but for now I
            will collect the data and share it all with you.
          </p>
          <p>
            If you would like to help support this project, take a look at the{' '}
            <Link to="/donate">donate</Link> page or take the{' '}
            <a
              href="https://forms.gle/MkzmBG7Nukmd7ypg7"
              target="_blank"
              rel="noopener noreferrer"
            >
              LiPo battery survey
            </a>
            .
          </p>
          <p>
            Thank you for reading, and I hope this information helps you make a
            better informed purchasing decision!
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs className="text-center">
          <Link to="/recent">
            <h3>View the recent tests here</h3>
          </Link>
        </Col>
      </Row>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query MostRecentPostQuery {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
        }
      }
    }
  }
`;
