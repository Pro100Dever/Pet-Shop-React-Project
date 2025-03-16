import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
export default function Cart() {
  return (
    <>
      <Header />
      <main>
        <SectionTitle text='Cart' />
        <div>
          {/* <Cartlist /> */}
          {/* <CartForm /> */}
        </div>
        {false && <Congratulations />}
      </main>
      <Footer />
    </>
  )
}
