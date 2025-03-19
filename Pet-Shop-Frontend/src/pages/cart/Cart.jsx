import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartList from '../../components/cartList/Cartlist'
import { StyledCartList } from '../../components/cartList/Cartlist.styles'
import ComplietedForm from '../../components/complietedForm/ComplietedForm'
import CongratulationsModal from '../../components/congratulations/CongratulationsModal'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import AnyButton from '../../shared/ui/ActionUI/AnyButton/AnyButton'
import NavtTreeLink from '../../shared/ui/ActionUI/navTreeLink/NavtTreeLink'
import SectionTitle from '../../shared/ui/ActionUI/SectionTitle'
import { StyledLinie, StyledSection, TitleContainer } from '../home/Home.styles'
import {
  CartContainer,
  CartOrderContainer,
  EmptyDiv,
  TotalContainer,
  TotalCount,
  TotalPrice,
  TotalTitle,
} from './Cart.styles'

export default function Cart() {
  const [isSuccess, setIsSuccess] = useState(false)
  const cartList = useSelector(state => state.cart)
  const totalProductCount = cartList.reduce((acc, item) => item.count + acc, 0)

  const totalPrice = cartList
    .reduce(
      (acc, item) =>
        item.discont_price
          ? item.discont_price * item.count + acc
          : item.price * item.count + acc,
      0
    )
    .toFixed(2)

  return (
    <>
      <Header />
      <main>
        <StyledSection>
          <TitleContainer>
            <SectionTitle text='Shopping cart' />
            <StyledLinie />
            <NavtTreeLink
              text='Back to the store'
              path='/allProducts'
              home='home'
            />
          </TitleContainer>
          <CartContainer>
            {cartList.length > 0 ? (
              <>
                <StyledCartList>
                  {cartList.map(product => (
                    <CartList product={product} key={product.id} />
                  ))}
                </StyledCartList>
                <CartOrderContainer>
                  <TotalTitle>Order details</TotalTitle>
                  <TotalContainer>
                    <TotalCount>{totalProductCount} Items Total</TotalCount>
                    <TotalPrice>${totalPrice}</TotalPrice>
                  </TotalContainer>
                  <ComplietedForm
                    formType='negative'
                    btnActiveText={'Ordered'}
                    btnText='Order'
                    submitType='Order'
                    setIsSuccess={setIsSuccess}
                  />
                </CartOrderContainer>
              </>
            ) : (
              <EmptyDiv>
                <h3 style={{ marginBottom: '32px', flex: 1 }}>
                  Looks like you have no items in your basket currently.
                </h3>

                <Link to='/categories'>
                  <AnyButton text='Continue Shopping' width='312px' />
                </Link>
              </EmptyDiv>
            )}
          </CartContainer>
        </StyledSection>
        {isSuccess && <CongratulationsModal setIsSuccess={setIsSuccess} />}
      </main>
      <Footer />
    </>
  )
}
