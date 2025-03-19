import {
  InvertSvg,
  StyledBtn,
  StyledContainer,
  StyledText,
  StyledTitle,
  TextContainer,
} from './CongratulationsModal.styles'

export default function CongratulationsModal({ setIsSuccess }) {
  function handleClose() {
    setIsSuccess(false)
  }
  return (
    <StyledContainer>
      <TextContainer>
        <StyledTitle>Congratulations!</StyledTitle>
        <StyledText>
          Your order has been successfully placed on the website.
        </StyledText>
        <StyledText>
          A manager will contact you shortly to confirm your order.
        </StyledText>
        <StyledBtn onClick={handleClose}>
          <InvertSvg src='/close-invert.svg' alt='close' />
        </StyledBtn>
      </TextContainer>
    </StyledContainer>
  )
}
