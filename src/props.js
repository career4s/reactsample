import React from 'react';
import PropTypes from 'prop-types';

const Greeting = (props) => {
  return <h1>props demo......Hello, {props.name}!</h1>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

Greeting.defaultProps = {
  name: 'Guest',
};

export default Greeting;
