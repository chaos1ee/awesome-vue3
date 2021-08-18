import { ListResponse } from 'List'
import { BanedPlayer, CityExtension, PlayerDetail, PlayerItem } from './type'
import { request } from '/@/utils'

class PlayerApi {
  getPlayerList(params?: {
    kingdomId?: string
    uid?: number
    fpid?: number
    uname?: string
    p?: number
    per_page_num?: number
  }) {
    return request.get<ListResponse<PlayerItem[]>>('/player/list', { params })
  }

  getPlayerDetail(uid: number) {
    return request.get<PlayerDetail>(`/player/info?uid=${uid}`)
  }

  getPlayerBanedList(params: {
    kingdomId: string
    banType: 1 | 2
    p?: number
  }) {
    return request.get<ListResponse<BanedPlayer[]>>('/player/banedList', {
      params,
    })
  }

  getPackage(params: { uid: number }) {
    return request.get<
      {
        name: string
        id: number
        num: number
      }[]
    >('/player/package', { params })
  }

  getPlayerCityExt(uid: number) {
    return request.get<CityExtension>('/player/cityExt', { params: { uid } })
  }

  banPlayer(data: {
    type: 1 | 2
    reason: string
    duration: number
    uids: number[]
  }) {
    return request.post('/player/ban', data)
  }

  unbanPlayer(data: { uids: number[] }) {
    return request.post('/player/unban', data)
  }
}

export const playerApi = new PlayerApi()
