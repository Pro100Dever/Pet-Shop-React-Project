import News from '../components/news/News'
import Share from '../components/share/Share'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <News />
        {/* <AnyList /> */}
        <Share />
        {/* <AnyList /> */}
      </main>
      <Footer />
    </>
  )
}
