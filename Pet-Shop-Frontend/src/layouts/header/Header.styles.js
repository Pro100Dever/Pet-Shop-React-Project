import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.1s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

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
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s linear;
  }
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
