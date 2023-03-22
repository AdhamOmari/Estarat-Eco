import { useSelector } from 'react-redux'
import { cartDataAction, Remove_From_Cart } from '../../redux/Card/action'

import style from './style.module.css'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const dispatch = useDispatch()

  const { cartData } = useSelector(state => state.addToCardReducer)
  const { data } = useSelector(state => state.FetchData)

  const handleRemove = item => {
    dispatch(Remove_From_Cart(item))
  }
  const handleAddToCard = item => {
    dispatch(cartDataAction(item))
  }

  console.log(data, 'Cart')
  const total = cartData.reduce((total, current) => {
    return total + current?.price * current?.quantity
  }, 0)
  return (
    <div className={style.cart_wrap}>
      {cartData?.map(item => (
        <div key={item?.id} className={style.cart_border}>
          <img src={item?.image_link} alt={item?.image_link} />
          <p>{item?.name}</p>
          <p>{item?.price}</p>
          <p>{item?.rating}</p>
          <div className={style.showCounter}>
            <button onClick={() => handleRemove(item)}>-</button>
            <input
              type='text'
              value={item?.quantity}
              className={style.quantity}
            />
            <button onClick={() => handleAddToCard(item)}>+</button>
          </div>
        </div>
      ))}

      <div className={style.total}>Total 💲:{total}</div>
    </div>
  )
}

export default Cart
