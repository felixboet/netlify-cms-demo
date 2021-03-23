import { NameField, pageBlocksField } from "./fields.js";

const pages = {
  label: "Seiten",
  label_singular: "Seite",
  name: "pages",
  folder: "/src/_pages",
  sort: "{{fields.permalink:asc}}",
  create: true,
  sortable_fields: ["permalink"],
  identifier_field: "permalink",
  summary: "{{permalink}}",
  slug: "{{uid}}",
  description: "Hier können Seiten bearbeitet und neue erstellt werden",

  fields: [
    {
      label: "URL",
      name: "permalink",
      widget: "string",
      pattern: [
        "^\\/([A-Za-z0-9\\-\\_\\/]+)?$",
        "muss mit '/' beginnen, erlaubt: a-z,A-Z,0-9,-,_)",
      ],
      default: "/neue-seite",
      hint:
        "URL der Seite, für die Startseite '/' benutzen. Beispiele '/ueber-uns' oder '/ueber-uns/wohngruppen'",
    },
    { label: "Titel", name: "title", widget: "string", hint: "Wird in Suchmaschinen und im Browser angezeigt" },
    pageBlocksField,

    {
      label: "Einstellungen",
      name: "settings",
      widget: "object",
      collapsed: true,
      fields: [
        {
          label: "Bild oben",
          name: "imgTop",
          widget: "image",
          required: false,
        },
        {
          label: "Bild unten 1",
          name: "imgBottom1",
          widget: "image",
          required: false,
        },
        {
          label: "Bild unten 2",
          name: "imgBottom2",
          widget: "image",
          required: false,
        },
        {
          label: "Bild unten 3",
          name: "imgBottom3",
          widget: "image",
          required: false,
        },
        {
          label: "Farbe",
          name: "color",
          default: "#e77b0b",
          widget: "select",
          required: false,
          options: [
            { label: "rot (Wohngruppen)", value: "#d44e39" },
            { label: "grün (Förderschule)", value: "#91b353" },
            { label: "violett (Therapie)", value: "#7c6fb0" },
            { label: "türkis (Tiergestützte Pädagogik)", value: "#18a092" },
          ],
        },
      ],
    },
    {
      label: "Sichtbar",
      name: "public",
      widget: "boolean",
      required: false,
      default: true,
    },
    { label: "Meta-Description", name: "metadesc", widget: "text", hint: "Kurze Zusammenfassung dieser Seite für Suchmaschinen, max. 160 Zeichen", required: false, pattern: ['.{0,160}', "zu lang, maximal 160 Zeichen"] },
    { name: "uid", label: "ID", hidden: true, widget: "ncw-id" },
  ],
};

const jobs = {
  label: "Stellenangebote",
  label_singular: "Stellenangebot",
  name: "jobs",
  folder: "/src/_jobs",
  create: true,
  sort: "{{fields.sortkey}}",
  sortable_fields: ["sortkey"],
  identifier_field: "slug",
  summary: "{{fields.slug}}",
  slug: "{{uid}}",
  description: "Hier können Stellenangebote erstellt und bearbeitet werden",
  fields: [
    {
      label: "Vorschau Titel",
      name: "slug",
      widget: "string",
      default: "Neues Stellenangebot",
      hint: 'Wird auf der "Stellenangebote"-Seite angezeigt und ist in der Vorschau rechts nicht sichtbar',
    },
    {
      label: "Vorschau Text",
      name: "teaser",
      hint:
        'Ebenfalls für die "Stellenangebote"-Seite',
      widget: "markdown",
    },
    {
      label: "Sichtbar",
      name: "public",
      widget: "boolean",
      required: false,
      default: true,
    },
    pageBlocksField,

    {
      label: "Reihenfolge",
      name: "sortkey",
      widget: "number",
      default: 1,
      value_type: "int",
      min: 0,
      max: 100,
      step: 1,
      hint:
        "Einträge mit niedrigeren Nummern werden weiter oben in der Liste angezeigt",
    },
    { label: "Meta-Description", name: "metadesc", widget: "text", hint: "Kurze Zusammenfassung dieser Seite für Suchmaschinen, max. 160 Zeichen", required: false, pattern: ['.{0,160}', "zu lang, maximal 160 Zeichen"] },
    {
      label: "Einstellungen",
      name: "settings",
      widget: "object",
      collapsed: true,
      fields: [
        {
          label: "Bild oben",
          name: "imgTop",
          widget: "image",
          required: false,
        },
        {
          label: "Bild unten 1",
          name: "imgBottom1",
          widget: "image",
          required: false,
        },
        {
          label: "Bild unten 2",
          name: "imgBottom2",
          widget: "image",
          required: false,
        },
        {
          label: "Bild unten 3",
          name: "imgBottom3",
          widget: "image",
          required: false,
        },
      ],
    },
    { name: "uid", label: "ID", hidden: true, widget: "ncw-id" },
  ],
};

const settings = {
  label: "Einstellungen",
  label_singular: "Einstellung",
  name: "settings",
  editor: { preview: false },
  files: [
   /* {
      label: "Allgemein",
      name: "general",
      file: "src/_data/general.yml",
      fields: [{ label: "Seitentitel", name: "title", widget: "string" }],
    },*/
    {
      label: "Menü",
      name: "menu",
      file: "src/_data/menu.yml",
      fields: [
        {
          label: "Menüeinträge",
          label_singular: "Menüeintrag",
          name: "items",
          widget: "list",
          fields: [
            { label: "Text", name: "text", widget: "string" },
            {
              label: "Seite",
              name: "uid",
              widget: "relation",
              collection: "pages",
              options_length: 400,
              search_fields: ["permalink"],
              value_field: "{{slug}}.md",
              display_fields: ["permalink"],
            },
            {
              label: "Untermenü",
              name: "submenu",
              widget: "list",
              fields: [
                { label: "Text", name: "text", widget: "string" },
                {
                  label: "Seite",
                  name: "uid",
                  widget: "relation",
                  collection: "pages",
                  options_length: 400,
                  search_fields: ["permalink"],
                  value_field: "{{slug}}.md",
                  display_fields: ["permalink"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const collections = [pages, jobs, settings];
export { collections };
