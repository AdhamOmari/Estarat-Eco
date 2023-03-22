import React, { useState } from 'react'
import style from './style.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { BsCart4 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/auth/action'
// import { RingLoader } from 'react-spinners'

export default function index () {
  const nav = useNavigate()
  const { cartData } = useSelector(state => state.addToCardReducer)

  console.log(cartData.length, 'data.length')
  const { isAuth, user, loading } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(false)
  const handelLogout = () => {
    dispatch(logOut()).then(res => {
      if (res) {
        nav('/Login')
        setFlag(!flag)
      }
    })
  }
  // if (loading) return <RingLoader color='#36d7b7' size={20} />
  return (
    <nav className={style.nav_Flex}>
      <h1>Estarta</h1>

      <div className={style.nav_item}>
        {isAuth && (
          <div className={style.nav_wrap}>
            <NavLink to='/Products' className={style.Products}>
              Products
            </NavLink>
            <Link to='/Cart' className={style.cart_color}>
              <BsCart4 size={25} />
              <div className={style.cart_number}>{cartData?.length}</div>
            </Link>
            <BiUserCircle
              size={30}
              color={'#fff'}
              onClick={() => setFlag(!flag)}
            />
          </div>
        )}

        <div className={style.flag_Wrap}>
          {flag && (
            <div className={style.flag_element}>
              {user.email}
              <button onClick={handelLogout} className={style.btt}>
                Logout
              </button>
            </div>
          )}
          {!isAuth && (
            <div className={style.link_wrap}>
              <Link to='/Login'>
                <button className={style.link_button}>login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
