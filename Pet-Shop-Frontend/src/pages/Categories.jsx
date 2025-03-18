import AnyList from '../components/anyList/AnyList'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'
import { StyledSection } from './home/Home.styles'
export default function Categories() {
  return (
    <>
      <Header />
      <main>
        <StyledSection>
          {/* <PathTree /> */}
          <SectionTitle text='Categories' />
          <AnyList hook='categories' />
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
