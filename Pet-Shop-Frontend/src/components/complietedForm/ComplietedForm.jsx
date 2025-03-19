import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useSubmitUser } from '../../shared/hooks/useSubmitUser'
import AnyButton from '../../shared/ui/ActionUI/AnyButton/AnyButton'
import {
  ErrorText,
  InputContainer,
  StyledForm,
  StyledInput,
} from './ComplietedForm.styles'

export default function ComplietedForm({
  setIsSuccess,
  formType = null,
  type = null,
  btnText = null,
  btnActiveText = null,
  submitType = 'Get Discount',
}) {
  const [succesForBtn, setSuccesForBtn] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    number: '',
    email: '',
  })
  const cartOrderList = useSelector(state => state.cart)

  const info =
    submitType === 'Order'
      ? { user: userInfo, order: [...cartOrderList] }
      : userInfo
  const { mutate, isSuccess } = useSubmitUser(info, submitType)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (isSuccess) {
      setSuccesForBtn(true)
      setIsSuccess(true)
    }
  }, [isSuccess])

  const onSubmit = data => {
    setUserInfo(data)
    mutate()
  }

  return (
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
        <ErrorText>{errors.name && errors.name.message}</ErrorText>
        <StyledInput
          {...register('number', {
            required: 'Phone number is required',
            pattern: {
              value: /^\+([0-9]+)$/,
              message: 'Number should contain only numbers and start on +',
            },
          })}
          placeholder='Phone number'
        />
        <ErrorText>{errors.number && errors.number.message}</ErrorText>
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
        <ErrorText>{errors.email && errors.email.message}</ErrorText>
      </InputContainer>
      <AnyButton
        text={btnText}
        activeText={btnActiveText}
        type={type}
        succesForBtn={succesForBtn}
      />
    </StyledForm>
  )
}
