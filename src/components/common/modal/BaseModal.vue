<template>
  <div v-if="modalState.isVisible" class="modal-backdrop" @click="closeModal">
    <div class="modal-content" @click.stop>
      <header class="modal-header">
        <h2>{{ modalState.title }}</h2>
        <button @click="closeModal">X</button>
      </header>
      <main class="modal-body">
        <slot name="content"></slot>
      </main>
      <!--      <footer class="modal-footer">-->
      <!--        <button @click="closeModal">Close</button>-->
      <!--      </footer>-->
    </div>
  </div>
</template>

<script setup>
  // Inject modalState từ plugin
  const props = defineProps(["modalState"]);

  // Hàm đóng modal
  const closeModal = () => {
    props.modalState.isVisible = false;
  };
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: white;
    min-width: 300px;
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding: 20px 10px;
      h2 {
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      button {
        background: none;
        border: none;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        height: 24px;
        width: 24px;
        cursor: pointer;
      }
    }
  }
</style>
