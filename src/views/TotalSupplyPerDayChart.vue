<template>
  <div>
    <canvas id="tspd-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartData from '../assets/js/chart-data'

export default {
   name: 'TotalSupplyPerDayChart',
    data() {
        return {
            chartData
        }
    },
  mounted() {
    const ctx = document.getElementById('tspd-chart');
    new Chart(ctx, this.chartData);
  }
}
</script>