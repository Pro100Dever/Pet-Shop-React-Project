import styled from '@emotion/styled'

export const StyledContainer = styled.div`
  display: flex;
  height: fit-content;
  gap: 32px;
`
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const StyledImg = styled.img`
  width: 200px;
  height: 180px;
  object-fit: contain;
  border-radius: 12px;
`
export const StyledMainImg = styled.img`
  width: 548px;
  height: 572px;
  object-fit: contain;
  border-radius: 12px;
`
export const StyledDescription = styled.p`
  display: ${props => (props.descIsActive ? 'block' : 'none')};
  width: 548px;
  height: ${props => (props.descIsActive ? '' : '150px')};
  font-weight: 400;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const ActionContainer = styled.div`
  width: 548px;
`
export const StyledSection = styled.section`
  padding: 0 40px;
`
export const ReadBtn = styled.button`
  border: none;
  border-bottom: 1px solid #282828;
  background: transparent;
  font-size: 16px;
  transition: all 0.4s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s;
  }
`
