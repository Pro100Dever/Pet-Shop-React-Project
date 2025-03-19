import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartList from '../../components/cartList/Cartlist'
import ComplietedForm from '../../components/complietedForm/ComplietedForm'
import CongratulationsModal from '../../components/congratulations/CongratulationsModal'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import { localGet } from '../../redux/slices/cartSlice'
import AnyButton from '../../shared/ui/ActionUI/AnyButton/AnyButton'
import NavtTreeLink from '../../shared/ui/ActionUI/navTreeLink/NavtTreeLink'
import SectionTitle from '../../shared/ui/ActionUI/SectionTitle'
import { StyledLinie, StyledSection, TitleContainer } from '../home/Home.styles'
import {
  CartContainer,
  CartOrderContainer,
  TotalContainer,
  TotalCount,
  TotalPrice,
  TotalTitle,
} from './Cart.styles'

export default function Cart() {
  const [isSuccess, setIsSuccess] = useState(false)
  const cartList = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(localGet())
  }, [])

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
                <CartList cartList={cartList} />
                <CartOrderContainer>
                  <TotalTitle>Order details</TotalTitle>
                  <TotalContainer>
                    <TotalCount>10 Items Total</TotalCount>
                    <TotalPrice>$10,53</TotalPrice>
                  </TotalContainer>
                  <ComplietedForm
                    formType='negative'
                    btnActiveText={'Ordered'}
                    btnText='Order'
                    setIsSuccess={setIsSuccess}
                  />
                </CartOrderContainer>
              </>
            ) : (
              <>
                <h3 style={{ marginBottom: '32px' }}>
                  Looks like you have no items in your basket currently.
                </h3>
                <Link to='/categories'>
                  <AnyButton text='Continue Shopping' width='312px' />
                </Link>
              </>
            )}
          </CartContainer>
        </StyledSection>
        {isSuccess && <CongratulationsModal />}
      </main>
      <Footer />
    </>
  )
}
