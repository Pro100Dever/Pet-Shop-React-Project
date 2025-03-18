import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/slices/cartSclice'

export default function ProductActions({ product }) {
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      count: 1,
    },
  })
  const count = watch('count')

  function handleMinus() {
    if (count > 1) {
      setValue('count', count - 1)
    }
  }

  function handlePlus() {
    setValue('count', count + 1)
  }

  function handleChange(e) {
    setValue({ ...product, count: Number(e.target.value) || 1 })
  }
  function onSubmit(data) {
    dispatch(addItem({ ...product, count: data.count }))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>{product.title}</h3>
      <p>{product.discont_price}</p>
      <p>{product.price}</p>
      <div>
        <div>
          <button type='button' onClick={handleMinus}>
            -
          </button>
          <input
            type='number'
            {...register('count', { min: 1 })}
            onChange={handleChange}
          />
          <button type='button' onClick={handlePlus}>
            +
          </button>
        </div>
        <button type='submit'>Add to cart</button>
      </div>
    </form>
  )
}
