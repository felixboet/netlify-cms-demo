import CMS from "netlify-cms-app";

import { Widget as IdWidget } from "@ncwidgets/id";

import Page from "./templates/page.js";

import { collections } from "./configElements";

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin";
      });
    }
  });
}

CMS.registerWidget(IdWidget);

const config = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  local_backend: true,
  load_config_file: false,
  locale: "de",
  media_folder: "src/uploads",
  public_folder: "/uploads",
  collections: collections,
};

CMS.init({ config });

// The registry works as expected, and can be used before or after init.
CMS.registerPreviewTemplate("pages", Page);
CMS.registerPreviewTemplate("jobs", Page);
