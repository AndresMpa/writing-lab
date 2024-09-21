// vite.config.mjs
import AutoImport from "file:///home/andresmpa/Desktop/writing-lab/node_modules/.pnpm/unplugin-auto-import@0.17.8_rollup@4.22.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///home/andresmpa/Desktop/writing-lab/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.6_rollup@4.22.0_vue@3.5.6/node_modules/unplugin-vue-components/dist/vite.js";
import Fonts from "file:///home/andresmpa/Desktop/writing-lab/node_modules/.pnpm/unplugin-fonts@1.1.1_vite@5.4.6_@types+node@22.5.5_sass@1.79.1_/node_modules/unplugin-fonts/dist/vite.mjs";
import Layouts from "file:///home/andresmpa/Desktop/writing-lab/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.4.6_@types+node@22.5.5_sass@1.79.1__vue-router@4.4.5_vue@3.5.6__vue@3.5.6/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Vue from "file:///home/andresmpa/Desktop/writing-lab/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.6_@types+node@22.5.5_sass@1.79.1__vue@3.5.6/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///home/andresmpa/Desktop/writing-lab/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.22.0_vue-router@4.4.5_vue@3.5.6__vue@3.5.6/node_modules/unplugin-vue-router/dist/vite.mjs";
import Vuetify, { transformAssetUrls } from "file:///home/andresmpa/Desktop/writing-lab/node_modules/.pnpm/vite-plugin-vuetify@2.0.4_vite@5.4.6_@types+node@22.5.5_sass@1.79.1__vue@3.5.6_vuetify@3.7.2/node_modules/vite-plugin-vuetify/dist/index.mjs";
import { defineConfig } from "file:///home/andresmpa/Desktop/writing-lab/node_modules/.pnpm/vite@5.4.6_@types+node@22.5.5_sass@1.79.1/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import vueDevTools from "file:///home/andresmpa/Desktop/writing-lab/node_modules/.pnpm/vite-plugin-vue-devtools@7.4.5_rollup@4.22.0_vite@5.4.6_@types+node@22.5.5_sass@1.79.1__vue@3.5.6/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///home/andresmpa/Desktop/writing-lab/vite.config.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vueDevTools(),
    VueRouter(),
    Layouts(),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss"
      }
    }),
    Components(),
    AutoImport({
      imports: ["vue", "vue-router"],
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@fonts": fileURLToPath(new URL("./src/assets/fonts", __vite_injected_original_import_meta_url))
    },
    extensions: [".ttf", ".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
  server: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYW5kcmVzbXBhL0Rlc2t0b3Avd3JpdGluZy1sYWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2FuZHJlc21wYS9EZXNrdG9wL3dyaXRpbmctbGFiL3ZpdGUuY29uZmlnLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9hbmRyZXNtcGEvRGVza3RvcC93cml0aW5nLWxhYi92aXRlLmNvbmZpZy5tanNcIjsvLyBQbHVnaW5zXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCBGb250cyBmcm9tIFwidW5wbHVnaW4tZm9udHMvdml0ZVwiO1xuaW1wb3J0IExheW91dHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXCI7XG5pbXBvcnQgVnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInVucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZVwiO1xuaW1wb3J0IFZ1ZXRpZnksIHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZXRpZnlcIjtcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZURldlRvb2xzKCksXG4gICAgVnVlUm91dGVyKCksXG4gICAgTGF5b3V0cygpLFxuICAgIFZ1ZSh7XG4gICAgICB0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSxcbiAgICB9KSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnktbG9hZGVyL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3ZpdGUtcGx1Z2luI3JlYWRtZVxuICAgIFZ1ZXRpZnkoe1xuICAgICAgYXV0b0ltcG9ydDogdHJ1ZSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBjb25maWdGaWxlOiBcInNyYy9zdHlsZXMvc2V0dGluZ3Muc2Nzc1wiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCJdLFxuICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgZGVmaW5lOiB7IFwicHJvY2Vzcy5lbnZcIjoge30gfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICBcIkBmb250c1wiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyYy9hc3NldHMvZm9udHNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgICBleHRlbnNpb25zOiBbXCIudHRmXCIsIFwiLmpzXCIsIFwiLmpzb25cIiwgXCIuanN4XCIsIFwiLm1qc1wiLCBcIi50c1wiLCBcIi50c3hcIiwgXCIudnVlXCJdLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sV0FBVywwQkFBMEI7QUFHNUMsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxlQUFlLFdBQVc7QUFDbkMsT0FBTyxpQkFBaUI7QUFadUosSUFBTSwyQ0FBMkM7QUFlaE8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsSUFBSTtBQUFBLE1BQ0YsVUFBVSxFQUFFLG1CQUFtQjtBQUFBLElBQ2pDLENBQUM7QUFBQTtBQUFBLElBRUQsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLFFBQ04sWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLFlBQVk7QUFBQSxNQUM3QixVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVEsRUFBRSxlQUFlLENBQUMsRUFBRTtBQUFBLEVBQzVCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDcEQsVUFBVSxjQUFjLElBQUksSUFBSSxzQkFBc0Isd0NBQWUsQ0FBQztBQUFBLElBQ3hFO0FBQUEsSUFDQSxZQUFZLENBQUMsUUFBUSxPQUFPLFNBQVMsUUFBUSxRQUFRLE9BQU8sUUFBUSxNQUFNO0FBQUEsRUFDNUU7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
