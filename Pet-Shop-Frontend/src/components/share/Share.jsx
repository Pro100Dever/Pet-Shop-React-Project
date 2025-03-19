import { useState } from 'react'
import pets from '../../shared/assets/images/GoggyImg.png'
import ComplietedForm from '../complietedForm/ComplietedForm'
import {
  ComplietedText,
  ShareContainer,
  ShareTitle,
  StyledIng,
  StyledSection,
} from './Share.styles'

export default function Share() {
  const [isSuccess, setIsSuccess] = useState(false)

  return (
    <StyledSection>
      <ShareTitle>5% off on the first order</ShareTitle>
      <ShareContainer>
        <StyledIng src={pets} alt='' />
        {!isSuccess ? (
          <ComplietedForm
            setIsSuccess={setIsSuccess}
            btnText='Get a discount'
            btnActiveText='Request Submitted'
            type='negative'
          />
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
