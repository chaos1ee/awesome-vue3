<template>
  <kg-filter-wrap class="mb-4 rounded">
    <el-form
      ref="fromRef"
      :model="formModel"
      inline
      class="grid grid-cols-3 gap-4"
    >
      <el-form-item prop="kingdom_id">
        <template #label> {{ t('kingdom_id') }}</template>
        <el-select
          v-model="formModel.kingdom_id"
          :placeholder="t('select_kindom_id')"
        >
          <el-option v-for="id in kindom_ids" :key="id" :label="id" :value="id">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </kg-filter-wrap>
  <el-card>
    <div style="height: 500px">
      <kg-editor :value="data" :options="options"></kg-editor>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import KgEditor, { EditorOptions } from '/components/Editor/index.vue'
import { KgFilterWrap } from '/components/index'

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
}
`

export default defineComponent({
  name: 'KgKindomState',
  components: { KgEditor, KgFilterWrap },
  setup() {
    const { t } = useI18n()
    const formRef = ref<any>(null)

    const formModel = reactive({
      kingdom_id: '',
    })

    const kindom_ids = ['k1']

    return {
      t,
      data,
      formRef,
      formModel,
      kindom_ids,
      options: {
        language: 'json',
        readOnly: false,
      } as EditorOptions,
    }
  },
})
</script>
