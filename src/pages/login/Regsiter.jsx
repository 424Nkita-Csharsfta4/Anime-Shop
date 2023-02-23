import React from "react"
import "./login.css"
import back from "../../assets/images/my-acc.jpg"
import { Link } from "react-router-dom"

export const Regsiter = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Регистрация</h3>
              <h1>Акаунта</h1>
            </div>
          </div>

          <form>
            <span>Почта</span>
            <input type='text' required />
            <span>Имя * </span>
            <input type='text' required />
            <span>Пароль * </span>
            <input type='text' required />
            <span>Повторить Пароль * </span>
            <input type='text' required />
            <button className='button'>Зарегистрироваться</button>
          </form>
        </div>
      </section>
    </>
  )
}
