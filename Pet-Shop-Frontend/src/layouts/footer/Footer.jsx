import SectionTitle from '../../shared/ui/ActionUI/SectionTitle'
import {
  InfoBlock,
  InfoBlockDescription,
  InfoBlockTitle,
  InfoContainer,
  SocialContainer,
  SociaLink,
  StyledFooter,
  StyledFooterContainer,
} from './Footer.styles'

import insta from '../../shared/assets/icons/InstIcon.svg'
import watsapp from '../../shared/assets/icons/WatsappIcon.svg'

export default function Footer() {
  return (
    <StyledFooter>
      <SectionTitle text='Contact' />
      <StyledFooterContainer>
        <InfoContainer>
          <InfoBlock>
            <InfoBlockTitle>Phone</InfoBlockTitle>
            <InfoBlockDescription>+49 30 915-88492</InfoBlockDescription>
          </InfoBlock>
          <InfoBlock>
            <InfoBlockTitle>Socials</InfoBlockTitle>
            <SocialContainer>
              <SociaLink href='https://www.instagram.com/'>
                <img src={insta} alt='InstIcon' />
              </SociaLink>
              <SociaLink href='https://www.whatsapp.com/?lang=de_DE'>
                <img src={watsapp} alt='watsapp' />
              </SociaLink>
            </SocialContainer>
          </InfoBlock>
          <InfoBlock>
            <InfoBlockTitle>Address</InfoBlockTitle>
            <InfoBlockDescription>
              Wallstraẞe 9-13, 10179 Berlin, Deutschland
            </InfoBlockDescription>
          </InfoBlock>
          <InfoBlock>
            <InfoBlockTitle>Working Hours</InfoBlockTitle>
            <InfoBlockDescription>24 hours a day</InfoBlockDescription>
          </InfoBlock>
        </InfoContainer>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.2331738365247!2d13.40203237692703!3d52.51111913688663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27dade5561%3A0x2454d91ffab308fa!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1sde!2sde!4v1742147526484!5m2!1sde!2sde'
          width='100%'
          height='600'
          loading='lazy'
          style={{ borderRadius: '12px', border: 'none' }}
        ></iframe>
      </StyledFooterContainer>
    </StyledFooter>
  )
}
