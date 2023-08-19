import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import logo from './assets/icons/shop.png';
import avatar from '../components/assets/icons/avatar.png';
import logout from '../components/assets/icons/logout.png';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../src/components/custom-hooks/useAuth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

const Header = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);

  const navigate = useNavigate();
  //переход на регистрацию
  const handleAvatarClick = () => {
    navigate('/login');
  };
  //выход из профиля
  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success('Вы успешно вышли из аккаунта!');
      navigate('/');
    } catch (error) {
      toast.error('Ошибка при выходе из аккаунта.');
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <div className="header__logo">
              <img className="header__icon" src={logo} alt="logo" />

              <h1 className="header__logo-name">Shop</h1>
            </div>
          </Link>
          <div className="header__nav">
            <div className="header__nav-list">
              <li>
                <Link to="/">Магазин</Link>
              </li>
              <li>
                <Link to="/categories">Категория</Link>
              </li>
              <li>
                <Link to="/favorites">Избранное</Link>
              </li>
              <li>
                <Link to="/cart">Корзина</Link>
              </li>
            </div>
          </div>

          <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>            
            <ul class="menu__box">
              <li>
                <Link to="/#" class="menu__item">Магазин</Link>
              </li>
              <li>
                <Link to="/categories#" class="menu__item">Категория</Link>
              </li>
              <li>
                <Link to="/favorites#" class="menu__item">Избранное</Link>
              </li>
              <li>
                <Link to="/cart#" class="menu__item">Корзина</Link>
              </li>
            </ul>
          </div>

          <Search />
          <div className="header__profile">
            {currentUser && (
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  handleLogout();
                }}
                className="header__logout">
                <img src={logout} alt="logout" />
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                handleAvatarClick();
              }}
              className="header__avatar">
              <img src={currentUser && currentUser.photoURL ? currentUser.photoURL : avatar} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
