import React from "react"
import image from "../../assets/images/input.png"
import "./account.css"

export const Account = () => {
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Информация о акаунте</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*' src={image} alt='imgs' />
                <img src={image} alt='' className='image-preview' />
              </div>
            </div>
            <div className='right'>
              <label>Имя</label>
              <input type='text' required />
              <label>Почта</label>
              <input type='text' required />
              <label>Пароль * </label>
              <input type='text' required />
              <button className='button'>Обновить</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
