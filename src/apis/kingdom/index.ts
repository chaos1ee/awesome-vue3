import { request } from '/@/utils'

class KingdomApi {
  getKingdomList() {
    return request
      .get<{ kingdomId: string[] }>('/kingdom/list')
      .then(({ kingdomId }) => kingdomId)
  }
}

export const kingdomApi = new KingdomApi()
