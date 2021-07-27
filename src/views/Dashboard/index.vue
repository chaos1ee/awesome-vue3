<template>
  <div class="grid grid-flow-row grid-cols-3 gap-8">
    <div><canvas ref="chartRef"></canvas></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Chart, { ChartItem } from 'chart.js/auto'

export default defineComponent({
  name: 'KgDashboard',
  setup() {
    const { t } = useI18n()
    const chartRef = ref<ChartItem>()

    onMounted(() => {
      if (chartRef.value) {
        new Chart(chartRef.value, {
          type: 'bar',
          data: {
            labels: ['手游', 'PC游戏', '主机游戏'],
            datasets: [
              {
                label: '人数 (万)',
                backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
                data: [8478, 5267, 734],
                barPercentage: 0.2,
              },
            ],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: t('game_players_count'),
              },
              legend: {
                display: false,
              },
            },
          },
        })
      }

      window.addEventListener(
        'localeChange',
        (e: CustomEventInit<{ locale: string }>) => {
          console.log('locale', e.detail?.locale)
        }
      )
    })

    return {
      t,
      chartRef,
    }
  },
})
</script>
