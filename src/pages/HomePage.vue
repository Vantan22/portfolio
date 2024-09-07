<template>
  <quick-info />
  <quote />
  <projects />
  <space />
  <skills />
  <space />
  <about-me />
  <space />
</template>

<script lang="ts" setup>
  import QuickInfo from "@/components/home/QuickInfo.vue";
  import Quote from "@/components/home/Quote.vue";
  import Projects from "@/components/home/projects.vue";
  import Skills from "@/components/home/Skills.vue";
  import Space from "@/components/common/Space.vue";
  import AboutMe from "@/components/home/AboutMe.vue";
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
<style lang="scss">
  .heading {
    @include gap-x(20px);
    align-items: center;
    padding-bottom: 20px;

    .line {
      width: 500px;
      height: 1px;
      background: $main;
    }
  }
</style>
