import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const postUserInfo = async userInfo => {
  try {
    return await axios.post(`http://localhost:3333/sale/send`, userInfo)
  } catch (error) {
    console.log(error)
  }
}
export function useSubmitUser(userInfo) {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ['add discount promo'],
    mutationFn: () => postUserInfo(userInfo),
    onError: err => {
      console.error(err)
    },
  })

  return { mutate, isPending, isSuccess }
}
