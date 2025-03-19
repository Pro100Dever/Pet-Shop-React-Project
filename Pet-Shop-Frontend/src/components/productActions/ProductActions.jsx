import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from '../../redux/slices/cartSlice'
import AnyButton from '../../shared/ui/ActionUI/AnyButton/AnyButton'
import {
  ActionContainer,
  AllPriceContainer,
  DiscountPrice,
  PriceContainer,
  PriceText,
  StyledCountBtn,
  StyledDiscount,
  StyledForm,
  StyledInput,
  StyledTitile,
} from './PoductActions'

export default function ProductActions({ product }) {
  const [succesForBtn, setSuccesForBtn] = useState(false)
  const dispatch = useDispatch()
  const { categoryId } = useParams()

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      count: 1,
    },
  })
  const count = watch('count')
  function handleMinus() {
    if (count > 1) {
      setValue('count', count - 1)
    }
  }
  function handlePlus() {
    setValue('count', count + 1)
  }
  function handleChange(e) {
    setValue({ ...product, count: Number(e.target.value) || 1 })
  }
  function onSubmit(data) {
    setSuccesForBtn('succes')
    dispatch(addItem({ ...product, count: data.count, category: categoryId }))
  }

  const discountProcent =
    product.discont_price &&
    Math.floor(((product.price - product.discont_price) / product.price) * 100)

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledTitile>{product.title}</StyledTitile>
      <AllPriceContainer>
        {product.discont_price && (
          <DiscountPrice>{'$' + product.discont_price}</DiscountPrice>
        )}
        <PriceContainer>
          <PriceText discount={product.discont_price}>
            {'$' + product.price}
          </PriceText>
          {product.discont_price && (
            <StyledDiscount>{`-${discountProcent}%`}</StyledDiscount>
          )}
        </PriceContainer>
      </AllPriceContainer>
      <ActionContainer>
        <PriceContainer>
          <StyledCountBtn type='button' onClick={handleMinus} side='right' />
          <StyledInput
            type='number'
            {...register('count', { min: 1, max: 99 })}
            onChange={handleChange}
          />
          <StyledCountBtn type='button' onClick={handlePlus} side='left' />
        </PriceContainer>
        <AnyButton
          text='Add to cart'
          activeText='Added'
          succesForBtn={succesForBtn}
        />
      </ActionContainer>
    </StyledForm>
  )
}
