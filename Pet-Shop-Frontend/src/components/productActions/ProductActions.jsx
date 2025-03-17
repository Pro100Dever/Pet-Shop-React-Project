export default function ProductActions() {
  return (
    <form>
      <h3>Product name</h3>
      <p>Discount Price</p>
      <p>Product Price</p>
      <div>
        <div>
          <button>-</button>
          <input type='text' value={1} id='count' />
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </div>
    </form>
  )
}
