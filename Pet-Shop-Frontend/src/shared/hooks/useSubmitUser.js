import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const postUserInfo = async info => {
  try {
    return await axios.post(`http://localhost:3333/sale/send`, info)
  } catch (error) {
    console.log(error)
  }
}
const postOrderInfo = async info => {
  try {
    return await axios.post(`http://localhost:3333/order/send`, info)
  } catch (error) {
    console.log(error)
  }
}
export function useSubmitUser(info, type) {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: [type],
    mutationFn: () =>
      type === 'Order' ? postOrderInfo(info) : postUserInfo(info),
    onError: err => {
      console.error(err)
    },
  })

  return { mutate, isPending, isSuccess }
}
