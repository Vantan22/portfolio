<script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'quick-info',
})
</script>

<template>
<div class='full-with'>
  <div class='info'>
    <div class='title'>
      <h1>Charlie Nguyen</h1>
    </div>
    <div class='description'>
      <p>Software Engineer</p>
    </div>
    <router-link to='#contact'>Contact me</router-link>
  </div>
  <div class='image'>
  </div>
</div>
</template>

<style scoped lang='scss'>

</style>
