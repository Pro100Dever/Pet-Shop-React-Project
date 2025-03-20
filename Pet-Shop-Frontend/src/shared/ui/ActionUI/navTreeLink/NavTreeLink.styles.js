import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledNavTreeLink = styled(NavLink)`
  display: block;
  margin-bottom: ${props => (props.home ? '20px' : '0')};
  padding: 8px 16px;
  width: fit-content;
  color: #8b8b8b;
  font-size: 16px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  min-width: fit-content;
  &:hover {
    cursor: pointer;
    background: #f1f3f4;
    transition: all 0.2s linear;
  }
`
