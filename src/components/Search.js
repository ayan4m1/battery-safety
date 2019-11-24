import { Range } from 'rc-slider';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import 'rc-slider/assets/index.css';

export const defaultValues = {
  name: '',
  brand: '',
  capacity: {
    min: 750,
    max: 3000
  },
  cells: {
    min: 1,
    max: 6
  }
};

export default class Search extends Component {
  static propTypes = {
    selected: PropTypes.shape({
      name: PropTypes.string,
      brand: PropTypes.string,
      capacity: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number
      }),
      cells: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number
      })
    }).isRequired,
    brands: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ),
    onNameChange: PropTypes.func.isRequired,
    onBrandChange: PropTypes.func.isRequired,
    onCapacityChange: PropTypes.func.isRequired,
    onCellsChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleChange(event) {
    const {
      target: { name, value }
    } = event;

    // eslint-disable-next-line default-case
    switch (name) {
      case 'name':
        this.props.onNameChange(value);
        break;
      case 'brand':
        this.props.onBrandChange(value);
        break;
    }
  }

  handleSliderChange(name, values) {
    // eslint-disable-next-line default-case
    switch (name) {
      case 'capacity':
        this.props.onCapacityChange(values);
        break;
      case 'cells':
        this.props.onCellsChange(values);
        break;
    }
  }

  generateMarks(min, max, step = 1) {
    const marks = {};

    for (let i = min; i <= max; i += step) {
      marks[i] = <p>{i}</p>;
    }

    return marks;
  }

  get capacityMarks() {
    return this.generateMarks(
      defaultValues.capacity.min,
      defaultValues.capacity.max,
      250
    );
  }

  get cellsMarks() {
    return this.generateMarks(defaultValues.cells.min, defaultValues.cells.max);
  }

  render() {
    const {
      brands,
      selected: {
        name: selectedName,
        brand: selectedBrand,
        capacity: { min: capacityMin, max: capacityMax },
        cells: { min: cellsMin, max: cellsMax }
      }
    } = this.props;

    return (
      <Container>
        <Form>
          <Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="input"
                value={selectedName}
                onChange={this.handleChange}
                placeholder="Superpower 4S 1500mAh"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md={12}>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                as="select"
                name="brand"
                value={selectedBrand}
                onChange={this.handleChange}
              >
                <option value="">All brands</option>
                {brands.map(brand => (
                  <option key={brand.id} value={brand.id}>
                    {brand.text}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <Form.Label>Capacity (mAh)</Form.Label>
              <Form.Control
                allowCross={false}
                as={Range}
                marks={this.capacityMarks}
                max={defaultValues.capacity.max}
                min={defaultValues.capacity.min}
                name="capacity"
                onChange={values => this.handleSliderChange('capacity', values)}
                step={250}
                value={[capacityMin, capacityMax]}
              />
            </Form.Group>
            <Form.Group as={Col} md={6}>
              <Form.Label>Cells (series)</Form.Label>
              <Form.Control
                allowCross={false}
                as={Range}
                marks={this.cellsMarks}
                max={defaultValues.cells.max}
                min={defaultValues.cells.min}
                name="cells"
                onChange={values => this.handleSliderChange('cells', values)}
                value={[cellsMin, cellsMax]}
              />
            </Form.Group>
          </Row>
        </Form>
      </Container>
    );
  }
}
