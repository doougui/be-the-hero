import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import notFound from '../../assets/notfound.svg';

function NotFound({ location }) {
  return (
    <div className="notfound-container">
      <section>
        <img src={logoImg} alt="Be the Hero"/>

        <h1>Ops. A página <span>{location.pathname}</span> não foi encontrada.</h1>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar para home
        </Link>
      </section>

      <img class="notfound-image" src={notFound} alt="404 - Página não encontrada"/>
    </div>
  );
}

export default NotFound;