import React from 'react'
import { withRouter } from 'react-router-dom'

import { SecondaryButton } from '../styled/buttons'

const encode = data => (
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
)

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = (e) => {
    const { history } = this.props
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => history.push('/thanks'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state
    return (
      <>
        {/* A little help for the Netlify post-processing bots */}
        <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        <form
          className="forms__form"
          onSubmit={this.handleSubmit}
          method="post"
          netlify="true"
          data-netlify="true"
          name="contact"
        >
          <div>
            <input type="hidden" name="form-name" value="contact" />
            <label
              className="forms__label"
              htmlFor="name"
            >
              Your Name:
            </label>
            <input
              className="forms__input"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label
              className="forms__label"
              htmlFor="email"
            >
              Your Email:
            </label>
            <input
              className="forms__input"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label
              className="forms__label"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="forms__textarea"
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </div>
          <div data-netlify-recaptcha="true" />
          <SecondaryButton pullRight type="submit">Send</SecondaryButton>
        </form>
      </>
    )
  }
}

export default withRouter(Form)
