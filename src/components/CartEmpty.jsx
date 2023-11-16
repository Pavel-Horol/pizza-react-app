import React from 'react'
import { Link } from 'react-router-dom'
import img from '../scss/assets/empty-cart.png'

const CartEmpty = () => {
  return (
          <div className="cart cart--empty">
            <h2>Корзина пустая 😕</h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={"../scss/assets/empty-cart.png"} alt="Empty cart" />
            <Link to="/pizza-react-app/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
  )
}

export default CartEmpty