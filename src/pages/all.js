import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { graphql, Link } from 'gatsby';
import React, { Component } from 'react';
import { Table, Card } from 'react-bootstrap';

import SEO from '~components/SEO';
import Layout from '~components/Layout';
import Search, { defaultValues } from '~components/Search';

const debounceLeading = (fn, delay = 250) =>
  debounce(fn, delay, { leading: true });

export default class AllTestsPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: {
        name: '',
        brand: '',
        capacity: defaultValues.capacity,
        cells: defaultValues.cells
      },
      brands: [],
      results: []
    };

    this.onBrandChange = this.onBrandChange.bind(this);
    this.onCapacityChange = this.onCapacityChange.bind(this);
    this.onCellsChange = this.onCellsChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.setSelectedState = this.setSelectedState.bind(this);
    this.refreshResults = this.refreshResults.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;

    const brandCounts = {};

    for (const edge of data.allMarkdownRemark.edges) {
      const { brand } = edge.node.frontmatter;

      if (!brandCounts[brand]) {
        brandCounts[brand] = 1;
      } else {
        brandCounts[brand]++;
      }
    }

    const brands = Object.entries(brandCounts).map(([brand, count]) => ({
      id: brand,
      text: `${brand} (${count})`
    }));

    this.setState({ brands });
    this.refreshResults();
  }

  refreshResults() {
    const { data } = this.props;
    const { selected } = this.state;
    const results = data.allMarkdownRemark.edges
      .filter(edge => {
        const { title, brand, capacity, cells } = edge.node.frontmatter;

        return (
          (!selected?.name || title.toLowerCase().includes(selected.name)) &&
          (!selected?.brand || brand === selected.brand) &&
          selected?.capacity?.min <= capacity &&
          selected?.capacity?.max >= capacity &&
          selected?.cells?.min <= cells &&
          selected?.cells?.max >= cells
        );
      })
      .map(edge => edge.node.frontmatter);

    this.setState({ results });
  }

  setSelectedState(state) {
    const selected = {
      ...this.state.selected,
      ...state
    };

    this.setState({ selected }, this.refreshResults);
  }

  onBrandChange(brand) {
    this.setSelectedState({ brand });
  }

  onCapacityChange(capacity) {
    const [min, max] = capacity;

    this.setSelectedState({ capacity: { min, max } });
  }

  onCellsChange(cells) {
    const [min, max] = cells;

    this.setSelectedState({ cells: { min, max } });
  }

  onNameChange(name) {
    this.setSelectedState({ name });
  }

  render() {
    const { results } = this.state;

    return (
      <Layout>
        <SEO title="All Tests" />
        <Card body className="mb-4">
          <Card.Title>
            <h3>All Tests</h3>
          </Card.Title>
          <Search
            brands={this.state.brands}
            onBrandChange={debounceLeading(this.onBrandChange)}
            onCapacityChange={debounceLeading(this.onCapacityChange)}
            onCellsChange={debounceLeading(this.onCellsChange)}
            onNameChange={debounceLeading(this.onNameChange)}
            selected={this.state.selected}
          />
        </Card>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Capacity (mAh)</th>
              <th>Cells (series)</th>
              <th>Test</th>
            </tr>
          </thead>
          <tbody>
            {results.map(result => (
              <tr key={result.path}>
                <td>{result.brand}</td>
                <td>{result.capacity} mAh</td>
                <td>{result.cells}S</td>
                <td>
                  <Link to={result.path}>View test &raquo;</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query AllTestsQuery {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            path
            title
            brand
            capacity
            cells
          }
        }
      }
    }
  }
`;
