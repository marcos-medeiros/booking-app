import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(value) {
    this.setState({ inputValue: value });
  }

  handleClick() {
    const { onClick, users, postData } = this.props;
    const { inputValue } = this.state;

    const user = users.filter(u => u.name === inputValue)[0];

    if (user === undefined) {
      postData('users', { user: { name: inputValue } });
      onClick({ name: inputValue, id: users.length + 1 });
    } else {
      onClick(user);
    }
  }


  render() {
    const { handleChange, handleClick } = this;

    return (
      <div className="login">
        <h3 className="logo">AeroTest</h3>
        <p className="login-label">Username:</p>
        <input type="text" onChange={e => handleChange(e.target.value)} />
        <Button styleClass="btn" buttonText="Sign In / Sign Up" onClick={() => handleClick()} />
      </div>

    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  postData: PropTypes.func.isRequired,
};

export default Login;
