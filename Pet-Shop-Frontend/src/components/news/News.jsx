import { Link } from 'react-router-dom'
import AnyButton from '../../shared/ui/ActionUI/Button'
import { NewsContainer, NewsTitile, StyledSection } from './News.styles'

export default function () {
  return (
    <StyledSection>
      <NewsContainer></NewsContainer>
      <div>
        <NewsTitile>Amazing Discounts on Pets Products!</NewsTitile>
        <Link to='/discountedProducts'>
          <AnyButton text='Check out' width='218px' />
        </Link>
      </div>
    </StyledSection>
  )
}
