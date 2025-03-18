import { useSelector } from 'react-redux'
import { useCategori } from './useCategori'

export function useFilter(products, categoriId) {
  const { data } = useCategori('all')
  const newData = data.find(item => item.title === categoriId)
  return products.filter(item => item.categoryId === newData.id)
}

export function useFormFilter(products) {
  const filters = useSelector(state => state.filters)
  return filterProducts(products, filters)
}

function filterProducts(products, { sort, priceMin, priceMax }) {
  return products
    .filter(product => {
      let isValid = true

      if (priceMin !== undefined) {
        isValid = isValid && product.price >= priceMin
      }
      if (priceMax !== undefined) {
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
