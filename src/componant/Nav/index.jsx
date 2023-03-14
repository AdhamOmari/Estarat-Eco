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
        setFlag(!flag)
      }
    })
  }
  return (
    <nav className={style.nav_Flex}>
      <h1>Estarta</h1>

      <div className={style.nav_item}>
        {isAuth && (
          <div>
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
