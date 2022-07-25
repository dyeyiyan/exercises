<template>
  <div>
    <canvas id="npd-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartData from '../assets/js/npd-chart-data'

export default {
   name: 'NetPerDayChart',
    data() {
        return {
            chartData
        }
    },
  mounted() {
    const ctx = document.getElementById('npd-chart');
    new Chart(ctx, this.chartData);
  }
}
</script>