import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, history } = this.props;
    login(this.state);
    history.push('/busca-livre')
  }

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="name">
          Nome:
          <input
            onChange={ this.handleChange }
            value={ name }
            type='text'
            name="name"
          />
        </label>
        <label htmlFor="name">
          email:
          <input
            onChange={ this.handleChange }
            value={ email }
            type='text'
            name="email"
          />
        </label>
        <button
          type='submit'
          disabled={!(email && name)}
        >
          Login
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(loginAction(state)),
})

export default connect(null, mapDispatchToProps)(SignIn);
