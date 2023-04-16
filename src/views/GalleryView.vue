<template>
<PMosaic v-if="amInitialized" :gallery-name="galleryId" :gallery-index="galleryIndex" :max-width="1800" class="mt-1" image-class="ma-1" :aspect-ratio="1" cover/>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useGallery } from "photo-gallery-components";
import { ref, watch } from "vue";
const route = useRoute();
const { allGalleries, isInitialized } = useGallery();
const galleryId = <string> route.query.gallery;
const galleryIndex = ref( allGalleries.value.get( galleryId ) );
const amInitialized = ref( isInitialized.value );
watch( isInitialized, () =>
{
    galleryIndex.value = allGalleries.value.get( galleryId );
    amInitialized.value = true;
} );
</script>

<style scoped>

</style>