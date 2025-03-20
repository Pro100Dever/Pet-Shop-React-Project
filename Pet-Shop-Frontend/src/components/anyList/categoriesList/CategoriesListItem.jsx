import { Link } from 'react-router-dom'
import { StyledCategoriImg, StyledLink } from '../AnyList.styles'

export default function CategoriesListItem({ listItem }) {
  const { title, image } = listItem
  const BASE_URL = 'http://localhost:3333/'
  return (
    <StyledLink>
      <Link to={`/categories/${title}`}>
        <StyledCategoriImg src={BASE_URL + image} alt='itemImg' />
        <p>{title}</p>
      </Link>
    </StyledLink>
  )
}
