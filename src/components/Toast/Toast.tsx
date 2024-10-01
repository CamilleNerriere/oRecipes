import './Toast.scss';

interface UserData {
  pseudo: string;
  token: string;
  logged: boolean;
}

interface ToastProps {
  userData: UserData;
  isLogged: boolean;
}

function Toast({ userData, isLogged }: ToastProps) {
  return (
    <div className="toast">
      {isLogged ? `Bienvenue ${userData.pseudo}` : 'Erreur de Connexion'}
    </div>
  );
}

export default Toast;
