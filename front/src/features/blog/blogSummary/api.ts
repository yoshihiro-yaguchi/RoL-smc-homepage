import axios from 'axios'
import { getUrl } from 'common/rolCommons'
import { getInitReturn } from './types'

export const blogSummaryApi = {
  doInit: async () => {
    return await axios.get<getInitReturn>(`${getUrl()}blogSummary/doInit`)
  },
  doPost: async (params: URLSearchParams) => {
    return await axios.post<string>(`${getUrl()}sample/postMethod`, params)
  },
}
