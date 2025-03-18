import { useSelector } from 'react-redux'
import { useCategori } from './useCategori'

export function useFormFilter(products) {
  const filters = useSelector(state => state.filters)
  const { data, isSuccess } = useCategori('all')

  // Если данные не загружены, возвращаем исходный список продуктов
  if (!isSuccess || !data) {
    return products
  }

  console.log(products)
  console.log(filters)

  products = filterProducts(products, filters)

  return products
}

// Функция фильтрации по категории

function filterProducts(products, filters) {
  const { sort, priceMin, priceMax } = filters
  return products
    .filter(product => {
      let isValid = true

      if (priceMin !== null) {
        isValid = isValid && product.price >= priceMin
      }
      if (priceMax !== null) {
        isValid = isValid && product.price <= priceMax
      }

      return isValid
    })
    .sort((a, b) => {
      if (!sort) return 0
      if (sort === 'newest')
        return new Date(b.createdAt) - new Date(a.createdAt)
      if (sort === 'priceAsc') return a.price - b.price
      if (sort === 'priceDesc') return b.price - a.price

      return 0
    })
}
