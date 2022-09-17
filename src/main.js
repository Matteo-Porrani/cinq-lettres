// here we import global styles
import './assets/css/global.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// GLOBAL COMPONENTS
import MainLink from '@/components/navigation/MainLink.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.component('MainLink', MainLink);

app.mount('#app');

// createApp(App).use(router).mount('#app')
