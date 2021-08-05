import request from '../utils/request'

export interface PlayerItem {
  createTime: string
  entity_id: number
  fpid: number
  kid: string
  name: string
  token: string
}

export function getPlayerList(params?: {
  length?: number
  start?: number
}): Promise<{
  code: number
  data: PlayerItem[]
  recordsFiltered: number
  recordsTotal: number
}> {
  return request.get(`/player/list`, { params })
}
