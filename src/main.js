import { createApp } from '@vue/compat';
import App from "./App.vue";
import router from "./router/index.js";
import pinia from "./stores/index.js"
// import "@babel/polyfill";
import "./plugins/bootstrap-vue";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
