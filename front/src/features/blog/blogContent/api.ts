import axios from 'axios'
import { getUrl } from 'common/rolCommons'
import { getInitReturn } from './types'

export const blogContentApi = {
  doInit: async (params: URLSearchParams) => {
    return await axios.get<getInitReturn>(`${getUrl()}blogContent/doInit?${params.toString()}`)
  },
  doPost: async (params: URLSearchParams) => {
    return await axios.post<string>(`${getUrl()}sample/postMethod`, params)
  },
}
