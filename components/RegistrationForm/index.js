import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    secondNameInput: '',
    registrationStatus: false,
    errorMsg1: '',
    errorMsg2: '',
    errorMsg3: '',
  }

  firstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  secondName = event => {
    this.setState({secondNameInput: event.target.value})
  }

  onSuccessRegistration = () => {
    this.setState({registrationStatus: true})
  }

  onFailureRegistration = () => {
    const {firstNameInput, secondNameInput} = this.state
    if (firstNameInput === '' && secondNameInput === '') {
      this.setState({errorMsg1: 'Required'})
      this.onBlurInputField()
    }
    if (firstNameInput === '' && secondNameInput !== '') {
      this.setState({errorMsg2: 'Required'})
    }
    if (firstNameInput !== '' && secondNameInput === '') {
      this.setState({errorMsg3: 'Required'})
    }
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      registrationStatus: false,
      firstNameInput: '',
      secondNameInput: '',
    })
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstNameInput, secondNameInput} = this.state

    if (firstNameInput !== '' && secondNameInput !== '') {
      this.onSuccessRegistration()
    } else {
      this.onFailureRegistration()
    }
  }

  render() {
    const {
      firstNameInput,
      secondNameInput,
      registrationStatus,
      errorMsg1,
      errorMsg2,
      errorMsg3,
    } = this.state
    // const {classNameBlur} = this.onBlurInputField
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="registration-form-container">
          {registrationStatus ? (
            <div className="success-registration-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
              <button
                className="another-response-btn"
                type="button"
                onClick={this.onSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={this.onSubmitForm}>
              <div className="input-field-container">
                <label htmlFor="firstname">FIRST NAME</label>
                <input
                  placeholder="First name"
                  id="firstname"
                  value={firstNameInput}
                  onChange={this.firstName}
                />
                <p className="error-msg">{errorMsg1}</p>
                <p className="error-msg">{errorMsg2}</p>
              </div>
              <div className="input-field-container">
                <label htmlFor="secondname">LAST NAME</label>
                <input
                  placeholder="Second name"
                  id="secondname"
                  value={secondNameInput}
                  onChange={this.secondName}
                />
                <p className="error-msg">{errorMsg1}</p>
                <p className="error-msg">{errorMsg3}</p>
              </div>
              <div className="button-container">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
