// import ProductForm from '../../components/productForm/ProductForm'
import ProductActions from '../../components/productActions/ProductActions'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
export default function Product() {
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
