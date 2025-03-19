import { useSelector } from 'react-redux'

export function useFormFilter(products) {
  const filters = useSelector(state => state.filters)
  products = filterProducts(products, filters)
  return products
}

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
      switch (sort) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt)
        case 'priceAsc':
          return a.price - b.price
        case 'priceDesc':
          return b.price - a.price
        default:
          return
      }
    })
}
