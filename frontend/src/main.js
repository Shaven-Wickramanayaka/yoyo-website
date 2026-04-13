import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import "@mdi/font/css/materialdesignicons.css";
import router from "./router";
const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount("#app");

// import { createApp } from "vue";
// import "./style.css";
// import App from "./App.vue";
// import router from "./router";

// import { VueFire, VueFireAuth } from "vuefire";
// import firebaseApp, { db, auth } from "./firebase/firebase";
// import "@mdi/font/css/materialdesignicons.css";
// import { registerSW } from "virtual:pwa-register";
// const app = createApp(App);
// // const updateSW = registerSW({
// //   onNeedRefresh() {
// //     if (confirm("New content available. Reload?")) {
// //       updateSW(true);
// //     }
// //   },
// //   onOfflineReady() {
// //     console.log("App is ready for offline use!");
// //   },
// // });
