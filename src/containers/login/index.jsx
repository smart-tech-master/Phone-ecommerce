import React, { Component } from 'react'
import Header from 'components/header'
import { LOGO_IMG } from 'common/images'
import ButtonGroup from 'components/common/ButtonGroup'
import ButtonComponent from 'components/common/buttonComponent/ButtonComponent'
import {
  login_box,
  form_group,
  input_password,
  eye_icon,
  forget_label,
  login_button,
  button_group
} from './login.module.scss'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  updateEmail = e => {
    this.setState({ email: e.target.value })
  }

  updatePassword = e => {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className="wrapper">
        <Header onFeedBackClick={this.onFeedBackClick} />
        <section className="main-wrapper">
          <div className={login_box}>
            <img src={LOGO_IMG} alt="" />
            <p>Login to your TechSpecs account to access our all features!</p>
            <div className={form_group}>
              <label>Enter your e-mail</label>
              <div>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.updateEmail}
                />
              </div>
              <label>Enter your password</label>
              <div className={input_password}>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.updatePassword}
                />
                <div className={eye_icon}>
                  <i className="fa fa-eye"></i>
                </div>
                <label className={forget_label}>Forgot your password?</label>
                <div className={login_button}>
                  <ButtonComponent
                    children="Login to Your Account"
                    className="btn btn-info btn-lg"
                  />
                </div>
              </div>
              <div className={button_group}>
                <ButtonGroup />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Login
