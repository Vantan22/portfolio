<template>
  <button @click="clickButton" :class="secondary && 'secondary'">
    <span>{{ name }}</span>
    <div v-if="prefix">{{ prefix }}</div>
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
          window.location.href = this.to;
        }
        this.$emit("clicked");
      }
    }
  });
</script>

<style lang="scss" scoped>
  button {
    display: inline-flex;
    padding: 8px 16px;
    align-items: flex-start;
    max-width: max-content;
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
      margin-left: 10px;
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
