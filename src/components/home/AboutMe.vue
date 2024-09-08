<template>
  <section id="about-me" class="about-me">
    <div class="wrapper">
      <div class="heading">
        <heading :title="$t('home.about-me.heading')" size="large" />
        <div class="line"></div>
      </div>
      <div class="content">
        <div class="content__info">
          <h2>{{ $t("home.about-me.name") }}</h2>
          <p>{{ $t("home.about-me.description") }}</p>
          <vt-button :name="$t('home.about-me.button')" prefix="->" />
        </div>
        <div class="content__img"></div>
      </div>
    </div>
    <div class="symbol-1"></div>
    <div class="symbol-2"></div>
  </section>
  <space />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import Heading from "@/components/Heading.vue";
  import VtButton from "@/components/common/VTButton.vue";
  import Contacts from "@/components/home/Contacts.vue";
  import Space from "@/components/common/Space.vue";

  export default defineComponent({
    name: "about-me",
    components: { Space, Contacts, VtButton, Heading }
  });
</script>
<style scoped lang="scss">
  .about-me {
    position: relative;
    overflow: hidden;

    .wrapper {
      max-width: 1024px;
      margin: 0 auto;
      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        &__info {
          max-width: 50%;
          @include gap-y(20px);
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          line-height: 2.6rem;
          color: $gray;
        }

        &__img {
          width: 270px;
          height: 360px;
          background: url("@/assets/anh-portfolio2.png") no-repeat;
          background-size: contain;
          border-bottom: 1px solid $main;
        }
      }
    }
    .symbol-1 {
      position: absolute;
      top: 0;
      right: -5%;
      width: 200px;
      height: 200px;
      background: url("@/assets/vuong.svg") no-repeat;
      background-size: contain;
    }
    .symbol-2 {
      position: absolute;
      bottom: 0;
      left: -1%;
      width: 100px;
      height: 100px;
      background: url("@/assets/dot.svg") no-repeat;
      background-size: contain;
    }
  }
</style>
