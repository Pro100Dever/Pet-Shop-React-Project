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
        {false && <Congratulations />}
      </main>
      <Footer />
    </>
  )
}
