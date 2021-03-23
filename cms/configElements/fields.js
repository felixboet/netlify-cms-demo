import { languages } from "./languages.js";
import { allCssClasses } from "./allCssClasses.js";

export const LanguageField = function (options) {
  const label = options.label || "Language";
  const hint =
    options.hint ||
    "Set your site’s primary language for screen readers, translation tools and search engines. For for multilingual content select individual languages in layouts, pages or posts.";
  const obj = {
    name: "language",
    label: label,
    hint: hint,
    required: false,
    widget: "select",
    options: languages,
  };
  return obj;
};

export const RequiredStringField = function (options) {
  const widgetName = options.widgetName || "";
  const label = options.label || widgetName + " Label";
  const name = options.name || "name";
  const hint = options.hint || "";
  const defaultValue = options.defaultValue || widgetName;
  const obj = {
    name: name,
    label: label,
    default: defaultValue,
    hint: hint,
    widget: "string",
  };
  return obj;
};
export const OptionalStringField = function (options) {
  const widgetName = options.widgetName || "";
  const label = options.label || widgetName + " Label";
  const name = options.name || "name";
  const hint = options.hint || "";
  const defaultValue = options.defaultValue || widgetName;
  const obj = {
    name: name,
    label: label,
    default: defaultValue,
    hint: hint,
    widget: "string",
    required: false,
  };
  return obj;
};

export const UidField = function (options) {
  const label = options.label || "ID";
  const prefix = options.prefix || "";
  const obj = {
    name: "uid",
    label: label,
    prefix: prefix,
    hidden: true,
    widget: "ncw-id",
  };
  return obj;
};

export const NameField = function (options) {
  const widgetName = options.widgetName || "";
  const label = options.label || widgetName + " Label";
  const name = options.name || "name";
  const hint = options.hint || "";
  const required = options.required || true;
  const defaultValue = options.defaultValue || widgetName;
  const obj = {
    name: name,
    label: label,
    default: defaultValue,
    hint: hint,
    widget: "string",
    required: required,
  };
  return obj;
};

const TextField = function (options) {
  const widgetName = options.widgetName || "";
  const label = options.label || widgetName + " Text";
  const name = options.name || "text";
  const hint = options.hint || "";
  const defaultValue =
    options.defaultValue ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  const obj = {
    name: name,
    label: label,
    default: defaultValue,
    hint: hint,
    widget: "text",
  };
  return obj;
};

export const CssClassesField = function (options) {
  const label = options.label || "CSS Classes";
  const name = options.name || "cssClasses";
  const hint = options.hint || "";
  const cssClasses = options.cssClasses || allCssClasses;
  const defaultClasses = options.defaultClasses || null;
  const obj = {
    name: name,
    label: label,
    default: defaultClasses,
    required: false,
    widget: "select",
    multiple: true,
    hint: hint,
    options: cssClasses,
  };
  return obj;
};

const linkTextField = {
  label: "Link Text",
  name: "linkText",
  widget: "string",
  default: "Link",
};

const colorField = {
  label: "Color",
  name: "color",
  widget: "string",
  default: "darkgray",
};
const fillColorField = {
  label: "Fill Color",
  name: "fillColor",
  widget: "string",
  default: "lightgray",
};

const NormalizedPercentageField = function (options) {
  const defaultValue = options.defaultValue || 0.5;

  const label = options.label || "Normalized Percentage";
  const name = options.name || "normalizedPercentage";
  const obj = {
    name: name,
    label: label,
    default: defaultValue,
    widget: "number",
    valueType: "float",
    min: 0,
    max: 1,
    step: 0.1,
  };
  return obj;
};
const normalizedPercentageField = NormalizedPercentageField({});

const opacityField = Object.assign({}, normalizedPercentageField, {
  label: "Opacity",
  name: "opacity",
});
const fillOpacityField = Object.assign({}, opacityField, {
  label: "Fill Opacity",
  name: "fillOpacity",
});

const markdownField = {
  label: "Content",
  name: "markdown",
  widget: "markdown",
  default:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  // editor components missing
};
const newTabField = {
  label: "Open in new tab",
  name: "newTab",
  widget: "boolean",
  default: false,
};
const newTabField_true = Object.assign({}, newTabField, {
  default: true,
});

