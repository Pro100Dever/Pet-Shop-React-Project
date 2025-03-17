import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const getCategories = async categoriesId => {
  return axios.get(
    `http://localhost:3333/categories/${categoriesId && categoriesId}`
  )
}

export function useCategori(categoriesId = null) {
  const { data, isLoading, isSuccess, IsError } = useQuery({
    queryKey: ['categories', categoriesId && categoriesId],
    queryFn: () => getCategories(categoriesId),
    select: data => data.data,
  })

  return { data, isLoading, isSuccess, IsError }
}
