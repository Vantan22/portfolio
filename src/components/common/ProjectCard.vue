<script lang="ts">
  import { defineComponent } from "vue";
  import VtButton from "@/components/common/VTButton.vue";

  export default defineComponent({
    name: "project-card",
    components: { VtButton },
    props: {
      thumbnail: {
        type: String
      },
      techStack: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      button: {
        type: Array
      }
    }
  });
</script>

<template>
  <div class="project-card">
    <div v-if="thumbnail" class="image">
      <img :src="thumbnail" alt="" />
    </div>
    <div class="tech-stack">
      <span v-for="(tech, index) in techStack" :key="index">{{ tech }}</span>
    </div>
    <div class="info">
      <span class="info__name">{{ name }}</span>
      <span class="info__description">{{ description }}</span>
      <div class="info__btn">
        <vt-button
          v-for="(btn, index) in button"
          :key="index"
          :name="$t(btn.name)"
          @clicked="btn.clicked"
          :to="btn?.to"
          :prefix="btn?.prefix"
          :secondary="btn?.secondary"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .project-card {
    max-width: 330px;
    border: 1px solid $gray;
    .image {
      width: 328px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .tech-stack {
      @include gap-x(10px);
      align-items: center;
      flex-wrap: wrap;
      padding: 8px;
      border-bottom: 1px solid $gray;
      border-top: 1px solid $gray;
      span {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $gray;
      }
    }

    .info {
      @include gap-y(16px);
      padding: 16px;
      &__name {
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: $secondary;
      }

      &__description {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $gray;
      }

      &__btn {
        display: flex;
        gap: 16px;
        align-items: center;
        flex-wrap: wrap;
      }
    }
  }
</style>
