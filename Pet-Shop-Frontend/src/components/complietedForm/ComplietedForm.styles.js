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
  background: ${props => (props.formType ? 'transparent' : '#fff')};
  border: ${props => (props.formType ? '1px solid #fff' : '1px solid #DDDDDD')};
  padding: 16px 32px;
  width: 100%;
  color: ${props => (props.formType ? '#fff' : '#8B8B8B')};
  ::placeholder {
    color: ${props => (props.formType ? '#fff' : '#8B8B8B')};
  }
`

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -12px;
  height: 16px;
`
