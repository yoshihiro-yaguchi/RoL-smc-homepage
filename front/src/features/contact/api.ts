import axios from 'axios'
import { getUrl } from 'common/rolCommons'

export const contactApi = {
  doInit: async (params: URLSearchParams) => {
    return await axios.get<string>(`${getUrl()}sample/getMethod?${params.toString()}`)
  },
  doPost: async (params: URLSearchParams) => {
    return await axios.post<string>(`${getUrl()}sample/postMethod`, params)
  },
  // 送信ボタン押下時
  doSend: async (params: URLSearchParams) => {
    return await axios.post<boolean>(`${getUrl()}contact/doSend`, params)
  },
}
