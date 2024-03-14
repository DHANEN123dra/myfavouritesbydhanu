import {Component} from 'react'
import {v4} from 'uuid'
import Password from '../Password'
import './index.css'

class PasswordItem extends Component {
  state = {
    passwordsList: [],
    websiteUrlInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
    isPasswordShown: false,
  }

  onDeletePassword = id => {
    const {passwordsList} = this.state
    this.setState({
      passwordsList: passwordsList.filter(
        eachPassword => eachPassword.id !== id,
      ),
    })
  }

  searchResults = () => {
    const {passwordsList, searchInput} = this.state
    passwordsList.filter(eachPassword =>
      eachPassword.url.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  onChangeWebsiteUrl = event => {
    this.setState({websiteUrlInput: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onCheckChange = () => {
    this.setState(prevState => ({isPasswordShown: !prevState.isPasswordShown}))
  }

  onAddSubmitButton = event => {
    event.preventDefault()

    const {websiteUrlInput, userNameInput, passwordInput} = this.state

    const newPassword = {
      id: v4(),
      url: websiteUrlInput,
      name: userNameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
    }))
  }

  render() {
    const {passwordsList, isPasswordShown} = this.state

    const searchResults = this.searchResults()

    return (
      <div className='app-container'>
        <img
          className='app-logo'
          src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
          alt='app-logo'
        />
        <div className='password-card'>
          <form className='form' onSubmit={this.onAddSubmitButton}>
            <h1 className='heading'>Add New Password</h1>
            <div className='input-container'>
              <div className='input-logo-container'>
                <img
                  className='input-logo'
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
                  alt='website'
                />
              </div>
              <input
                className='input'
                placeholder='Enter Wbsite'
                type='text'
                onChange={this.onChangeWebsiteUrl}
              />
            </div>
            <div className='input-container'>
              <div className='input-logo-container'>
                <img
                  className='input-logo'
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
                  alt='username'
                />
              </div>
              <input
                className='input'
                placeholder='Enter Username'
                type='text'
                onChange={this.onChangeUserName}
              />
            </div>
            <div className='input-container'>
              <div className='inpout-logo-container'>
                <img
                  className='input-logo'
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
                  alt='password'
                />
              </div>
              <input
                className='input'
                placeholder='Enter Password'
                type='password'
                onChange={this.onChangePassword}
              />
            </div>
            <div className='add-button-container'>
              <button className='add-button' type='button'>
                Add
              </button>
            </div>
          </form>
          <img
            className='password-manger-image'
            src='https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
            alt='passwordmanager'
          />
        </div>

        <div className='passwords-card'>
          <div className='container-1'>
            <div className='passwords-count container'>
              <h1 className='passwords'>Your Passwords</h1>
              <p className='count'>{passwordsList.length}</p>
            </div>
            <div className='search-box-container'>
              <div className='search-icon-logo-container'>
                <img
                  className='search-logo'
                  src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
                  alt='search'
                />
              </div>
              <input
                className='search-box'
                type='search'
                onChange={this.searchInput}
                placeholder='Search'
              />
            </div>
          </div>
          <hr className='line' />
          <div className='checkbox-container'>
            <input
              className='checkbox-input'
              type='checkbox'
              id='checkbox'
              onChange={this.onCheckChange}
            />
            <label htmlFor='checkbox' className='checkbox-label'>
              Show Passwords
            </label>
          </div>
          {searchResults.length === 0 ? (
            <div className='no-passwords-container'>
              <img
                className='no-passwords'
                src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
                alt='no passwords'
              />
              <p className='no-passwords-title'>No Passwords</p>
            </div>
          ) : (
            <ul className='passwords-list-container'>
              {searchResults.map(eachPassword => (
                <Password
                  passwordDetails={eachPassword}
                  key={eachPassword.id}
                  onDeleteButton={this.onDeletePassword}
                  passwordShow={isPasswordShown}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordItem
