import AnyList from '../../components/anyList/AnyList'
import News from '../../components/news/News'
import Share from '../../components/share/Share'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import NavtTreeLink from '../../shared/ui/ActionUI/navTreeLink/NavtTreeLink'
import SectionTitle from '../../shared/ui/ActionUI/SectionTitle'
import { StyledLinie, StyledSection, TitleContainer } from './Home.styles'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <News />
        <StyledSection>
          <TitleContainer>
            <SectionTitle text='Categories' />
            <StyledLinie />
            <NavtTreeLink
              text='All categories'
              path='/categories'
              home='home'
            />
          </TitleContainer>
          <AnyList hook='categories' home='home' />
        </StyledSection>
        <Share />
        <StyledSection>
          <TitleContainer>
            <SectionTitle text='Sale' />
            <StyledLinie />
            <NavtTreeLink
              text='All sales'
              path='/discountedProducts'
              home='home'
            />
          </TitleContainer>
          <AnyList hook='products' home='home' discount='discount' />
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
