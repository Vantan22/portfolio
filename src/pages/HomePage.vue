<template>
  <div class="page">this page</div>
</template>

<script lang="ts" setup></script>

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
