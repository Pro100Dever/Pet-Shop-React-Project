import AnyList from '../../components/anyList/AnyList'
import News from '../../components/news/News'
import Share from '../../components/share/Share'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import NavTreeLink from '../../shared/ui/ActionUI/navTreeLink/NavTreeLink'
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
            <NavTreeLink text='All categories' path='/categories' home={true} />
          </TitleContainer>
          <AnyList hook='categories' home={true} />
        </StyledSection>
        <Share />
        <StyledSection>
          <TitleContainer>
            <SectionTitle text='Sale' />
            <StyledLinie />
            <NavTreeLink text='All sales' path='/discountedItems' home={true} />
          </TitleContainer>
          <AnyList hook='products' home={true} discount='discount' />
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
