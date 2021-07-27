<template>
  <el-button @click="getUserInfo"> Get user </el-button>
  <el-button @click="getStatusCode150"> Get status code 150 </el-button>
  <el-button @click="getStatusCode200"> Get status code 200 </el-button>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import { defineComponent } from 'vue'

import { getStatusCode, getUser } from '/@/apis/index'

export default defineComponent({
  name: 'KgXhr',
  setup() {
    const getStatusCode150 = () =>
      getStatusCode(150).catch(() => {
        ElMessage({
          type: 'error',
          message: '150是错误的状态码',
        })
      })
    const getStatusCode200 = () =>
      getStatusCode(200).then(() => {
        ElMessage({
          type: 'success',
          message: '请求返回200状态码，成功',
        })
      })

    const getUserInfo = () => {
      getUser({
        username: 'lihao',
        password: '123',
      }).then((res) => {
        console.log('res', res)
        ElMessage({
          type: 'success',
          message: '请求成功',
        })
      })
    }

    return {
      getUserInfo,
      getStatusCode150,
      getStatusCode200,
    }
  },
})
</script>

<style lang="scss" scoped>
// add your custom css styles here
</style>
