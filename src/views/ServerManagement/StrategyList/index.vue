<template>
  <el-card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column :label="t('name')">
        <template #default="scope">
          <router-link
            :to="{ path: 'player_detail/' + scope.row.name }"
            class="text-primary"
          >
            {{ scope.row.name }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="basic_info" :label="t('basic_info')">
        <template #default="scope">
          <pre>{{ scope.row.basic_info }}</pre>
        </template>
      </el-table-column>
      <el-table-column prop="connection_info" :label="t('connection_info')">
        <template #default="scope">
          <pre>{{ scope.row.connection_info }}</pre>
        </template>
      </el-table-column>
      <el-table-column prop="status" :label="t('status')">
        <template #default="scope">
          <pre class="overflow-auto">{{ scope.row.status }}</pre>
        </template>
      </el-table-column>
    </el-table>
    <div class="mt-4 flex justify-end">
      <el-pagination
        background
        :total="total"
        :page-sizes="[10, 20, 30, 50]"
        layout="total, sizes, prev, pager, next, jumper"
      >
      </el-pagination>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'KgStrategyList',
  setup() {
    const { t } = useI18n()

    const tableData = [
      {
        name: 'some name',
        basic_info: {
          Name: 'g1',
          NameHash: 8300063136637090367,
          AddrC: ':7681',
          AddrB: ':7682',
          AddrG: ':7687',
          AddrHttpcmd: ':7688',
          RedisKey: 'stargate:g1:1628193746',
          Extra: '{"addrC":"39.106.204.20:33000"}',
          PID: 317,
          StartTime: 1628193746,
          RegTime: 1628193746,
        },
        connection_info: {
          B: {
            NumConns: 1,
          },
          C: {
            NumConns: 7,
          },
        },
        status: {
          Alloc: 3186912,
          AllocMax: 20452056,
          Frees: 14865689,
          HeapAlloc: 3186912,
          HeapIdle: 61128704,
          HeapInuse: 4734976,
          HeapObjects: 33428,
          HeapReleased: 60923904,
          HeapSys: 65863680,
          LastGC: 1628220739664515800,
          Mallocs: 14899117,
          NumGC: 374,
          PauseNs: '[]',
          StackInuse: 1245184,
          StackSys: 1245184,
          Sys: 75842568,
          TotalAlloc: 770182272,
        },
      },
    ]

    return {
      t,
      tableData,
      total: tableData.length,
    }
  },
})
</script>
