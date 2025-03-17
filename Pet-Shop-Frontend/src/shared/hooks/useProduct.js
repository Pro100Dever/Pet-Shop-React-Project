import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getProduct = async productsId => {
  return await axios.get(
    `http://localhost:3333/products/${productsId && productsId}`
  )
}
export function useProduct(productsId = 'all') {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['product', productsId],
    queryFn: () => getProduct(productsId && productsId, id),
    select: data => data.data,
  })

  function checkIsErr() {
    if (isSuccess) {
      if (data.status === 'ERR') {
        isError = true
        isSuccess = false
        return isError, isSuccess
      }
    }
  }
  checkIsErr()

  return { data, isLoading, isSuccess, isError }
}
