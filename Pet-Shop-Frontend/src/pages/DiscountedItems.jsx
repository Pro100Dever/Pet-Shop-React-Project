import AnyList from '../components/anyList/AnyList'
import Filter from '../components/filter/Filter'
import PathTree from '../components/pathTree/PathTree'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'
import { StyledSection } from './home/Home.styles'

export default function DiscountedItems() {
  const path = 'discountedItems'
  const title = 'All sales'
  return (
    <>
      <Header />
      <main>
        <StyledSection>
          <PathTree text={title} path={path} />
          <SectionTitle text='Discounted items' />
          <Filter type='checked' />
          <AnyList hook='products' />
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
