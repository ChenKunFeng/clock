import { defineConfig } from "alita";

export default defineConfig({
  appType: "h5",
  mobileLayout: true,

  proxy: {
    "/api/*": {
      // target: 'https://devapi.qweather.com/v7',
      target: "https://geoapi.qweather.com/",

      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },

    "/weather/*": {
      target: "https://devapi.qweather.com/v7",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
});
