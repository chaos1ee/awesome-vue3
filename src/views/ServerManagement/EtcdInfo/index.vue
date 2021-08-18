<template>
  <el-card>
    <div style="height: 500px">
      <kg-editor :value="data" :options="options"></kg-editor>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KgEditor, { EditorOptions } from '/components/Editor/index.vue'

const data = `{
  "/conf/h28/mongodb/uri": "mongodb: //dwod-server-mongodb-01:27017",
  "/conf/online/redis/addr": "dwod-server-redis-01: 6379",
  "/conf/online/redis/cluster": "0",
  "/conf/online/redis/connPoolSize": "5",
  "/conf/online/redis/pass": "",
  "/conf/stargate/wuid/h28/url": "http: //127.0.0.1:10088/cmd/load",
  "/conf/stargate/wuid/redis/addr": "dwod-server-redis-01: 6379",
  "/conf/stargate/wuid/redis/cluster": "0",
  "/conf/stargate/wuid/redis/pass": "",
  "/conf/whitelistIps/office": "",
  "/conf/wod-kingdom/mongodb/uri": "mongodb: //dwod-server-mongodb-01:27017",
  "/conf/wod-kingdom/rank/redis/addr": "dwod-server-redis-01: 6379",
  "/conf/wod-kingdom/rank/redis/cluster": "0",
  "/conf/wod-kingdom/rank/redis/connPoolSize": "5",
  "/conf/wod-kingdom/rank/redis/pass": "",
  "/conf/wod-kingdom/wuid/h28/url": "http: //127.0.0.1:10088/cmd/load",
  "/conf/wod-kingdom/wuid/redis/addr": "dwod-server-redis-01: 6379",
  "/conf/wod-kingdom/wuid/redis/cluster": "0",
  "/conf/wod-kingdom/wuid/redis/pass": "",
  "/conf/wod/env": "develop"
}`

export default defineComponent({
  name: 'KgEtcdInfo',
  components: { KgEditor },
  setup() {
    return {
      data,
      options: {
        language: 'json',
        readOnly: false,
      } as EditorOptions,
    }
  },
})
</script>
