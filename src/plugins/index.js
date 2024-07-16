import { markRaw } from "vue";

import vuetify from "./vuetify";
import pinia from "@/stores";
import router from "@/router";

pinia.use(({ store }) => (store.$router = markRaw(router)));

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(pinia);
}
