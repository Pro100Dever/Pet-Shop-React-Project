// import ProductForm from '../../components/productForm/ProductForm'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import PathTree from '../../components/pathTree/PathTree'
import ProductActions from '../../components/productActions/ProductActions'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import { useCategori } from '../../shared/hooks/useCategori'
import { useProduct } from '../../shared/hooks/useProduct'
import {
  ActionContainer,
  ImgContainer,
  ReadBtn,
  StyledContainer,
  StyledDescription,
  StyledImg,
  StyledMainImg,
  StyledSection,
} from './Products.styles'

export default function Product() {
  const BACK_URL = 'http://localhost:3333'
  const [descIsActive, setDescIsActive] = useState(false)
  const { productId } = useParams()

  const { data: categoryData, isSuccess: categoryIsSuccess } = useCategori()
  const {
    data: productData,
    isSuccess: productIsSuccess,
    isError: productIsError,
    isLoading: productIsLoading,
  } = useProduct()

  let categoryForPath
  let newData = {}

  if (productIsSuccess) {
    newData = productData.filter(product => product.title === productId)
    newData = { ...newData[0] }
  }

  const { description, image, categoryId } = newData

  if (categoryIsSuccess) {
    categoryForPath = categoryData.find(item => item.id === categoryId)
  }

  return (
    <>
      <Header />
      <main>
        {productIsError && <h3>Error!!!</h3>}
        {productIsLoading && <h3>...Loading</h3>}
        {productIsSuccess && (
          <StyledSection>
            {categoryIsSuccess && (
              <PathTree
                categoryId={categoryForPath.title}
                productId={productId}
              />
            )}

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

                  <ReadBtn onClick={() => setDescIsActive(!descIsActive)}>
                    {descIsActive ? 'Hide text' : 'Read more'}
                  </ReadBtn>
                </div>
              </ActionContainer>
            </StyledContainer>
          </StyledSection>
        )}
      </main>
      <Footer />
    </>
  )
}
