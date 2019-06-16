import React, { Component } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import LoginForm from './components/LoginForm';
import validation from './validation';
import Styled from './styled';
import CONSTANTS from './constants';

const { Header, Footer, Content } = Layout;

class Login extends Component {
  state = {
    title: 'Login page'
  };

  handleSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  render() {
    const { title } = this.state;
    return (
      <Layout style={{ height: '100%' }}>
        <Header>Header</Header>
        <Content>
          <Styled.Wrapper>
            <h1> {CONSTANTS.TITLE} </h1>
            <Link to="/dashboard">{title}</Link>
            <Formik
              initialValues={{
                username: '',
                password: ''
              }}
              onSubmit={this.handleSubmit}
              enableReinitialize
              validationSchema={validation.login}
              component={LoginForm}
            />
          </Styled.Wrapper>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default Login;
