export default function Cart() {
  return (
    <>
      <Header />
      <main>
        <SectionTitle />
        <div>
          <Cartlist />
          <CartForm />
        </div>
        {false && <Congratulations />}
      </main>
      <Footer />
    </>
  )
}