const externalLinkField = {
  label: "External Link URL",
  name: "externalLink",
  widget: "string",
  default: "https://",
};
const internalPageLinkField = {
  label: "Internal Link (Page)",
  name: "internalPageLink",
  widget: "relation",
  collection: "pages",
  displayFields: ["permalink"],
  searchFields: ["title", "permalink"],
  valueField: "uid",
  optionsLength: 100,
};
const internalBlogLinkField = {
  label: "Internal Link (Blog)",
  name: "internalBlogLink",
  widget: "relation",
  collection: "blog",
  displayFields: ["title"],
  searchFields: ["title"],
  valueField: "uid",
  optionsLength: 100,
};
const fileLinkField = {
  label: "FileLink",
  name: "fileLink",
  widget: "file",
};
const anchorField = {
  label: "Anchor",
  name: "anchor",
  widget: "string",
};

const linkWidgetFields = [
  linkTextField,
  internalPageLinkField,
  newTabField,
  CssClassesField({}),
  UidField({}),
];

const internalPageLinkWidget = {
  label: "Internal Link (Page)",
  name: "internalPageLink",
  widget: "object",
  summary: "{{fields.linkText}} (Page)",
  fields: [
    linkTextField,
    internalPageLinkField,
    newTabField,
    CssClassesField({}),
    UidField({}),
  ],
};

const internalBlogLinkWidget = {
  label: "Internal Link (Blog Post)",
  name: "internalBlogLink",
  widget: "object",
  summary: "{{fields.linkText}} (Blog Post)",
  fields: [
    linkTextField,
    internalBlogLinkField,
    newTabField,
    CssClassesField({}),
    UidField({}),
  ],
};
const externalLinkWidget = {
  label: "External Link",
  name: "externalLink",
  widget: "object",
  summary: "{{fields.linkText}} (external Link)",
  fields: [
    linkTextField,
    externalLinkField,
    newTabField_true,
    CssClassesField({}),
    UidField({}),
  ],
};
const fileLinkWidget = {
  label: "File Link",
  name: "fileLink",
  widget: "object",
  summary: "{{fields.linkText}} (File)",
  fields: [
    linkTextField,
    fileLinkField,
    newTabField_true,
    CssClassesField({}),
    UidField({}),
  ],
};
const linkListField = {
  label: "Links",
  label_singular: "Link",
  name: "links",
  widget: "list",
  collapsed: true,
  types: [
    internalPageLinkWidget,
    internalBlogLinkWidget,
    externalLinkWidget,
    fileLinkWidget,
  ],
};

const listItemWidget = {
  label: "List Item",
  name: "listItem",
  widget: "object",
  summary: "{{fields.name}}",
  fields: [
    NameField({ widgetName: "List Item", label: "List Item Text" }),
    CssClassesField({}),
    UidField({}),
  ],
};
const listField = {
  label: "List Items",
  label_singular: "List Item",
  name: "listItems",
  widget: "list",
  collapsed: true,
  types: [listItemWidget],
};

const cardWidget = {
  label: "Card",
  name: "card",
  widget: "object",
  summary: "{{fields.name}}",
  fields: [
    NameField({ widgetName: "Card" }),
    CssClassesField({}),
    UidField({}),
  ],
};
const cardsField = {
  label: "Cards",
  label_singular: "Card",
  name: "cards",
  widget: "list",
  collapsed: true,
  types: [cardWidget],
};

