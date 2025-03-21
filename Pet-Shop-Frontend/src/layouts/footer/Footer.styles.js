import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
  padding: 0 40px;
  margin: 80px auto 0;
`
export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`
export const InfoContainer = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 0.75fr;
`
export const InfoBlock = styled.div`
  background: #f1f3f4;
  border-radius: 12px;
  padding: 32px;
`
export const InfoBlockTitle = styled.p`
  color: #8b8b8b;
`
export const InfoBlockDescription = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 110%;
  margin-top: 16px;
`
export const SocialContainer = styled.div`
  margin-top: 19px;
  display: flex;
  gap: 18px;
`
export const SociaLink = styled.a`
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s linear;
  }
`
