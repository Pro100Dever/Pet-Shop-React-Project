import { Link } from 'react-router-dom'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import notFound from '../../shared/assets/images/404.png'

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <img src={notFound} alt='404 Not Found' />
        <h2>Page Not Found</h2>
        <p>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
        <Link to='/'>Go Home</Link>
      </main>
      <Footer />
    </>
  )
}
