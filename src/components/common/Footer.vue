<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "vt-footer",
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  });
</script>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="content">
        <div class="name">
          <h2>Charlie Nguyen</h2>
          <span>{{ '<frontend-developer />' }}</span>
        </div>
        <div class="media">
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
      </div>
      <div class="copyright">© Copyright {{ year }} Charlie Nguyen. All rights reserved.</div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    width: 100%;
    border-top: 1px solid $gray;
    padding: 32px 0;
    .wrapper {
      max-width: 1024px;
      margin: 0 auto;
      display: flex;
      row-gap: 24px;
      flex-direction: column;

      .copyright {
        margin: 0 auto;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $gray;
      }
      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
          font-family: "Fira Code", monospace;
          @include gap-y(12px);
          h2 {
            font-size: 3.2rem;
            font-style: normal;
            font-weight: 600;
            line-height: 3.2rem;
            color: $secondary;
          }
          span {
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.8rem;
            color: $secondary;
          }
        }
        .media {
          @include gap-x(20px);
          align-items: center;

          i {
            font-size: 30px;
            color: $gray;
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
</style>
