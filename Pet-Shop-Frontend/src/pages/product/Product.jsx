// import ProductForm from '../../components/productForm/ProductForm'
import { useParams } from 'react-router-dom'
import ProductActions from '../../components/productActions/ProductActions'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import { useProduct } from '../../shared/hooks/useProduct'

export default function Product() {
  const BACK_URL = 'http://localhost:3333'

  const { categoryId, productId } = useParams()
  console.log(categoryId, productId)
  const { data, isError, isLoading, isSuccess } = useProduct()

  let newData = {}
  if (isSuccess) {
    newData = data.filter(product => product.title === productId)
    newData = { ...newData[0] }
    console.log(newData)
  }
  const { description, image } = newData

  return (
    <>
      <Header />
      <main>
        {/* <PathTree /> */}
        {isSuccess && (
          <div>
            <div>
              <img src={BACK_URL + image} alt='prodImg' />
              <img src={BACK_URL + image} alt='prodImg' />
              <img src={BACK_URL + image} alt='prodImg' />
            </div>
            <div>
              <img src={BACK_URL + image} alt='prodImg' />
            </div>
            <div>
              <ProductActions product={newData} />
              <p>{description}</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
