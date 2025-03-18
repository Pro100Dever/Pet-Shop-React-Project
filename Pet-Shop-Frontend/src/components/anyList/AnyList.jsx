import { useCategori } from '../../shared/hooks/useCategori'
import { useFilter, useFormFilter } from '../../shared/hooks/useFilter'
import { useProduct } from '../../shared/hooks/useProduct'
import { StyledList } from './AnyList.styles'
import CategoriesListItem from './categoriesList/CategoriesListItem'
import ProductsListItem from './productsList/ProductListItem'

export default function AnyList({
  home = null,
  hook = null,
  categoriId = 'all',
  productId = 'all',
  discount = null,
}) {
  const { data, isLoading, isSuccess, isError } =
    hook === 'categories'
      ? useCategori(categoriId)
      : hook === 'products'
      ? useProduct(productId)
      : { data: [], isLoading: false, isSuccess: false, isError: true }

  let newData = isSuccess ? (home ? data.slice(0, 4) : data) : []

  if (hook === 'products' && categoriId !== 'all') {
    newData = useFilter(newData, categoriId, discount)
  }
  if (discount) {
    newData = newData.filter(item => item.discont_price !== null)
  }
  newData = useFormFilter(newData)

  return (
    <StyledList>
      {isLoading && <h3>...Loading</h3>}
      {isError && <h3 style={{ color: 'red' }}>Error occurred</h3>}
      {isSuccess &&
        newData.map(listItem =>
          hook === 'categories' ? (
            <CategoriesListItem key={listItem.id} listItem={listItem} />
          ) : hook === 'products' ? (
            <ProductsListItem
              key={listItem.id}
              categoriId={categoriId}
              listItem={listItem}
            />
          ) : (
            <h3>Ошибка</h3>
          )
        )}
    </StyledList>
  )
}
