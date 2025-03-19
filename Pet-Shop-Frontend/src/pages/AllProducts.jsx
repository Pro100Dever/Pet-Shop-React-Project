import AnyList from '../components/anyList/AnyList'
import Filter from '../components/filter/Filter'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'
import { StyledSection } from './home/Home.styles'

export default function AllProducts() {
  return (
    <>
      <Header />
      <main>
        <StyledSection>
          {/* <PathTree /> */}
          <SectionTitle text='All products' />
          <Filter />
          <AnyList hook='products' />
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
