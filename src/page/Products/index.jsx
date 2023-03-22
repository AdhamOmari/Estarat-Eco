import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartDataAction } from '../../redux/Card/action'
import { FetchData } from '../../redux/Products/action'
import style from './style.module.css'
export default function Products () {
  const { data } = useSelector(state => state.FetchData)
  const dispatch = useDispatch()
  const { cartData } = useSelector(state => state.addToCardReducer)

  console.log(cartData, 'Products')

  const handelAddToCard = item => {
    dispatch(cartDataAction(item))

    console.log('add')
  }

  useEffect(() => {
    dispatch(FetchData())
  }, [])
  return (
    <div className={style.card_flex}>
      {data?.map(item => (
        <div key={item?.id}>
          <img src={item?.image_link} alt={item?.image_link} srcset='' />
          <p>{item?.name}</p>
          {new Array(item?.rating).fill('⭐').map(star => (
            <span key={item?.id}>{star}</span>
          ))}
          <p>{item?.price}</p>
          <button onClick={() => handelAddToCard(item)} className={style.btn}>
            Add to The Card
          </button>
        </div>
      ))}
    </div>
  )
}
