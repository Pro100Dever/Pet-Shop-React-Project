export default function CartList({ cartList }) {
  return (
    <ul>
      {cartList.map(product => (
        <li key={product.id}>
          <img src='asdas' alt='image' />
          <div>
            <h3>{product.title}</h3>
            <div>
              <button>-</button>
              <input type='number' id='count' value={product.count} />
              <button>+</button>
              <div>
                {product.discont_price && (
                  <p>{product.discont_price * product.count}</p>
                )}
                <p>{product.price * product.count}</p>
              </div>
            </div>
          </div>
          <img src='safas' alt='close' />
        </li>
      ))}
    </ul>
  )
}
