import { Link } from 'react-router-dom'
import AnyButton from '../../shared/ui/ActionUI/AnyButton/AnyButton'
import { NewsContainer, NewsTitile, StyledSection } from './News.styles'

export default function News() {
  return (
    <StyledSection>
      <NewsContainer></NewsContainer>
      <div>
        <NewsTitile>Amazing Discounts on Pets Products!</NewsTitile>
        <Link to='/discountedItems'>
          <AnyButton text='Check out' activeText='Checked' width='218px' />
        </Link>
      </div>
    </StyledSection>
  )
}
