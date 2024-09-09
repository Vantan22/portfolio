<script lang="ts">
  import { defineComponent } from "vue";
  import Heading from "@/components/common/Heading.vue";
  import VtButton from "@/components/common/VTButton.vue";
  import Space from "@/components/common/Space.vue";

  export default defineComponent({
    name: "contacts",
    components: { Space, VtButton, Heading },
    methods: {
      downloadFile() {
        // Tạo một liên kết ẩn
        const link = document.createElement("a");
        link.href = "/CV_TanNV.docx"; // Đường dẫn đến tệp Word
        link.download = "CV_NGUYEN_VAN_TAN_VUE_REACT.docx"; // Tên tệp khi tải xuống
        // Kích hoạt sự kiện click để tải tệp xuống
        link.click();
      }
    }
  });
</script>

<template>
  <section id="contacts" class="contacts">
    <div class="wrapper">
      <div class="heading">
        <heading :title="$t('home.contacts.heading')" size="large" />
        <div class="line"></div>
      </div>
      <div class="content">
        <div class="content__info">
          <div class="content__info__description">
            {{ $t("home.contacts.description") }}
          </div>
          <vt-button :name="$t('home.contacts.button')" @clicked="downloadFile" />
        </div>
        <div class="content__card">
          <h2>Message Me</h2>
          <div class="content__card__info">
            <a href="https://maps.app.goo.gl/n9V4YJxfiH1dNj41A"
              ><i class="fas fa-map-marker-alt"></i> 254D Minh Khai, Ha Noi</a
            >
            <a href="mailto:vawntan.dev@gmail.com"><i class="fas fa-envelope"></i> vawntan.dev@gmail.com</a>
            <a href="tel:+84867556636"><i class="fas fa-phone"></i> +84 867 556 636</a>
            <a href="https://t.me/vantan24"><i class="fab fa-telegram"></i> +84 867 556 636</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <space />
  <space />
</template>

<style scoped lang="scss">
  .contacts {
    position: relative;
    width: 100%;
    height: 100%;
    .wrapper {
      max-width: 1024px;
      margin: 0 auto;
      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__info {
          max-width: 50%;
          @include gap-y(20px);
          &__description {
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 2.6rem;
            color: $gray;
          }
        }

        &__card {
          max-width: 50%;
          border: 1px solid $gray;
          padding: 10px;
          @include gap-y(20px);
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          line-height: 2.6rem;
          color: $gray;
          a {
            color: $gray;
          }
          &__info {
            @include gap-y(10px);
          }
        }
      }
    }
  }
</style>