const pageSettingsWidget = {
  label: "Page Settings",
  name: "settings",
  widget: "object",
  collapsed: true,
  fields: [
    {
      label: "meta-description",
      name: "metaDescription",
      widget: "string",
      required: false,
    },
    {
      label: "meta-keywords",
      name: "metaKeywords",
      widget: "string",
      required: false,
    },
    {
      label: "show-in-search",
      name: "showInSearch",
      widget: "boolean",
      required: false,
      default: true,
    },
  ],
};
const containerStyleField = {
  label: "Container Style",
  name: "containerStyle",
  required: true,
  widget: "select",
  default: "container",
  options: [
    { label: "none", value: "no-container" },
    { label: "Container", value: "container" },
    { label: "Fluid Container", value: "container-fluid" },
    { label: "Fluid until SM breakpoint", value: "container-sm" },
    { label: "Fluid until MD breakpoint", value: "container-md" },
    { label: "Fluid until LG breakpoint", value: "container-lg" },
    { label: "Fluid until XL breakpoint", value: "container-xl" },
  ],
};
const heightField = {
  label: "Height",
  name: "height",
  required: false,
  widget: "object",
  collapsed: true,
  fields: [
    {
      label: "Height XS and up",
      name: "height-xs-and-up",
      required: false,
      hint: "for example '8rem'",
      widget: "string",
    },
    {
      label: "Height SM and up",
      name: "height-sm-and-up",
      required: false,
      widget: "string",
    },
    {
      label: "Height MD and up",
      name: "height-md-and-up",
      required: false,
      widget: "string",
    },
    {
      label: "Height LG and up",
      name: "height-lg-and-up",
      required: false,
      widget: "string",
    },
    {
      label: "Height XL and up",
      name: "height-xl-and-up",
      required: false,
      widget: "string",
    },
  ],
};

const advanced = {
  label: "Advanced",
  name: "advanced",
  widget: "object",
  collapsed: true,
  fields: [
    {
      label: "meta-description",
      name: "metaDescription",
      widget: "string",
      required: false,
    },
    {
      label: "meta-keywords",
      name: "metaKeywords",
      widget: "string",
      required: false,
    },
    {
      label: "show-in-search",
      name: "showInSearch",
      widget: "boolean",
      required: false,
      default: true,
    },
    heightField,
  ],
};

const headingTypeField = {
  label: "Heading Type",
  name: "headingType",
  widget: "select",
  default: "h1",
  options: [
    { label: "Heading 1", value: "h1" },
    { label: "Heading 2", value: "h2" },
    { label: "Heading 3", value: "h3" },
    { label: "Heading 4", value: "h4" },
    { label: "Heading 5", value: "h5" },
    { label: "Heading 6", value: "h6" },
    { label: "Paragraph", value: "p" },
    { label: "none", value: "span" },
  ],
};
//
//

///////// moduleField ////////////

const moduleField = {
  label: "Module",
  name: "module",
  required: false,
  widget: "relation",
  collection: "settings",
  valueField: "superClasses.*.title",
  searchFields: ["superClasses.*.title"],
};

////////// RICHTEXT WIDGET ///////////

const RichTextWidget = function (options) {
  const label = options.label || "Rich Text";
  const defaultWrapperCssClasses = options.defaultWrapperCssClasses || [];
  const fields = [markdownField];
  const obj = {
    label: label,
    name: "richText",
    widget: "object",
    summary: "{{fields.markdown}}",
    fields: fields,
  };
  return obj;
};

////////// CUSTOM HTML WIDGET ///////////

const CustomHtmlWidget = function (options) {
  const label = options.label || "HTML Code";
  const defaultWrapperCssClasses = options.defaultWrapperCssClasses || [];
  const fields = [
    NameField({ widgetName: "Custom HTML" }),
    {
      label: "Custom HTML Code",
      name: "code",
      widget: "code",
      output_code_only: true,
      allow_language_selection: false,
      default_language: "html",
    },
  ];
  const obj = {
    label: label,
    name: "customHtml",
    widget: "object",
    summary: "{{fields.name}}",
    fields: fields,
  };
  return obj;
};

