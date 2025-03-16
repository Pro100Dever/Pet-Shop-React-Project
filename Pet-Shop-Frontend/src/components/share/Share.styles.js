import styled from '@emotion/styled'

export const StyledSection = styled.section`
  padding: 32px 32px 0 32px;
  margin: 0 40px;
  border-radius: 12px;
  background: linear-gradient(261.47deg, #2451c6 32.63%, #0d50ff 98.96%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
`
export const ShareContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledIng = styled.img`
  object-fit: cover;
  width: fit-content;
  max-width: 783px;
`
export const ShareTitle = styled.h3`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 64px;
  color: #ffffff;
`
export const StyledForm = styled.form`
  padding: 32px 0 32px 32px;
  width: 548px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 36px;
`
export const StyledInput = styled.input`
  border-radius: 4px;
  background: transparent;
  border: 1px solid #ffffff;
  padding: 16px 32px;
  width: 100%;
  color: #ffffff;
  ::placeholder {
    color: #ffffff;
  }
`

export const GetBtn = styled.button`
  padding: 16px 32px;
  text-align: center;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  width: 100%;
`
export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -12px;
`

export const ComplietedText = styled.p`
  color: white;
  margin: auto 0;
`
