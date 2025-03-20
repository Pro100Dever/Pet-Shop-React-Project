import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteItem, updateItem } from '../../redux/slices/cartSlice'
import {
  PriceContainer,
  StyledCountBtn,
  StyledInput,
} from '../productActions/PoductActions'
import {
  ActionsConainer,
  CartImg,
  CartItemPrice,
  CartListItem,
  CartPriceContainer,
  CloseIcon,
  DiscountCartPrice,
  StyledTitle,
} from './Cartlist.styles'

export default function CartList({ product }) {
  const URL = 'http://localhost:3333/'
  const { image, price, discont_price, title, category, count } = product
  const dispatch = useDispatch()

  function handleChange(e) {
    e.preventDefault()
    dispatch(
      updateItem({
        ...product,
        count: Number(e.target.value) > 0 ? Number(e.target.value) : 1,
      })
    )
  }
  function handlePlus(e) {
    e.preventDefault()
    dispatch(updateItem({ ...product, count: count + 1 }))
  }
  function handleMinus(e) {
    e.preventDefault()
    if (count > 1) {
      dispatch(updateItem({ ...product, count: count - 1 }))
    }
  }
  function handleDelete() {
    dispatch(deleteItem(product))
  }

  return (
    <CartListItem>
      <CartImg src={URL + image} alt='image' />
      <div>
        <Link to={`/categories/${category}/${title}`}>
          <StyledTitle>{title}</StyledTitle>
        </Link>
        <ActionsConainer>
          <PriceContainer>
            <StyledCountBtn onClick={handleMinus} />
            <StyledInput
              type='number'
              id='count'
              value={count}
              onChange={handleChange}
            />
            <StyledCountBtn side='left' onClick={handlePlus} />
          </PriceContainer>
          <CartPriceContainer>
            {discont_price && (
              <DiscountCartPrice>
                ${(discont_price * count).toFixed(2)}
              </DiscountCartPrice>
            )}
            <CartItemPrice discount={discont_price}>
              $ {(price * count).toFixed(2)}
            </CartItemPrice>
          </CartPriceContainer>
        </ActionsConainer>
      </div>
      <CloseIcon src='/close.svg' alt='close' onClick={handleDelete} />
    </CartListItem>
  )
}
