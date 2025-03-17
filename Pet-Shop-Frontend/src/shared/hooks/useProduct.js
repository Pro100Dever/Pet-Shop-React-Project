import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const getProduct = async (productsId, id = n) => {
  return axios.get(
    `http://localhost:3333/categories/${productsId && productsId}/${id && id}`
  )
}

export function useProduct(productsId = null, id = null) {
  const { data, isLoading, isSuccess, IsError } = useQuery({
    queryKey: ['product', productsId, id && id],
    queryFn: () => getProduct(productsId && productsId, id),
    select: data => data.data,
  })

  return { data, isLoading, isSuccess, IsError }
}
