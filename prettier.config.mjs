import config from "./config/yo0-config/prettier.config.mjs";

/** @type {import("prettier").Config} */
export default {
  ...config,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
