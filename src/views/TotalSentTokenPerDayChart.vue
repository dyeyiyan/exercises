<template>
  <div>
    <canvas id="tstpd-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartData from '../assets/js/tstpd-chart-data'

export default {
   name: 'TotalSentTokenPerDay',
    data() {
        return {
            chartData
        }
    },
  mounted() {
    const ctx = document.getElementById('tstpd-chart');
    new Chart(ctx, this.chartData);
  }
}
</script>