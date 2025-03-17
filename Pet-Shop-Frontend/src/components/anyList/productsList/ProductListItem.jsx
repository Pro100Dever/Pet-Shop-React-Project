import { Link } from 'react-router-dom'

export default function ProductsListItem({ listItem }) {
  const { title, image } = listItem
  const BASE_URL = 'http://localhost:3333/'
  return (
    <li>
      <Link to={`/categories/${title}`}>
        <img src={BASE_URL + image} alt='itemImg' />
        <p>{title}</p>
      </Link>
    </li>
  )
}
