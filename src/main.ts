import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "vuetify/styles"
// Vuetify
import '@/assets/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import PhotoGalleryComponents from "photo-gallery-components";

const vuetify = createVuetify( {
    components,
    directives,
} )


const app = createApp( App )
app.use( router )
app.use( vuetify );
app.use( PhotoGalleryComponents )
app.mount( '#app' )

