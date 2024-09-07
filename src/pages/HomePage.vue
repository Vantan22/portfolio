<template>
  <quick-info />
  <quote />
  <projects />
</template>

<script lang="ts" setup>
  import QuickInfo from "@/components/home/QuickInfo.vue";
  import Quote from "@/components/home/Quote.vue";
  import Projects from "@/components/home/projects.vue";
</script>

<style lang="scss" scoped>
  button {
    background: $main;
    color: $secondary;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 90ms ease-in-out;

    &:active {
      transform: scale(0.95);
    }
  }

  .button-wrapper {
    display: flex;
    margin: 10px 0 0 0;

    button {
      margin: 0 5px;
    }
  }
</style>
