import axios from 'axios'
import { getUrl } from 'common/rolCommons'

export const pzzhg000Api = {
  doInit: async (params: URLSearchParams) => {
    return await axios.get<string>(`${getUrl()}sample/getMethod?${params.toString()}`)
  },
  doPost: async (params: URLSearchParams) => {
    return await axios.post<string>(`${getUrl()}sample/postMethod`, params)
  },
}
