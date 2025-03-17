import CartList from '../components/cartList/Cartlist'
import ComplietedForm from '../components/complietedForm/ComplietedForm'
import CongratulationsModal from '../components/congratulations/CongratulationsModal'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'
export default function Cart() {
  return (
    <>
      <Header />
      <main>
        <SectionTitle text='Cart' />
        <div>
          <CartList />
          <ComplietedForm />
        </div>
        {false && <CongratulationsModal />}
      </main>
      <Footer />
    </>
  )
}
