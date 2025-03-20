import styled from '@emotion/styled'

export const StyledCartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`
export const CartListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 32px;
  width: 780px;

  border: 1px solid #dddddd;
  border-radius: 12px;
`
export const CartImg = styled.img`
  width: 200px;
  height: 180px;
  object-fit: contain;
`
export const CloseIcon = styled.img`
  position: absolute;
  top: 38px;
  right: 38px;
  transition: all 0.1s linear;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.1s linear;
  }
`
export const StyledTitle = styled.h3`
  margin-bottom: 32px;
  padding-bottom: 2px;
  position: relative;
  display: inline-block;
  max-width: 476px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`
export const ActionsConainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const CartItemPrice = styled.p`
  text-decoration: ${props => (props.discount ? 'line-through' : '')};
  color: ${props => (props.discount ? '#8b8b8b' : '')};

  ${props =>
    !props.discount &&
    `
      line-height: 110%;
      font-size: 40px;
      font-weight: 600;
  `}
`
export const DiscountCartPrice = styled.p`
  line-height: 110%;
  font-size: 40px;
  font-weight: 600;
`
export const CartPriceContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-end;
`
