import AnyList from '../components/anyList/AnyList'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'
import { StyledSection } from './home/Home.styles'

export default function DiscountedProducts() {
  return (
    <>
      <Header />
      <main>
        <StyledSection>
          {/* <PathTree /> */}
          <SectionTitle text='Discounted items' />
          <AnyList hook='products' discount='discount' />
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
