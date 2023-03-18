import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from '../../redux/Products/action'
import style from './style.module.css'
export default function Products () {
  const { data } = useSelector(state => state.FetchData)

  const dispatch = useDispatch()
  console.log('adada')
  console.log(data)

  useEffect(() => {
    dispatch(FetchData())
  }, [])
  return (
    <div className={style.card_flex}>
      {data?.map(item => (
        <div key={item?.id}>
          <img src={item?.image_link} alt={item?.image_link} srcset='' />
          <p>{item?.name}</p>
          <p>{item?.rating}</p>
          <p>{item?.price}</p>
          <p></p>
        </div>
      ))}
    </div>
  )
}
