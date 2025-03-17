import { Link } from 'react-router-dom'
import { useCategori } from '../../shared/hooks/useCategori'

export default function AnyList(categori = 'all', home = false) {
  const BASE_URL = 'http://localhost:3333/'
  let { data, isLoading, isSuccess, isError } = useCategori()

  if (isSuccess) {
    if (!home) {
      data.length = 4
      console.log(data)
    }
  }

  return (
    <ul>
      {isLoading && <h3>...Loading</h3>}
      {isError && <h3 style={{ color: 'red' }}>Error occurred</h3>}
      {isSuccess &&
        data.map(listItem => (
          <li key={listItem.id}>
            <Link to={`/${listItem.title}`}>
              <img src={BASE_URL + listItem.image} alt='itemImg' />
              <p>{listItem.title}</p>
            </Link>
          </li>
        ))}
    </ul>
  )
}
