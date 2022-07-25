<template>
  <div>
    <canvas id="tmtpd-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartData from '../assets/js/tmtpd-chart-data'

export default {
   name: 'TotalMintedTokenPerDayChart',
    data() {
        return {
            chartData
        }
    },
  mounted() {
    const ctx = document.getElementById('tmtpd-chart');
    new Chart(ctx, this.chartData);
  }
}
</script>