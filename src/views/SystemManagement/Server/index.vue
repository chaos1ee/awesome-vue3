<template>
  <div class="mb-6">
    <el-alert type="info" center show-icon :closable="false">
      <template #title>
        {{ t('already_latest_no_need_release') }}
      </template>
    </el-alert>
  </div>
  <div class="grid grid-cols-3 gap-6">
    <el-card :body-style="cardBodyStyles">
      <template #header>
        <h2>{{ t('code') }}</h2>
      </template>
      <kg-editor :value="data" :options="options"></kg-editor>
    </el-card>
    <el-card :body-style="cardBodyStyles">
      <template #header>
        <h2>{{ t('ip_white_list') }}</h2>
      </template>
      <kg-ip-white-list></kg-ip-white-list>
    </el-card>
    <el-card :body-style="cardBodyStyles">
      <template #header>
        <h2>{{ t('fpid_white_list') }}</h2>
      </template>
      <kg-fpid-white-list></kg-fpid-white-list>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { KgEditor } from '/components/index'
import { EditorOptions } from '/components/Editor/index.vue'
import { useI18n } from 'vue-i18n'
import { ElAlert } from 'element-plus'
import KgIpWhiteList from './IpWhiteList.vue'
import KgFpidWhiteList from './FpidWhiteList.vue'

const mockData = `{
  "maintain_mode": {
    "global": {
      "start_time": 0,
      "end_time": 0
    },
    "actor": 0,
    "shield": 0
  },
  "ip_white_list": {
    "127.0.0.1": 1,
    "219.141.227.166": 1,
    "202.60.224.162": 1,
    "218.189.10.188": 1,
    "52.24.109.189": 1,
    "137.59.100.146": true,
    "45.137.237.7": true,
    "45.113.164.16": true,
    "106.39.87.194": true,
    "69.172.85.194": true,
    "111.202.159.2": true,
    "202.60.225.162": true
  },
  "ip_white_prefix": "",
  "fpid_white_list": {
    "1": 1
  }
}`

export default defineComponent({
  name: 'KgServer',
  components: { ElAlert, KgEditor, KgIpWhiteList, KgFpidWhiteList },
  setup() {
    const { t } = useI18n()

    return {
      t,
      data: ref(mockData),
      options: {
        language: 'json',
        readOnly: false,
      } as EditorOptions,
      cardBodyStyles: {
        height: 'calc(100vh - 215px)',
        overflow: 'scroll',
      },
    }
  },
})
</script>
