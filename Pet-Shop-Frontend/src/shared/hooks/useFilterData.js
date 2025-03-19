import { useCategori } from './useCategori'

export function useFilterData(products, categoriId) {
  const { data, isSuccess } = useCategori('all')
  let newData = products

  if (isSuccess) {
    if (categoriId !== 'all') {
      const category = data.find(item => item.title === categoriId)
      newData = newData.filter(item => item.categoryId === category.id)
    }
  }

  // console.log(newData)
  return newData
}
