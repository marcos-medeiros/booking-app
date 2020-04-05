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
  }

  handleChange(value) {
    this.setState({ inputValue: value });
  }


  render() {
    const { handleChange } = this;
    const { onClick } = this.props;
    const { inputValue } = this.state;

    return (
      <div>
        <input type="text" onChange={handleChange} />
        <Button buttonText="Sign In" onClick={() => onClick(inputValue)} />
      </div>

    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Login;
