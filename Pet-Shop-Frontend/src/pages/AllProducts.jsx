import AnyList from '../components/anyList/AnyList'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
export default function AllProducts() {
  return (
    <>
      <Header />
      <main>
        {/* <PathTree /> */}
        <AnyList />
      </main>
      <Footer />
    </>
  )
}
