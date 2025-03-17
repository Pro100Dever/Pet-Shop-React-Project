import { Link } from 'react-router-dom'
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

export default function ProductsListItem({ listItem }) {
  const BASE_URL = 'http://localhost:3333/'
  const { title, image, price, discont_price } = listItem
  const discountProcent = '-34%'
  return (
    <StyledListItem>
      {discont_price && <StyledDiscount>{discountProcent}</StyledDiscount>}
      <Link to={`/categories/${title}`}>
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
    </StyledListItem>
  )
}
