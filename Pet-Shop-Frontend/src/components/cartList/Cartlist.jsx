import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { localGet } from '../../redux/slices/cartSlice'

export default function CartList() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(localGet())
  }, [])

  console.log(data)

  return (
    <ul>
      {data.map(product => (
        <li key={product.id}>
          <img src='asdas' alt='image' />
          <div>
            <h3>{product.title}</h3>
            <div>
              <button>-</button>
              <input type='number' id='count' value={product.count} />
              <button>+</button>
              <div>
                <p>{product.discont_price * product.count}</p>
                <p>{product.price * product.count}</p>
              </div>
            </div>
          </div>
          <img src='safas' alt='close' />
        </li>
      ))}
    </ul>
  )
}
