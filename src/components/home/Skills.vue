<script lang="ts">
  import { defineComponent } from "vue";
  import SkillCard from "@/components/SkillCard.vue";
  import skillsData from "@/utils/skills-data";
  import Heading from "@/components/Heading.vue";

  export default defineComponent({
    name: "skills",
    components: { Heading, SkillCard },
    data() {
      return {
        skillsData
      };
    }
  });
</script>

<template>
  <section class="skills">
    <div class="heading">
      <heading :title="$t('home.projects.title')" size="large" />
      <div class="line"></div>
    </div>
    <div class="content">
      <div class="symbols">
        <div class="symbols__1"></div>
        <div class="symbols__2"></div>
        <div class="symbols__3"></div>
        <div class="symbols__4"></div>
        <div class="symbols__5"></div>
      </div>
      <div class="skills__list">
        <skill-card v-for="(i, index) in skillsData" :key="index" :items="i.items" :title="i.title" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .skills {
    max-width: 1024px;
    margin: 0 auto;

    .content {
      display: flex;
      padding-top: 20px;
    }

    .symbols {
      position: relative;
      height: 390px;
      width: 100%;

      &__1 {
        position: absolute;
        top: 10%;
        width: 63px;
        height: 63px;
        background: url("@/assets/dot.svg") no-repeat;
      }

      &__2 {
        position: absolute;
        top: 50%;
        width: 113px;
        height: 113px;
        background: url("@/assets/logo.svg") no-repeat;
        background-size: contain;
      }

      &__3 {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 163px;
        height: 163px;
        transform: translate(-50%, -50%);
        background: url("@/assets/dot.svg") no-repeat;
      }

      &__4 {
        position: absolute;
        top: 0;
        right: 15%;
        width: 150px;
        height: 150px;
        background: url("@/assets/vuong.svg") no-repeat;
        background-size: contain;
      }

      &__5 {
        position: absolute;
        top: 60%;
        right: 5%;
        width: 90px;
        height: 90px;
        background: url("@/assets/vuong.svg") no-repeat;
        background-size: contain;
      }
    }

    .skills__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr); // Tạo 3 cột
      grid-template-rows: repeat(3, auto);
      grid-auto-flow: dense; // Tạo 3 hàng với chiều cao tự động
      gap: 10px;
      width: 100%;

      .skill-card {
        &:nth-child(1) {
          grid-column: 1 / 2;
          //grid-row: 1 / 2;
        }

        // Cột thứ hai có 2 item
        &:nth-child(2) {
          grid-column: 2 / 3;
          //grid-row: 1 / 2;
        }

        &:nth-child(3) {
          grid-column: 2 / 3;
          //grid-row: 2 / 3;
        }

        // Cột thứ ba có 3 item
        &:nth-child(4) {
          grid-column: 3 / 4;
          //grid-row: 1 / 2;
        }

        &:nth-child(5) {
          grid-column: 3 / 4;
          //grid-row: 2 / 3;
        }

        &:nth-child(6) {
          grid-column: 3 / 4;
          //grid-row: 3 / 4;
        }
      }
    }
  }
</style>
