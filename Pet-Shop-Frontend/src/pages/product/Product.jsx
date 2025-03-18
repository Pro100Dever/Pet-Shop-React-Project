// import ProductForm from '../../components/productForm/ProductForm'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductActions from '../../components/productActions/ProductActions'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import { useProduct } from '../../shared/hooks/useProduct'
import {
  ActionContainer,
  ImgContainer,
  StyledContainer,
  StyledDescription,
  StyledImg,
  StyledMainImg,
  StyledSection,
} from './Products.styles'

export default function Product() {
  const BACK_URL = 'http://localhost:3333'
  const [descIsActive, setDescIsActive] = useState(false)
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
        <StyledSection>
          {/* <PathTree /> */}
          {isSuccess && (
            <StyledContainer>
              <ImgContainer>
                <StyledImg src={BACK_URL + image} alt='prodImg' />
                <StyledImg src={BACK_URL + image} alt='prodImg' />
                <StyledImg src={BACK_URL + image} alt='prodImg' />
              </ImgContainer>
              <div>
                <StyledMainImg src={BACK_URL + image} alt='prodImg' />
              </div>
              <ActionContainer>
                <ProductActions product={newData} />
                <div>
                  <h4>Description</h4>
                  {descIsActive ? (
                    <StyledDescription descIsActive={descIsActive}>
                      {description}
                    </StyledDescription>
                  ) : (
                    <StyledDescription descIsActive={!descIsActive}>
                      {description.slice(0, 400)}...
                    </StyledDescription>
                  )}

                  <button onClick={() => setDescIsActive(!descIsActive)}>
                    Read more
                  </button>
                </div>
              </ActionContainer>
            </StyledContainer>
          )}
        </StyledSection>
      </main>
      <Footer />
    </>
  )
}
