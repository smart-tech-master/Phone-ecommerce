import React, { Component } from 'react'
import Header from 'components/header'
import ButtonGroup from 'components/common/ButtonGroup'
import ButtonComponent from 'components/common/buttonComponent/ButtonComponent'
import * as EmailValidator from 'email-validator'
import { LOGO_IMG } from 'common/images'
import {
  email_box,
  password_box,
  form_group,
  blue_arrow,
  input_email,
  button_group,
  // btn_dark,
  // input_password,
  eye_icon
} from './signup.module.scss'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: ''
      },
      arrow: false,
      emailBox: true,
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    const { name, value } = event.target
    const { user } = this.state
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
    if (event.target.name === 'email') {
      if (EmailValidator.validate(this.state.user.email)) {
        this.setState({ arrow: !this.state.arrow })
      }
    }
  }

  showPassword = () => {
    this.setState({ emailBox: !this.state.emailBox })
  }

  handleSubmit(event) {
    this.setState({ submitted: true })
    const { user } = this.state
    console.log("test")
    if (user.email && user.password) {
      // this.props.register(user);
    }
    event.stopPropagation()
  }

  componentDidUpdate() { }

  render() {
    return (
      <div className="wrapper">
        <Header onFeedBackClick={this.onFeedBackClick} />
        <section className="main-wrapper">
          {this.state.emailBox && (
            <div className={email_box}>
              <img src={LOGO_IMG} alt="" />
              <p>
                Welcome to TechSpecs. <b>Continue with your e-mail</b> or your
                social media to get access to all features.
              </p>
              <div className={form_group}>
                <label>Continue with e-mail</label>
                <div className={input_email}>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    value={this.state.user.email}
                    onChange={this.handleChange}
                  />
                  {this.state.arrow && (
                    <div className={blue_arrow} onClick={this.showPassword}>
                      <i className="fa fa-long-arrow-right"></i>
                    </div>
                  )}
                </div>
                <div className={button_group}>
                  <ButtonGroup />
                </div>
              </div>
            </div>
          )}
          {!this.state.emailBox && (
            <div className={password_box}>
              <img src={LOGO_IMG} alt="" />
              <p>
                We see that you are a new member. <br />
                <b>Create your password</b> below to be a TechSpecs member.
              </p>
              <div className={form_group}>
                <div className="input_password">
                  <label>Create your password</label>
                  <div className={input_email}>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      value={this.state.user.password}
                      onChange={this.handleChange}
                      placeholder="Please enter minimum 8 characters."
                    />
                    <div className={eye_icon}>
                      <i className="fa fa-eye"></i>
                    </div>
                    {this.state.submitted && !this.state.user.password && (
                      <div>Password is required</div>
                    )}
                  </div>
                </div>
                <div className={button_group}>
                  <ButtonComponent
                    children="Create Your Account"
                    className="btn btn-info btn-lg"
                    onClick={this.handleSubmit}
                  />
                  {this.state.status}
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    )
  }
}

export default Signup
