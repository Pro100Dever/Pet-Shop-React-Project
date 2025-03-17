import ComplietedForm from '../components/complietedForm/ComplietedForm'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
export default function Cart() {
  return (
    <>
      <Header />
      <main>
        <SectionTitle text='Cart' />
        <div>
          <Cartlistt />
          <ComplietedForm />
        </div>
        {/* {false && <Congratulations />} */}
      </main>
      <Footer />
    </>
  )
}
