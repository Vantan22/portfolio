<template>
  <button @click="clickButton" :class="secondary && 'secondary'">
    <span>{{ name }}</span>
    <div>{{ prefix }}</div>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "vt-button",
    props: {
      secondary: {
        type: Boolean
      },
      name: {
        type: String,
        required: true
      },
      prefix: {
        type: String
      },
      to: {
        type: String
      }
    },
    methods: {
      clickButton() {
        if (this.to) {
          this.$router.push(this.to);
        }
        this.$emit("Clicked");
      }
    }
  });
</script>

<style lang="scss" scoped>
  button {
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: 10px;
    color: $secondary;
    border: 1px solid $main;
    background: none;
    cursor: pointer;
    transition: all 90ms ease-in-out;

    span {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    div {
      font-family: "Fira Code", monospace;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    &:hover {
      background: $background-btn-hover;
      color: $secondary;
    }

    &.secondary {
      color: $secondary;
      border: 1px solid $secondary;
    }

    &.secondary:hover {
      background: $background-btn-secondary-hover;
    }
  }
</style>
