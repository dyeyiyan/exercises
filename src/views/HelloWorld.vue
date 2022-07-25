<script setup>
import { ref } from 'vue'

import Card from '../components/Card.vue';

const message = ref('Hello Worldss!')
</script>

<template>
  <div class="col-lg-6">
    <Card/>
    <!-- <div class="card">
      <div class="card-body">
        <h5 class="card-title">Template Syntax</h5>
        <p> (Text Interpolation)  Message: {{message}} </p>
        
        <p v-text="message"> </p>
        <h1 v-show="ok">Hellos!</h1>
        <p>Using text interpolation {{ rawHtml }}</p>
        <p>Using v-html directive <span v-html="rawHtml"></span></p>
      </div>
    </div> -->
  </div>

</template>