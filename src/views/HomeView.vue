<template>
  <p-mosaic :gallery-index="allImages" :max-width="1800" :aspect-ratio="1" cover/>
</template>

<script setup lang="ts">
import { useGallery } from "photo-gallery-components";
import { GalleryImage } from "photo-gallery-components";
const { allImages } = useGallery();
allImages.value.sort( ( a: GalleryImage, b: GalleryImage ) => new Date( a.ctime ).getTime() - new Date( b.ctime ).getTime() )
</script>

<style scoped>

</style>