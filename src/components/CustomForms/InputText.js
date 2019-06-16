import React from 'react';
import { Form, Icon, Input } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

function InputText({
  field,
  form: { touched, errors },
  layout,
  required,
  icon,
  label,
  size,
  type,
  placeholder
}) {
  console.log(size, 'size');

  return (
    <FormItem
      {...layout}
      required={required}
      label={label}
      validateStatus={touched[field.name] && errors[field.name] && 'error'}
      help={touched[field.name] && errors[field.name]}
    >
      <Input
        {...field}
        size={size}
        type={type}
        placeholder={placeholder}
        prefix={icon && <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
      />
    </FormItem>
  );
}

InputText.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  field: PropTypes.any.isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object
  }),
  required: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  layout: PropTypes.any
};

InputText.defaultProps = {
  form: {
    touched: {},
    errors: {}
  },
  required: false,
  icon: null,
  label: '',
  size: 'default',
  type: 'text',
  placeholder: '',
  layout: ''
};

export default InputText;
