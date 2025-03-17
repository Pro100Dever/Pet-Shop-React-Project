import AnyList from '../components/anyList/AnyList'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'
export default function Categories() {
  return (
    <>
      <Header />
      <main>
        <section>
          {/* <PathTree /> */}
          <SectionTitle text='Categories' />
          <AnyList hook='categories' />
        </section>
      </main>
      <Footer />
    </>
  )
}
