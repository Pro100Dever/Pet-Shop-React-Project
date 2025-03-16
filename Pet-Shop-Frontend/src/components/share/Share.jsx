import { useState } from 'react'
import { useForm } from 'react-hook-form'
import pets from '../../shared/assets/images/GoggyImg.png'
import {
  ComplietedText,
  ErrorText,
  GetBtn,
  InputContainer,
  ShareContainer,
  ShareTitle,
  StyledForm,
  StyledIng,
  StyledInput,
  StyledSection,
} from './Share.styles'

export default function Share() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [userData, setUserData] = useState('')

  const onSubmit = data => {
    setUserData(data)
    console.log(JSON.stringify(data))
  }
  return (
    <StyledSection>
      <ShareTitle>5% off on the first order</ShareTitle>
      <ShareContainer>
        <StyledIng src={pets} alt='' />
        {!userData ? (
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <StyledInput
                {...register('name', {
                  required: 'Name is required',
                  maxLength: {
                    value: 50,
                    message: 'Name should be less than 50 characters',
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: 'Name should contain only letters',
                  },
                })}
                placeholder='Name'
              />
              {errors.name && <ErrorText>{errors.name.message}</ErrorText>}{' '}
              <StyledInput
                {...register('number', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^\+([0-9]+)$/,
                    message:
                      'Number should contain only numbers and start on +',
                  },
                })}
                placeholder='Phone number'
              />
              {errors.number && <ErrorText>{errors.number.message}</ErrorText>}{' '}
              <StyledInput
                {...register('email', {
                  required: 'Email is required',
                  maxLength: {
                    value: 100,
                    message: 'Email should be less than 100 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/,
                    message: 'Invalid email format',
                  },
                })}
                placeholder='Email'
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}{' '}
            </InputContainer>
            <GetBtn>Get a discount</GetBtn>
          </StyledForm>
        ) : (
          <ComplietedText>
            Form Successfully Completed. You have been sent a coupon for a 5%
            discount
          </ComplietedText>
        )}
      </ShareContainer>
    </StyledSection>
  )
}
