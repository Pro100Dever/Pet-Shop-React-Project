import { Link } from 'react-router-dom'
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
  StyledCartList,
  StyledTitle,
} from './Cartlist.styles'

export default function CartList({ cartList }) {
  const URL = 'http://localhost:3333/'
  return (
    <StyledCartList>
      {cartList.map(product => (
        <CartListItem key={product.id}>
          <CartImg src={URL + product.image} alt='image' />
          <div>
            <Link to={`/categories/${product.category}/${product.title}`}>
              <StyledTitle>{product.title}</StyledTitle>
            </Link>
            <ActionsConainer>
              <PriceContainer>
                <StyledCountBtn />
                <StyledInput type='number' id='count' value={product.count} />
                <StyledCountBtn side='left' />
              </PriceContainer>
              <CartPriceContainer>
                {product.discont_price && (
                  <DiscountCartPrice>
                    {'$' + product.discont_price * product.count}
                  </DiscountCartPrice>
                )}
                <CartItemPrice discount={product.discont_price}>
                  {'$' + product.price * product.count}
                </CartItemPrice>
              </CartPriceContainer>
            </ActionsConainer>
          </div>
          <CloseIcon src='/close.svg' alt='close' />
        </CartListItem>
      ))}
    </StyledCartList>
  )
}
