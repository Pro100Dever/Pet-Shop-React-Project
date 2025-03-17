import AnyList from '../../components/anyList/AnyList'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import NavtTreeLink from '../../shared/ui/ActionUI/navTreeLink/NavtTreeLink'
import SectionTitle from '../../shared/ui/ActionUI/SectionTitle'
import { StyledLinie, TitleContainer } from './Home.styles'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <News /> */}
        <section>
          <TitleContainer>
            <SectionTitle text='Categories' />
            <StyledLinie />
            <NavtTreeLink
              text='All categories'
              path='/categories'
              home='home'
            />
          </TitleContainer>
          <AnyList home='home' />
        </section>
        {/* <Share /> */}
        {/* <AnyList /> */}
      </main>
      <Footer />
    </>
  )
}
