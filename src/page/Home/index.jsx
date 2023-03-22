import React from 'react'
import { useSelector } from 'react-redux'
import style from './style.module.css'

export default function Home () {
  const { cartData } = useSelector(state => state.addToCardReducer)

  console.log(cartData, 'Home')
  return (
    <div className={style.home_wrap}>
      <div>Home</div>
    </div>
  )
}
