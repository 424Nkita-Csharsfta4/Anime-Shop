import React from "react"
import "./login.css"
import back from "../../assets/images/my-acc.jpg"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
         
              <h1>Вход</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Почта</span>
            <input type='text' required />
            <span>Пароль </span>
            <input type='password' required />
            <button className='button'>Вход </button>
          </form>
        </div>
      </section>
    </>
  )
}
