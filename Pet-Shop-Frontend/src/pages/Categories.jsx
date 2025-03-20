import AnyList from '../components/anyList/AnyList'
import PathTree from '../components/pathTree/PathTree'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'
import { StyledSection } from './home/Home.styles'
export default function Categories() {
  const title = 'Categories'
  const path = 'categories'
  return (
    <>
      <Header />
      <main>
        <StyledSection>
          <PathTree text={title} path={path} />
          <SectionTitle text={title} />
          <AnyList hook={path} />
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
