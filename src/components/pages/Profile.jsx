import React from 'react';
import { Form, Formik } from 'formik';

const SignUp = () => {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login__wrapper">
            <h3 className="login__name">Профиль</h3>
            <Formik>
              <Form className="login__form-auth">
                <input
                  type="text"
                  placeholder="Имя пользователя"
                  // value={userName}
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  // value={password}
                />
                <input
                  type="email"
                  placeholder="Электронная почта"
                  // value={email}
                />
                <input type="file" />

                <button type="submit" className="login__btn">
                  Изменить профиль
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
