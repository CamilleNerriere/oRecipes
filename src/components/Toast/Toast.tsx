import './Toast.scss';

import { IAuthUser } from '../../@types';

function Toast({ user }: IAuthUser) {
  const { pseudo } = user;
  return (
    <div className="toast">
      {IsLogged ? `Bienvenue ${pseudo}` : 'Erreur de Connexion'}
    </div>
  );
}

export default Toast;
