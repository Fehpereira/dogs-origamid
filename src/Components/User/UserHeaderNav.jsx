import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import adicionar from '../../Assets/adicionar.svg';
import estatisticas from '../../Assets/estatisticas.svg';
import feed from '../../Assets/feed.svg';
import sair from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={feed} />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={estatisticas} />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={adicionar} />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <img src={sair} />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
