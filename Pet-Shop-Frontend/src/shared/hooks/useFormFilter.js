import { useSelector } from 'react-redux'

export function useFormFilter(products) {
  const filters = useSelector(state => state.filters)
  products = filterProducts(products, filters)
  return products
}

function filterProducts(products, filters) {
  const { sort, priceMin, priceMax, checked } = filters

  return products
    .filter(product => {
      // Получаем цену для сравнения, приоритет дисконтной цены
      const productPrice =
        product.discont_price !== null ? product.discont_price : product.price

      let isValid = true

      // Если чекбокс активирован, показываем только товары с дисконтной ценой
      if (checked) {
        isValid = isValid && product.discont_price !== null
      }

      // Фильтрация по минимальной цене
      if (priceMin !== null && priceMin !== undefined && priceMin !== '') {
        isValid = isValid && productPrice >= priceMin
      }

      // Фильтрация по максимальной цене
      if (priceMax !== null && priceMax !== undefined && priceMax !== '') {
        isValid = isValid && productPrice <= priceMax
      }

      return isValid
    })
    .sort((a, b) => {
      const priceA = a.discont_price !== null ? a.discont_price : a.price
      const priceB = b.discont_price !== null ? b.discont_price : b.price

      switch (sort) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt)
        case 'high-low':
          return priceB - priceA
        case 'low-high':
          return priceA - priceB
        default:
          return 0
      }
    })
}
