<template>
  <header-nav />
  <media-vertical />
  <router-view />
  <vt-footer />
</template>

<script setup>
  import HeaderNav from "@/components/common/HeaderNav.vue";
  import MediaVertical from "@/components/common/MediaVertical.vue";
  import VtFooter from "@/components/common/Footer.vue";
</script>
