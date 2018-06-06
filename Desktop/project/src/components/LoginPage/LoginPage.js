import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organization: '',
      address: '',
      city: '',
      zip: '',
      phone: '',
      email: '',
      website: '',
      org_login: '',
      org_password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/user');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.org_login === '' || this.state.org_password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.org_login, this.state.org_password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          { this.props.login.message }
        </h2>
      );
    }
    return (<span />);
  }

  render() {
       return (
      <div>
        { this.renderAlert() }
        <form onSubmit={this.login}>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Log In"
            />
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
