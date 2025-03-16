import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: blue;
  }

  &.pending {
    color: gray;
  }
`
export const StyledNav = styled.nav`
  display: flex;
  gap: 36px;
  align-items: center;
`
export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
  align-items: center;
  border-bottom: 1px solid #dddddd;
`
export const CartContainer = styled.div`
  position: relative;
`
export const CartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 26px;
  height: 26px;
  top: 4px;
  left: -4px;
  background-color: blue;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  color: white;
`
