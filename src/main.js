import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebaseConfig from "./config/firebase";
import firebase from "firebase";
import bootstrap from "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"

firebase.initializeApp(firebaseConfig);

createApp(App)
.use(store)
.use(bootstrap)
.use(router)

.mount("#app");
