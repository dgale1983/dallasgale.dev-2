import React from 'react'
import { withRouter } from 'react-router-dom'
import NetlifyForm from 'react-netlify-form'

import { SecondaryButton } from '../styled/buttons'


const GetInTouch = (props) => {
  const { history } = props
  return (
    <NetlifyForm name="Get In Touch">
      {({ loading, error, success }) => (
        <div>
          {loading && <div>Loading...</div>
          }
          {error && <div>Your information was not sent. Please try again later.</div>
          }
          {success && history.push('/thanks/')
          }
          {!loading && !success && (
            <>
              <div>
                <input type="text" name="bot-field" hidden />
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
                />
              </div>
              <SecondaryButton pullRight>Send</SecondaryButton>
            </>
          )}
        </div>
      )}
    </NetlifyForm>
  )
}

export default GetInTouch

// const encode = data => (
//   Object.keys(data)
//     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
//     .join('&')
// )

// class Form extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { name: '', email: '', message: '' }
//   }

//   handleSubmit = (e) => {
//     const { history } = this.props
//     fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: encode({ 'form-name': 'Get In Touch', ...this.state }),
//     })
//       .then(() => history.push('/thanks/'))
//       .catch(error => alert(error))

//     e.preventDefault()
//   }

//   handleChange = e => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     const { name, email, message } = this.state
//     return (
//       <>
//         <form
//           data-netlify-recaptcha="true"
//           className="forms__form"
//           onSubmit={this.handleSubmit}
//           method="POST"
//           data-netlify="true"
//           name="Get In Touch"
//           action="/thanks/"
//           netlify-honeypot="bot-field"
//         >
//           <div>
//             <input type="text" name="bot-field" hidden />
//             <label
//               className="forms__label"
//               htmlFor="name"
//             >
//               Your Name:
//             </label>
//             <input
//               className="forms__input"
//               id="name"
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div>
//             <label
//               className="forms__label"
//               htmlFor="email"
//             >
//               Your Email:
//             </label>
//             <input
//               className="forms__input"
//               id="email"
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div>
//             <label
//               className="forms__label"
//               htmlFor="message"
//             >
//               Message:
//             </label>
//             <textarea
//               className="forms__textarea"
//               id="message"
//               name="message"
//               value={message}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div data-netlify-recaptcha="true" />
//           <SecondaryButton pullRight type="submit">Send</SecondaryButton>
//         </form>
//       </>
//     )
//   }
// }

// export default withRouter(Form)
