import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getProduct = async (productsId, id = '') => {
  return await axios.get(
    `http://localhost:3333/products/${productsId && productsId}/${id && id}`
  )
}
export function useProduct(productsId = 'all', id = '') {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['product', productsId, id],
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