var blockTypes = [
  {
    label: "Rich Text",
    name: "richText",
    widget: "object",
    summary: "{{fields.markdown}}",
    fields: [
      {
        label: "Text",
        name: "markdown",
        widget: "markdown",
      },
      {
        label: "Bilder",
        label_singular: "Bild",
        name: "images",
        widget: "list",
        hint:
          "Optionale Bilderleiste links neben dem Text (wird nur auf größeren Bildschirmen angezeigt)",
        fields: [
          {
            label: "Bild",
            name: "image",
            widget: "image",
            required: false,
          },
        ],
      },
    ],
  },

  {
    label: "Farbige Überschrift + Text",
    name: "headingWithText",
    widget: "object",
    summary: "{{fields.heading}}",
    fields: [
      {
        label: "Überschrift",
        name: "heading",
        widget: "string",
        default: "Überschrift",
      },
      {
        label: "Farbe",
        name: "color",
        widget: "select",
        required: false,
        options: [
          { label: "schwarz", value: "#000" },
          { label: "orange", value: "#e77b0b" },
          { label: "blau", value: "#066b93" },
          { label: "rot (Wohngruppen)", value: "#d44e39" },
          { label: "grün (Förderschule)", value: "#91b353" },
          { label: "violett (Therapie)", value: "#7c6fb0" },
          { label: "türkis (Tiergestützte Pädagogik)", value: "#18a092" },
        ],
      },
      {
        label: "Text",
        name: "markdown",
        required: false,
        widget: "markdown",
      },
    ],
  },

  {
    label: "Infobox",
    name: "infobox",
    widget: "object",
    summary: "{{fields.markdown}}",
    fields: [
      {
        label: "Text",
        name: "markdown",
        widget: "markdown",
        default: "Infobox Text",
      },
      {
        label: "Farbe",
        name: "color",
        widget: "select",
        default: "#e77b0b",
        required: false,
        options: [
          { label: "schwarz", value: "#000" },
          { label: "orange", value: "#e77b0b" },
          { label: "blau", value: "#066b93" },
          { label: "rot", value: "#d44e39" },
          { label: "grün", value: "#91b353" },
          { label: "violett", value: "#7c6fb0" },
          { label: "türkis", value: "#18a092" },
        ],
      },
    ],
  },

  {
    label: "Absatz",
    name: "text",
    widget: "object",
    summary: "{{fields.text}}",
    fields: [{ label: "Text", name: "text", widget: "text", default: "Text" }],
  },
  {
    label: "Button (Link)",
    name: "linkButton",
    widget: "object",
    summary: "{{fields.text}}",
    fields: [
      {
        label: "Button (Link) Text",
        name: "text",
        widget: "string",
        default: "Text",
      },
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
        label: "Farbe",
        name: "color",
        widget: "select",
        required: false,
        options: [
          { label: "schwarz", value: "#000" },
          { label: "orange", value: "#e77b0b" },
          { label: "blau", value: "#066b93" },
          { label: "rot (Wohngruppen)", value: "#d44e39" },
          { label: "grün (Förderschule)", value: "#91b353" },
          { label: "violett (Therapie)", value: "#7c6fb0" },
          { label: "türkis (Tiergestützte Pädagogik)", value: "#18a092" },
        ],
      },
    ],
  },
  {
    label: "Button (Datei)",
    name: "fileButton",
    widget: "object",
    summary: "{{fields.text}}",
    fields: [
      {
        label: "Button (Datei) Text",
        name: "text",
        widget: "string",
        default: "Text",
      },
      {
        label: "Datei",
        name: "file",
        widget: "file",
      },
      {
        label: "Farbe",
        name: "color",
        widget: "select",
        required: false,
        options: [
          { label: "schwarz", value: "#000" },
          { label: "orange", value: "#e77b0b" },
          { label: "blau", value: "#066b93" },
          { label: "rot (Wohngruppen)", value: "#d44e39" },
          { label: "grün (Förderschule)", value: "#91b353" },
          { label: "violett (Therapie)", value: "#7c6fb0" },
          { label: "türkis (Tiergestützte Pädagogik)", value: "#18a092" },
        ],
      },
    ],
  },

  CustomHtmlWidget({}),
];

const BlocksField = function (options) {
  const label = options.label || "Blocks";
  const label_singular = options.label_singular || "Block";
  const defaultBlocks = options.defaultBlocks || [];
  const types = options.types || blockTypes;
  const obj = {
    label: label,
    label_singular: label_singular,
    name: "blocks",
    widget: "list",
    collapsed: true,
    types: types,
  };
  return obj;
};

export const moduleBlocksField = BlocksField({
  types: blockTypes,
  label: "Content Blocks",
});

export const pageBlocksField = BlocksField({
  types: blockTypes,
  label: "Blocks",
});
