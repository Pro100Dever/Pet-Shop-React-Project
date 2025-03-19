import { useCategori } from '../../shared/hooks/useCategori'
import { useFilterData } from '../../shared/hooks/useFilterData'
import { useFormFilter } from '../../shared/hooks/useFormFilter'

import { useProduct } from '../../shared/hooks/useProduct'
import { StyledList } from './AnyList.styles'
import CategoriesListItem from './categoriesList/CategoriesListItem'
import ProductsListItem from './productsList/ProductListItem'

export default function AnyList({
  home = null,
  hook = null,
  categoriId = 'all',
  productId = 'all',
}) {
  const { data, isLoading, isSuccess, isError } =
    hook === 'categories'
      ? useCategori(categoriId)
      : hook === 'products'
      ? useProduct(productId)
      : { data: [], isLoading: false, isSuccess: false, isError: true }

  let newData = []

  if (isSuccess) {
    newData = data
  }
  if (hook === 'products') {
    newData = useFormFilter(newData)
    newData = useFilterData(newData, categoriId)
  }
  if (home && newData && newData.length > 0) {
    newData = newData.slice(0, 4)
  }

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
