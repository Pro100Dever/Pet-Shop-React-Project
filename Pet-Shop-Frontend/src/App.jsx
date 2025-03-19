import { Route, Routes } from 'react-router'
import AllProducts from './pages/AllProducts'
import Cart from './pages/cart/Cart'
import Categories from './pages/Categories'
import CategoriProducts from './pages/CategoriProducts'
import DiscountedProducts from './pages/DiscountedProducts'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Product from './pages/product/Product'
import { globalStyles } from './shared/styles/_globals'

function App() {
  return (
    <>
      {globalStyles}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:categoryId' element={<CategoriProducts />} />
        <Route
          path='/categories/:categoryId/:productId'
          element={<Product />}
        />

        <Route path='/allProducts' element={<AllProducts />} />
        <Route path='/discountedProducts' element={<DiscountedProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
