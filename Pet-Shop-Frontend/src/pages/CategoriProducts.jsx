import { useParams } from 'react-router-dom'
import AnyList from '../components/anyList/AnyList'
import Filter from '../components/filter/Filter'
import { StyledSection } from '../components/filter/Filter.styles'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'

export default function CategoriProducts() {
  const { categoryId } = useParams()

  return (
    <>
      <Header />
      <main>
        <StyledSection>
          <PathTree />
          <SectionTitle text={categoryId} />
          <Filter />
          <AnyList hook='products' categoriId={categoryId} />
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
