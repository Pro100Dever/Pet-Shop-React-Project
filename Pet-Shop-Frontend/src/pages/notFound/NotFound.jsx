import { Link } from 'react-router-dom'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import notFound from '../../shared/assets/images/404.png'
import AnyButton from '../../shared/ui/ActionUI/AnyButton/AnyButton'
import {
  StyledContainer,
  StyledDescription,
  StyledTitle,
} from './NotFound.styles'

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <StyledContainer>
          <img src={notFound} alt='404 Not Found' />
          <div>
            <StyledTitle>Page Not Found</StyledTitle>
            <StyledDescription>
              We’re sorry, the page you requested could not be found. Please go
              back to the homepage.
            </StyledDescription>
          </div>
          <Link to='/'>
            <AnyButton text='Go Home' width='209px' />
          </Link>
        </StyledContainer>
      </main>
      <Footer />
    </>
  )
}
