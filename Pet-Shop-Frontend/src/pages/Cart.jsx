export default function Cart() {
  return (
    <>
      <Header />
      <main>
        <PathTree />
        <SectionTitle />
        <div>
          <Cartlist />
          <CartForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
