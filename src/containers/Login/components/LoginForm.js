import React from 'react';
import { Form, FastField } from 'formik';
import { Button } from 'antd';
import InputText from 'components/CustomForms/InputText';

const LoginForm = ({ isSubmitting }) => {
  return (
    <Form>
      <FastField
        customlabel="USERNAME"
        name="username"
        type="text"
        placeholder="Enter your Username"
        component={InputText}
      />

      <FastField
        customlabel="PASSWORD"
        name="password"
        type="password"
        placeholder="Enter your Password"
        component={InputText}
      />

      <Button type="primary" htmlType="submit" disabled={isSubmitting}>
        SIGN IN
      </Button>
    </Form>
  );
};

export default LoginForm;
