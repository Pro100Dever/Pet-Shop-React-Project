import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../../../redux/slices/cartSlice'
import AnyButton from '../../../shared/ui/ActionUI/AnyButton/AnyButton'
import {
  DiscountPrice,
  InfoContainer,
  PriceContainer,
  PriceText,
  StyledDiscount,
  StyledListItem,
  StyledProductImg,
  StyledProductText,
} from '../AnyList.styles'

export default function ProductsListItem({ listItem, categoriId }) {
  const BASE_URL = 'http://localhost:3333/'
  const [sccesForBtn, setSuccesForBtn] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const { title, image, price, discont_price } = listItem
  const dispatch = useDispatch()
  const discountProcent =
    discont_price && Math.floor(((price - discont_price) / price) * 100)

  function handleAddClick() {
    setSuccesForBtn(true)
    dispatch(addItem({ ...listItem, categoriId, count: 1 }))
  }

  return (
    <StyledListItem
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative' }}
    >
      <Link to={`/categories/${categoriId}/${title}`}>
        <StyledProductImg src={BASE_URL + image} alt='itemImg' />
        <InfoContainer>
          <StyledProductText>{title}</StyledProductText>
          <PriceContainer>
            {discont_price && (
              <DiscountPrice>{'$' + discont_price}</DiscountPrice>
            )}
            <PriceText discount={discont_price}>{'$' + price}</PriceText>
          </PriceContainer>
        </InfoContainer>
      </Link>
      {discont_price && (
        <StyledDiscount>{`-${discountProcent}%`}</StyledDiscount>
      )}
      {isHovered && (
        <AnyButton
          handleAddClick={handleAddClick}
          text='Add to cart'
          activeText='Added'
          sccesForBtn={sccesForBtn}
          absolute='absolute'
        />
      )}
    </StyledListItem>
  )
}
