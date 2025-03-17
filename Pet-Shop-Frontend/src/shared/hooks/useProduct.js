import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getProduct = async productsId => {
  try {
    return await axios.get(`http://localhost:3333/products/${productsId}`)
  } catch (error) {
    console.log(error)
  }
}
export function useProduct(productsId = 'all') {
  let { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['products', productsId],
    queryFn: () => getProduct(productsId),
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
