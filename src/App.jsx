import React, { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './componant/Nav/index'
import { tokenChecker } from './redux/auth/action'

const Home = lazy(() => import('./page/Home'))
const Cart = lazy(() => import('./page/Cart'))
const Products = lazy(() => import('./page/Products'))
const Login = lazy(() => import('./page/Login'))
const Notfound = lazy(() => import('./page/Notfound'))
import { useDispatch, useSelector } from 'react-redux'

import ProtectedRoutes from './componant/ProtectedRoutes/index'

export default function App () {
  const { isAuth } = useSelector(state => state.authReducer)

  const dispatch = useDispatch()

  const nav = useNavigate()
  useEffect(() => {
    if (isAuth) {
      dispatch(tokenChecker()).then(res => {
        if (!res) {
          nav('/Login')
        }
      })
    }
  }, [isAuth])

  return (
    <div className='App'>
      <NavBar />
      <Suspense fallback={'Loading ..... !'}>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path='/Cart'
            element={<ProtectedRoutes element={<Cart />} />}
          />
          <Route
            path='/Products'
            element={<ProtectedRoutes element={<Products />} />}
          />
          <Route path='/Login' element={<Login />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Suspense>
    </div>
  )
}
