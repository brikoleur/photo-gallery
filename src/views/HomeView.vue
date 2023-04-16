<template>
  <p-mosaic :gallery-index="allImages" :max-width="1800" :aspect-ratio="1" cover/>
</template>

<script setup lang="ts">
import { useGallery } from "photo-gallery-components";
const { allImages } = useGallery();
</script>

<style scoped>

</style>