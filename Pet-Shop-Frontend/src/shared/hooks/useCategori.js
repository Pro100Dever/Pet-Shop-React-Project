import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getCategories = async categoriesId => {
  try {
    return await axios.get(`http://localhost:3333/categories/${categoriesId}`)
  } catch (error) {
    throw new error()
  }
}
export function useCategori(categoriesId = 'all') {
  let { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['categories', categoriesId],
    queryFn: () => getCategories(categoriesId),
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
