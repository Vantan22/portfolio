<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "media-vertical"
  });
</script>

<template>
  <div class="media">
    <div class="line"></div>
    <router-link to="https://github.com/Vantan22">
      <i class="fa-brands fa-github"></i>
    </router-link>
    <router-link to="https://www.facebook.com/vantan22">
      <i class="fa-brands fa-facebook"></i>
    </router-link>
    <router-link to="https://www.instagram.com/Vantan22">
      <i class="fa-brands fa-instagram"></i>
    </router-link>
    <router-link to="https://www.tiktok.com/@officialvantan">
      <i class="fa-brands fa-tiktok"></i>
    </router-link>
    <router-link to="https://www.linkedin.com/in/charlie-nguyen-368328290/">
      <i class="fa-brands fa-linkedin"></i>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
  .media {
    @include gap-y(8px);
    align-items: center;
    position: fixed;
    top: 0;
    left: 2%;
    z-index: 3;

    .line {
      height: calc(100vh / 8);
      width: 1px;
      background: $gray;
    }

    i {
      font-size: 30px;
      color: $gray;
      &:hover {
        opacity: 0.8;
      }
    }
  }
</style>
