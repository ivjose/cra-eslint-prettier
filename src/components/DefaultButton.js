import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const DefaultButton = ({ text }) => {
  return <Button type="primary">{text}</Button>;
};

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default DefaultButton;
