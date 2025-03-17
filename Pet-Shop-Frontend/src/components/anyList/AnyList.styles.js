import styled from '@emotion/styled'

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
  width: 100%;
  text-align: center;
`

export const StyledCategoriImg = styled.img`
  margin-bottom: 16px;
  width: 316px;
  height: 350px;
  border-radius: 12px;
`

export const StyledListItem = styled.li`
  position: relative;
  border: 1px solid #dddddd;
  border-radius: 12px;
`
export const StyledDiscount = styled.div`
  position: absolute;
  top: 16px;
  right: 26px;
  padding: 4px 8px;
  border-radius: 12px;
  background-color: #0d50ff;
  color: white;
  font-weight: 600;
  letter-spacing: 3%;
`

export const StyledProductImg = styled.img`
  margin-bottom: 20px;
  width: 316px;
  height: 284px;
  border-radius: 12px;
`
export const StyledProductText = styled.p`
  width: 252px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
`
export const InfoContainer = styled.div`
  margin: 0 32px 32px;
`
export const PriceContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-end;
  gap: 16px;
`
export const PriceText = styled.p`
  text-decoration: line-through;
  color: #8b8b8b;
`
export const DiscountPrice = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
`
