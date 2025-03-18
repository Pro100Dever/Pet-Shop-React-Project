import styled from '@emotion/styled'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 32px;
`
export const StyledTitile = styled.h3`
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: 3%;
`

export const PriceText = styled.p`
  text-decoration: ${props => (props.discount ? 'line-through' : '')};
  color: ${props => (props.discount ? '#8b8b8b' : '')};
  font-size: 40px;

  ${props =>
    !props.discount &&
    `
      font-weight: 700;
      font-size: 64px;
      line-height: 110%;
  `}
`
export const DiscountPrice = styled.p`
  font-weight: 700;
  font-size: 64px;
  line-height: 110%;
`

export const AllPriceContainer = styled.div`
  display: flex;
  gap: 36px;
  align-items: flex-end;
`

export const PriceContainer = styled.div`
  position: relative;
`

export const StyledDiscount = styled.div`
  position: absolute;
  top: -14px;
  right: -80px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #0d50ff;
  color: white;
  font-weight: 600;
  letter-spacing: 3%;
`

export const ActionContainer = styled.div`
  display: flex;
`
export const StyledInput = styled.input`
  padding-left: 8px;
  width: 86px;
  height: 58px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
  outline: none;
`

export const StyledCountBtn = styled.button`
  width: 58px;
  height: 58px;
  border-radius: ${props =>
    props.side === 'left' ? '0 8px 8px 0' : ' 8px 0 0 8px'};
  background: transparent;
  border: 1px solid #dddddd;
  margin-right: ${props => (props.side === 'left' ? '32px' : '0')};
`
