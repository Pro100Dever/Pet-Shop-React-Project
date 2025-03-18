import styled from '@emotion/styled'

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 316px);
  justify-content: space-between;
  gap: 32px;
  width: 100%;
  text-align: center;
  text-align: center;
  justify-content: center;
`

export const StyledCategoriImg = styled.img`
  margin-bottom: 16px;
  width: 100%;
  height: 350px;
  border-radius: 12px;
`

export const StyledListItem = styled.li`
  position: relative;
  border-radius: 12px;
  max-width: 316px;
  width: 100%;
`
export const StyledDiscount = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 8px;
  border-radius: 12px;
  background-color: #0d50ff;
  color: white;
  font-weight: 600;
  letter-spacing: 3%;
`

export const StyledProductImg = styled.img`
  width: 100%;
  height: 284px;
  border-radius: 12px 12px 0 0;
  border: 1px solid #dddddd;
`
export const StyledProductText = styled.p`
  width: 252px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
`
export const InfoContainer = styled.div`
  margin-top: -7px;
  padding: 20px 32px 32px;
  border-radius: 0 0 12px 12px;
  border: 1px solid #dddddd;
`
export const PriceContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-end;
  gap: 16px;
`
export const PriceText = styled.p`
  text-decoration: ${props => (props.discount ? 'line-through' : '')};
  color: ${props => (props.discount ? '#8b8b8b' : '')};

  ${props =>
    !props.discount &&
    `
      font-weight: 600;
      font-size: 40px;
      line-height: 110%;
  `}
`
export const DiscountPrice = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
`
