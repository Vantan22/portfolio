<template>
  <div :class="[size]">
    <span>#</span>
    <h2>{{ title }}</h2>
  </div>
</template>

<script lang="ts">
  export default {
    name: "heading",
    props: {
      title: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: "large",
        validator: (value: string) => {
          return ["large", "medium"].indexOf(value) !== -1;
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  div {
    display: flex;
    align-items: center;
    column-gap: 2px !important;

    span {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: $main;
    }

    h2 {
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: $secondary;
    }

    &.medium {
      span,
      h2 {
        font-size: 1.6rem;
      }
    }

    &.large {
      span,
      h2 {
        font-size: 3.6rem;
      }
    }

    &:hover {
      opacity: 0.8;
    }
  }
</style>
