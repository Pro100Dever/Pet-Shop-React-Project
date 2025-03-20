import AnyList from '../components/anyList/AnyList'
import Filter from '../components/filter/Filter'
import PathTree from '../components/pathTree/PathTree'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'
import { StyledSection } from './home/Home.styles'

export default function AllProducts() {
  const title = 'All products'
  const path = 'allProducts'
  return (
    <>
      <Header />
      <main>
        <StyledSection>
          <PathTree text={title} path={path} />
          <SectionTitle text={title} />
          <Filter />
          <AnyList hook='products' />
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
