import { Link } from 'react-router-dom'
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
  const count = 12
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
          {count && <CartCount>{count}</CartCount>}
        </Link>
      </CartContainer>
    </StyledHeader>
  )
}
