import React from 'react';

import SEO from '~components/seo';
import Layout from '~components/layout';
import { Container, Card, Row, Col } from 'react-bootstrap';

const DonatePage = () => (
  <Layout>
    <SEO title="Donate" />
    <Container>
      <Row>
        <Col md="12">
          <h1>Donations</h1>
          <p>
            I am a software developer with a full-time job. I am lucky to be in
            a position where I can put this site and its resources together
            using my own time and money. I have no interest in profiting off of
            it, but adding new content requires a constant stream of LiPo
            purchases. I do have a small amount that I can budget for testing
            packs for my own use, but there&apos;s no way I will be able to
            build a comprehensive database alone.
          </p>
          <p>
            To that end, there are two ways that you can support the project
            which I will shamelessly plug here.
          </p>
          <ol>
            <li>
              <a href="#money">Donate money for packs</a>
            </li>
            <li>
              <a href="#packs">Donate packs for testing</a>
            </li>
          </ol>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md="12">
          <Card>
            <Card.Body>
              <Card.Title id="money">Donate money for packs</Card.Title>
              <Card.Text>
                You can donate funds towards my pack list by using the button
                below. An online poll for most desired packs will exist as soon
                as I have time to write it, but for now email andrew (at)
                bulletlogic (dot) com.
                <hr />
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="6FMCGYDLWKTZA"
                  />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <Card>
            <Card.Body>
              <Card.Title id="packs">Donate packs for testing</Card.Title>
              <Card.Text>
                If you have unused (fewer than five charge cycles) 2S-6S LiPo
                packs that you want tested, you can send them to me.
              </Card.Text>
              <Card.Text>Here&apos;s how it works:</Card.Text>
              <ol>
                <li>Email me at andrew (at) bulletlogic (dot) com</li>
                <li>Include as many specifics about the packs as possible</li>
                <li>I will reply letting you know if I can test them</li>
                <li>Assuming I can, ship me the packs</li>
                <li>
                  I run the tests, inform you of the results, and then publish
                  them
                </li>
                <li>
                  If a pack was damaged, it is unlikely that I can safely return
                  it to you and I will dispose of it responsibly
                </li>
                <li>
                  If one or more packs were not damaged, print me an airbill
                  with your favorite carrier and I will return them posthaste
                </li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default DonatePage;
