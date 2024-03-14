import './index.css'

const Password = props => {
  const {passwordDetails, onDeleteButton, passwordShow} = props
  const {id, name, url, password} = passwordDetails

  const profileColorsClasses = [
    'color-1',
    'color-2',
    'color-3',
    'color-4',
    'color-5',
    'color-6',
    'color-7',
  ]
  const profileColors = profileColorsClasses[Math.floor(Math.random() * 6)]
  const onClickDelete = () => {
    onDeleteButton(id)
  }

  const passwordText = passwordShow ? (
    <p className="password-text">{password}</p>
  ) : (
    <img
      className="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  return (
    <li className="list-element-container">
      <h1 className={`profile ${profileColors}`}>{name[0]}</h1>
      <div className="name-password-container">
        <p className="url">{url}</p>
        <p className="name">{name}</p>
        {passwordText}
      </div>
      <button className="delete-button" onClick={onClickDelete} type="button" data-testid="delete">
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Password
