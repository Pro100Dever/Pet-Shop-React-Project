// import ProductForm from '../../components/productForm/ProductForm'
import { useParams } from 'react-router-dom'
import ProductActions from '../../components/productActions/ProductActions'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'

export default function Product() {
  const title = useParams()
  console.log(title)

  return (
    <>
      <Header />
      <main>
        {/* <PathTree /> */}
        <div>
          <div>
            <img src='' alt='' />
            <img src='' alt='' />
            <img src='' alt='' />
          </div>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <ProductActions />
            <p>Description</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
