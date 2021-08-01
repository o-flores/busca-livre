import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions';
import Header from '../components/Header';
import { getUserFromLocalStorage, saveUserToLocalStorage, logout } from '../services/localStorage';
import '../styles/signin.css'

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      islogged: false,
    }
  }

  componentDidMount() {
    const user = getUserFromLocalStorage();
    if (!user) return;
    if (user.name) this.setState({ islogged: true })
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, history } = this.props;
    const { name, email } = this.state;
    login({ name, email });
    saveUserToLocalStorage({ name, email });
    history.push('/busca-livre')
  }

  handleLogout = () => {
    const { history } = this.props;
    logout();
  }

  render() {
    const { name, email, islogged } = this.state;
    return (
      <>
        <Header />
        {islogged ? (
          <div className="logout-container">
            <h3>Você já esta logado, caso queira se deslogar clique no botão abaixo</h3>
            <a href="/busca-livre"><button className="user-login-logout" onClick={ this.handleLogout }>Logout</button></a>
          </div>
        ) : (
          <form className="login-form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              Nome:
              <input
                onChange={this.handleChange}
                value={name}
                type='text'
                name="name"
              />
            </label>
            <label htmlFor="name">
              Email:
              <input
                onChange={this.handleChange}
                value={email}
                type='text'
                name="email"
              />
            </label>
            <div>
            <button
              type='submit'
              disabled={!(email && name)}
              className="user-login-logout"
            >
              Login
            </button>
            </div>
          </form>
        )}
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(loginAction(state)),
})

export default connect(null, mapDispatchToProps)(SignIn);
