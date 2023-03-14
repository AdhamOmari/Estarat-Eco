import React, { useState } from 'react'
import style from './style.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/auth/action'

export default function index () {
  const nav = useNavigate()

  const { isAuth, user } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(false)
  const handelLogout = () => {
    dispatch(logOut()).then(res => {
      if (res) {
        nav('/Login')
      }
    })
  }
  return (
    <nav className={style.nav_Flex}>
      <h1>Estarta</h1>
      <div className={style.nav_item}>
        <Link to='./'>Home</Link>
      </div>

      <div className={style.nav_item}>
        {isAuth && (
          <div>
            <BiUserCircle size={30} onClick={() => setFlag(!flag)} />
          </div>
        )}
        {flag && (
          <div>
            {user.email}
            <button onClick={handelLogout}>Logout</button>
          </div>
        )}
        {!isAuth && (
          <div className={style.link_wrap}>
            <Link to='/Login'>login</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
