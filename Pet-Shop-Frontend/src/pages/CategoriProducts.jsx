import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AnyList from '../components/anyList/AnyList'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import SectionTitle from '../shared/ui/ActionUI/SectionTitle'

export default function CategoriProducts() {
  useEffect(() => {}, [])
  const { categoryId } = useParams()
  // console.log(categoryId)

  return (
    <>
      <Header />
      <main>
        {/* <PathTree /> */}
        <SectionTitle text={categoryId} />
        <AnyList hook='products' categoriId={categoryId} />
      </main>
      <Footer />
    </>
  )
}
