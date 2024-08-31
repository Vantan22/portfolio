<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "quick-info"
  });
</script>

<template>
  <section id="quick-info" class="quick-info">
    <div class="content">
      <div class="content__title">
        {{ $t("home.quickInfo.title") }}<span>Vawntan</span> {{ $t("home.quickInfo.title2") }}
      </div>
      <div class="content__description">
        {{ $t("home.quickInfo.intro") }}
      </div>
      <router-link to="/contact">{{ $t("home.quickInfo.button") }}</router-link>
    </div>
    <div class="image">
      <div class="work">
        <div class="work__check"></div>
        <div class="work__description">{{ $t("home.quickInfo.works") }} <span>Simple Task Project</span></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .quick-info {
    max-width: 1024px;
    margin: 120px auto 80px auto;
    height: 400px;
    @include gap-x(14px);

    .content {
      max-width: 60%;
      padding-right: 30px;

      &__title {
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        color: $secondary;

        span {
          color: $main;
        }
      }

      &__description {
        margin-top: 38px;
        margin-bottom: 24px;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.5rem;
        color: $gray;
      }

      a {
        padding: 8px 16px;
        border: 1px solid $main;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: $secondary;

        &:hover {
          background: $main;
        }
      }
    }

    .image {
      position: relative;
      width: 40%;
      background-image: url("@/assets/img-profile.png");
      background-size: cover;
      .work {
        position: absolute;
        bottom: -36px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        width: max-content;
        padding: 8px;
        align-items: center;
        gap: 10px;
        border: 1px solid $gray;
        &__check {
          width: 16px;
          height: 16px;
          border: 1px solid $main;
          background: $main;
        }
        &__description {
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          color: $gray;
          span {
            color: $secondary;
          }
        }
      }
    }
  }
</style>
