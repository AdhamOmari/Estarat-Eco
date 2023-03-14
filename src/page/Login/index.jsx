import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/auth/action'
import { useDispatch, useSelector } from 'react-redux'

export default function LoginPage () {
  const { isAuth, loading } = useSelector(state => state.authReducer)
  console.log(isAuth)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleLogin () {
    dispatch(login(email))
  }

  useEffect(() => {
    if (isAuth) navigate('/')
  }, [isAuth])

  return (
    <div className={styles.loginContainer}>
      <input
        onChange={e => setEmail(e.target.value)}
        type='email'
        placeholder='Enter your email'
      />

      <button
        disabled={loading}
        onClick={handleLogin}
        className={styles.loginBtn}
      >
        {loading ? 'Loading...' : 'login'}
      </button>
    </div>
  )
}
