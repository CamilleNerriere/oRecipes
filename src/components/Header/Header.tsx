import './Header.scss';

function Header() {
  return (
    <div className="header">
      <img src="../../assets/logo.svg" alt="" />
      <form className="login">
        <input
          type="email"
          id="login-email"
          placeholders="Adresse Email"
          name="email"
        />
        <input
          type="password"
          id="login-password"
          placeholders="Mot de Passe"
          name="password"
        />
        <button type="submit"> OK </button>
      </form>
    </div>
  );
}

export default Header;
