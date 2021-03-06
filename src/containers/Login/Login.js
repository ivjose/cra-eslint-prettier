import React, { Component } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import validation from './validation';
import Styled from './styled';
import CONSTANTS from './constants';
import { login } from './actions';

const { Header, Footer, Content } = Layout;

class Login extends Component {
  state = {
    title: 'Login page'
  };

  handleSubmit = (values, actions) => {
    const { userLogin } = this.props;
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values, 'Handle submit');

      userLogin(values.username, values.password);
      actions.setSubmitting(false);
    }, 1000);
  };

  render() {
    const { title } = this.state;

    console.log(this.props);

    return (
      <Layout style={{ height: '100%' }}>
        <Header>Header</Header>
        <Content>
          <Styled.Wrapper>
            <h1> {CONSTANTS.TITLE} </h1>
            <Link to="/dashboard">{title}</Link>
            <Formik
              initialValues={{
                username: 'eve.holt@reqres.in',
                password: 'cityslicka'
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

const mapDispatchToProps = dispatch => ({
  userLogin: (username, password) => dispatch(login(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
