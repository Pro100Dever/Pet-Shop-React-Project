import styled from '@emotion/styled'

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

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -12px;
  height: 16px;
`
