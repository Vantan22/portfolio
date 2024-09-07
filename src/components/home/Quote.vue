<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "quote"
  });
</script>

<template>
  <section id="quote" class="quote">
    <div class="text">
      {{ $t("home.quote") }}
      <div class="symbol1">
        <img src="@/assets/symbol-left.png" alt="" />
      </div>
      <div class="symbol2">
        <img src="@/assets/symbol-right.png" alt="" />
      </div>
    </div>
    <div class="symbol-background"></div>
  </section>
</template>

<style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
  .quote {
    position: relative;
    width: 100%;
    height: 246px;
    @include center;
    padding-bottom: 75px;
    overflow: hidden;

    .text {
      position: relative;
      max-width: 1024px;
      padding: 32px;
      border: 1px solid $gray;
      font-family: "Lobster", sans-serif;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: $secondary;
    }
    .symbol1 {
      position: absolute;
      top: -20px;
      left: 11px;
      width: 40px;
      height: 40px;
      padding: 8px;
      background: $background;
      img {
        width: 100%;
        height: 100%;
        object-fit: Contain;
      }
    }
    .symbol2 {
      position: absolute;
      bottom: -20px;
      right: 11px;
      width: 40px;
      height: 40px;
      padding: 8px;
      background: $background;
      img {
        width: 100%;
        height: 100%;
        object-fit: Contain;
      }
    }
    .symbol-background {
      position: absolute;
      top: 30%;
      transform: translateY(-30%);
      right: 0;
      width: 100px;
      height: 150px;
      background: url("@/assets/vuong-nho.png") no-repeat;
      background-size: cover;
    }
  }
</style>
