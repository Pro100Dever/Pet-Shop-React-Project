import AnyList from '../components/anyList/AnyList'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'

export default function DiscountedProducts() {
  return (
    <>
      <Header />
      <main>
        <section>
          {/* <PathTree /> */}
          <SectionTitle text='Discounted items' />
          <AnyList hook='products' discount='discount' />
        </section>
      </main>
      <Footer />
    </>
  )
}
