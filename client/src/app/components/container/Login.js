import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../presentational/Button';
import { loginUser, postData, getData } from '../../actions/actions';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getData } = this.props;
    getData('users');
  }

  handleClick() {
    const {
      loginUser, users, postData, getData,
    } = this.props;
    const { inputValue } = this.state;

    const user = users.filter(u => u.name === inputValue)[0];

    getData('tests');
    getData('aircrafts');

    if (user === undefined) {
      postData('users', { user: { name: inputValue } });
      loginUser({ name: inputValue, id: users.length + 1 });
    } else {
      loginUser(user);
    }
  }

  handleChange(value) {
    this.setState({ inputValue: value });
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
  loginUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  postData: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginUser: (username, users) => {
    dispatch(loginUser(username, users));
  },
  postData: (model, data) => {
    postData(model, data)(dispatch);
  },
  getData: model => {
    getData(model)(dispatch);
  },
});

const mapStateToProps = state => ({ users: state.users.items });

export default connect(mapStateToProps, mapDispatchToProps)(Login);