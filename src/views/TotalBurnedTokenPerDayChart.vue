<template>
  <div>
    <canvas id="tbtpd-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartData from '../assets/js/tbtpd-chart-data.'

export default {
   name: 'TotalBurnedTokenPerDayChart',
    data() {
        return {
            chartData
        }
    },
  mounted() {
    const ctx = document.getElementById('tbtpd-chart');
    new Chart(ctx, this.chartData);
  }
}
</script>