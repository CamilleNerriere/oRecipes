import './Header.scss';

function Header() {
  return (
    <div className="header">
      <img className="header__img" src="src/assets/logo.png" alt="" />
      <form className="header__login">
        <input
          className="header__input"
          type="email"
          id="login-email"
          placeholder="Adresse Email"
          name="email"
        />
        <input
          className="header__input"
          type="password"
          id="login-password"
          placeholder="Mot de Passe"
          name="password"
        />
        <button className="header__button" type="submit">
          {' '}
          OK{' '}
        </button>
      </form>
    </div>
  );
}

export default Header;
