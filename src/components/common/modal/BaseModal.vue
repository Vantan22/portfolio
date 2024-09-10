<template>
  <div v-if="modalState.isVisible" class="modal">
    <h1>{{ modalState.title }}</h1>
    <div v-html="modalState.content"></div>
    <button @click="closeModal">Close</button>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";
  const name = "BaseModal";

  const props = defineProps({
    modalState: Object
  });

  const closeModal = () => {
    props.modalState.isVisible = false;
  };
</script>

<style scoped>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid #ccc;
  }
</style>
