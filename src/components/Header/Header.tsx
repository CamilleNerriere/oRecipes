import './Header.scss';

interface HeaderProps {
  setUserAuth: React.Dispatch<React.SetStateAction<UserAuth | null>>;
}

function Header({ setUserAuth }: HeaderProps) {
  return (
    <div className="header">
      <img className="header__img" src="src/assets/logo.png" alt="" />
      <form
        className="header__login"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const data = Object.fromEntries(formData);
          const email = data.email as string;
          const password = data.password as string;
          console.log(email, password);
          setUserAuth({
            email,
            password,
          });
        }}
      >
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
