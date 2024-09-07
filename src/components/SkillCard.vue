<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "skill-card",
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    }
  });
</script>

<template>
  <div class="skill-card">
    <div class="title">{{ title }}</div>
    <div class="items">
      <div class="item" v-for="(item, index) in items" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<style lang="scss">
  .skill-card {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    width: max-content;
    height: max-content;
    border: 1px solid $gray;
    .title {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding: 8px;
      border-bottom: 1px solid $gray;
      color: $secondary;
    }
    .items {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      padding: 8px;
      .item {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $gray;
      }
    }
  }
</style>
