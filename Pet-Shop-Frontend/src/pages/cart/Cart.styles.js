import styled from '@emotion/styled'

export const CartContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: start;
`
export const CartOrderContainer = styled.div`
  background: #f1f3f4;
  border-radius: 12px;
  padding: 32px 32px 0 0;
`
export const TotalContainer = styled.div`
  border-radius: 12px;
  margin-left: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 24px;
`
export const TotalTitle = styled.h3`
  margin-left: 32px;
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;
`
export const TotalCount = styled.p`
  color: #8b8b8b;
  font-size: 40px;
  max-width: 230px;
`
export const TotalPrice = styled.p`
  ${props =>
    props.discount
      ? `
    font-size: 40px;
    text-decoration: line-through;
    color:#8B8B8B;
`
      : `
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;`}
`

export const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
`
