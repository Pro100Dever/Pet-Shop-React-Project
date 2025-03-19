import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { localGet } from '../../redux/slices/cartSlice'
import cart from '../../shared/assets/icons/CartIcon.svg?url'
import {
  CartContainer,
  CartCount,
  StyledHeader,
  StyledNav,
  StyledNavLink,
} from './Header.styles'
import logo from '/public/logo.svg?url'

export default function Header() {
  const [count, setCount] = useState(0)
  const cartList = useSelector(state => state.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(localGet())
  }, [])

  useEffect(() => {
    setCount(cartList.reduce((acc, item) => acc + item.count, 0))
  }, [cartList])

  return (
    <StyledHeader>
      <Link to='/'>
        <img src={logo} width='70' height='70' alt='Logo' />
      </Link>
      <StyledNav>
        <StyledNavLink to='/'>Main Page</StyledNavLink>
        <StyledNavLink to='/categories'>Categories</StyledNavLink>
        <StyledNavLink to='/allProducts'>All products</StyledNavLink>
        <StyledNavLink to='/discountedProducts'>All sales</StyledNavLink>
      </StyledNav>
      <CartContainer>
        <Link to='/cart'>
          <img src={cart} alt='Cart' width='44' height='48' />
          {count > 0 && <CartCount>{count}</CartCount>}
        </Link>
      </CartContainer>
    </StyledHeader>
  )
}
