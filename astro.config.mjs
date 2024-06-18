import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "pt-br"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
