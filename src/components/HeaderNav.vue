<template>
  <header>
    <router-link to="/">
      <h1>VAWNTAN</h1>
    </router-link>
    <nav>
      <router-link to="/" exact-active-class="active">
        <heading :title="$t('menu.home')" size="medium" />
      </router-link>
      <router-link to="/works" exact-active-class="active">
        <heading :title="$t('menu.works')" size="medium" />
      </router-link>
      <router-link to="/about" exact-active-class="active">
        <heading :title="$t('menu.about-me')" size="medium" />
      </router-link>
      <router-link to="/contacts" exact-active-class="active">
        <heading :title="$t('menu.contacts')" size="medium" />
      </router-link>
      <dropdown :items="['EN', 'VN']" @select="selectLanguage" />
    </nav>
  </header>
</template>
<script setup lang="ts">
  import Heading from "@/components/Heading.vue";
  import Dropdown from "@/components/Dropdown.vue";
  import {useI18n} from 'vue-i18n';
  const { locale } = useI18n();
  const selectLanguage = (lang: string) => {
    locale.value = lang;
  };
</script>

<style lang="scss" scoped>
  header {
    @include space-between;
    max-width: 1024px;
    margin: 0 auto;
    color: $main;
    padding: 32px 0 8px 0;

    h1 {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: $main;
    }
  }

  nav {
    @include gap-x(32px);

    a {
      color: $main;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      opacity: 0.6;
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }

      &.active {
        opacity: 1;
      }
    }
  }
</style>
