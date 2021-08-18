export interface PlayerItem {
  createTime: string
  fpid: number
  name: string
  token: string
  uid: number
  kingdomId: number
}

export interface PlayerDetail {
  uid: number
  basics: {
    id: number
    raceId: number
    mainBuildingID: number
    level: number
    lang: string
    lastActPtsUpdateTime: string
    latestLoginTime: string
    kingdomId: string
    allianceJoinTime: string
    latestEnergyPtsUpdate: string
    kingdomJoinTime: string
    energyPts: number
  }
  items: Record<string, number>
  owner: {
    id: number
    playerID: number
    PlayerName: string
    nickName: string
    avatar: {
      avatarID: number
      avatarFrameID: number
    }
    privilege: string
  }
  fpid: number
  mapBasics: {
    id: number
    X: number
    Y: number
  }
  novice: {
    id: number
    endNovice: boolean
  }
  tutorial: {
    ID: number
    Param: Record<string, any>
  }
}

export interface CityExtension {
  id: number
  playerDefensiveInfo: {
    id: number
    defendingArmy: {
      ID: number
    }
  }
  heroStatus: Record<string, number>
  units: {
    id: number
    incityUnits: Record<string, number>
  }
  troopQueue: {
    ID: number
    TroopIds: number[]
  }
  market: {
    ID: number
    Order: {
      ID: number
      StatusEndTime: string
    }
  }
  wall: {
    id: number
    garrisonHeroList: number[]
    garrisonHeroPresetList: number[]
    hp: number
    decrHpStartTime: string
    recoverHpStartTime: string
    questScheduleHandleHolder: {
      id: number
    }
    latestUpdateHP: string
  }
  mapBasics: {
    id: number
    X: number
    Y: number
  }
  cityState: {
    id: number
  }
  scheduleHolder: {
    id: number
  }
  adventureMob: {
    id: number
    adventureMobCnt: 4
    ltestAdventureMobLineup: {
      id: number
    }
    latestResetAdventureMobCnt: string
  }
  callbacks: {
    id: number
  }
  reinforce: {
    id: number
    questScheduleHandleHolder: {
      id: number
    }
  }
  shieldInfo: {
    id: number
  }
  mapSearch: {
    id: number
  }
}

export interface BanedPlayer {
  adminId: number
  banEndTime: string
  memo: string
  reason: number
  uid: number
}
