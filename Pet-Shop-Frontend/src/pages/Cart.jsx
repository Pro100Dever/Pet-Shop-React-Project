import CartList from '../components/cartList/Cartlist'
import CongratulationsModal from '../components/congratulations/CongratulationsModal'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'
import { StyledSection } from './home/Home.styles'

export default function Cart() {
  return (
    <>
      <Header />
      <main>
        <StyledSection>
          <SectionTitle text='Shopping cart' />
          <div>
            <CartList />
            {/* <ComplietedForm /> */}
          </div>
        </StyledSection>
        {false && <CongratulationsModal />}
      </main>
      <Footer />
    </>
  )
}
