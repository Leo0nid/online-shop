//react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'
const SignUp = () => {
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const formValueSignUp = {
    email: email,
    full_name: userName,
    password: password,
  }

  const signUp = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    try {
      const response = await axios.post('http://164.92.99.90:8000/api-account/register/', formValueSignUp);
      setLoading(false);
      toast.success('Аккаунт создан!');
      navigate('/login');
      console.log(response.data);
    
    } catch (error) {
      console.error('Ошибка запроса:', error);
      setLoading(false);
      toast.error('Ошибка!');
  
    }
  }
  
  return (
    <>
      <div className="login">
        <div className="container">
          {loading ? (
            <h4 className="login__loading">Загрузка..</h4>
          ) : (
            <div className="login__wrapper">
              <h3 className="login__name">Регистрация</h3>
              <Formik>
                <Form className="login__form-auth" onSubmit={signUp}>
                  <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Электронная почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                   
  
                  <button type="submit" className="login__btn">
                    Зарегистрироваться
                  </button>
                  <p className="login__path">
                    У вас еще нет аккаунта?{' '}
                    <Link className="login__path-link" to="/login">
                      Войти
                    </Link>
                  </p>
                </Form>
              </Formik>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
