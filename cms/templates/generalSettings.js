import React from "react";
import arraysEqual from "../helpers/arraysEqual.js";
import cleanFont from "../helpers/cleanFont.js";

const WebFontLoader = require("webfontloader");

const generalSettings = ({ entry, getAsset, fieldsMetaData }) => {
  const data = entry.get("data").toJS();
  const themeData = fieldsMetaData.getIn(["theme", "themes", data.theme]);
  const theme = themeData ? themeData.toJS() : [];

  console.log(fieldsMetaData);

  const [fonts, setFonts] = React.useState([]);

  const selectedFonts = [
    theme.typography && theme.typography.base_font,
    theme.typography && theme.typography.headings_font,
  ];
  const filteredFonts = selectedFonts.filter(function (element) {
    return !!element;
  });
  const googleFonts = filteredFonts.filter((font) =>
    font.startsWith("Google Font / ")
  );

  const strippedGoogleFonts = googleFonts.map((s) => s.slice(14));
  const uniq = [...new Set(strippedGoogleFonts.sort())];
  const uniqWithWeightsHack = uniq.map((i) => i + ":200,300,400,500,700");

  const same = arraysEqual(fonts, uniqWithWeightsHack);

  if (same === false && uniqWithWeightsHack.length) {
    setFonts((fonts) => uniqWithWeightsHack);
    WebFontLoader.load({
      timeout: 3000,
      classes: false,
      context: window.frames[1].frameElement.contentWindow,
      google: {
        families: uniqWithWeightsHack,
      },
      // fontactive: function (familyName, fvd) {},
    });
  }

  const defaultFont =
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

  const base_font =
    theme.typography && theme.typography.base_font
      ? cleanFont(theme.typography.base_font)
      : defaultFont;
  const headings_font =
    theme.typography && theme.typography.headings_font
      ? cleanFont(theme.typography.headings_font)
      : base_font;

  const paragraphMarginBottom =
    theme.typography && theme.typography["paragraph-margin-bottom"]
      ? theme.typography["paragraph-margin-bottom"]
      : 1;
  const lineHeightBase =
    theme.typography && theme.typography["line-height-base"]
      ? theme.typography["line-height-base"]
      : 1.5;
  const fontFamilySansSerif =
    theme.typography && theme.typography["font-family-sans-serif"]
      ? theme.typography["font-family-sans-serif"]
      : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  const monospaceFontFamily =
    theme.typography && theme.typography["monospace_font-family"]
      ? theme.typography["monospace_font-family"]
      : 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  const fontSizeBase =
    theme.typography && theme.typography["font-size-base"]
      ? theme.typography["font-size-base"]
      : "1";
  const fontSizeLg =
    theme.typography && theme.typography["font-size-lg"]
      ? theme.typography["font-size-lg"]
      : fontSizeBase * 1.25;
  const fontSizeSm =
    theme.typography && theme.typography["font-size-sm"]
      ? theme.typography["font-size-sm"]
      : fontSizeBase * 0.875;
  const fontWeightLighter =
    theme.typography && theme.typography["font-weight-lighter"]
      ? theme.typography["font-weight-lighter"]
      : "lighter";
  const fontWeightLight =
    theme.typography && theme.typography["font-weight-light"]
      ? theme.typography["font-weight-light"]
      : 300;
  const fontWeightNormal =
    theme.typography && theme.typography["font-weight-normal"]
      ? theme.typography["font-weight-normal"]
      : 400;
  const fontWeightBold =
    theme.typography && theme.typography["font-weight-bold"]
      ? theme.typography["font-weight-bold"]
      : 700;
  const fontWeightBolder =
    theme.typography && theme.typography["font-weight-bolder"]
      ? theme.typography["font-weight-bolder"]
      : "bolder";
  const fontWeightBase =
    theme.typography && theme.typography["font-weight-base"]
      ? theme.typography["font-weight-base"]
      : fontWeightNormal;
  const h1FontSize =
    theme.typography && theme.typography["h1-font-size"]
      ? fontSizeBase * theme.typography["h1-font-size"]
      : fontSizeBase * 2.5;
  const h2FontSize =
    theme.typography && theme.typography["h2-font-size"]
      ? fontSizeBase * theme.typography["h2-font-size"]
      : fontSizeBase * 2;
  const h3FontSize =
    theme.typography && theme.typography["h3-font-size"]
      ? fontSizeBase * theme.typography["h3-font-size"]
      : fontSizeBase * 1.75;
  const h4FontSize =
    theme.typography && theme.typography["h4-font-size"]
      ? fontSizeBase * theme.typography["h4-font-size"]
      : fontSizeBase * 1.5;
  const h5FontSize =
    theme.typography && theme.typography["h5-font-size"]
      ? fontSizeBase * theme.typography["h5-font-size"]
      : fontSizeBase * 1.25;
  const h6FontSize =
    theme.typography && theme.typography["h6-font-size"]
      ? fontSizeBase * theme.typography["h6-font-size"]
      : fontSizeBase;
  const headingsMarginBottom =
    theme.typography && theme.typography["headings-margin-bottom"]
      ? theme.typography["headings-margin-bottom"]
      : null; //$spacer / 2
  const headingsFontWeight =
    theme.typography && theme.typography["headings-font-weight"]
      ? theme.typography["headings-font-weight"]
      : 500;
  const headingsLineHeight =
    theme.typography && theme.typography["headings-line-height"]
      ? theme.typography["headings-line-height"]
      : 1.2;
  const headingsColor =
    theme.typography && theme.typography["headings-color"]
      ? theme.typography["headings-color"]
      : theme.color && theme.color.bodyColor
      ? theme.color.bodyColor
      : "#212529";
  const display1Size =
    theme.typography && theme.typography["display1-size"]
      ? theme.typography["display1-size"]
      : 6;
  const display2Size =
    theme.typography && theme.typography["display2-size"]
      ? theme.typography["display2-size"]
      : 5.5;
  const display3Size =
    theme.typography && theme.typography["display3-size"]
      ? theme.typography["display3-size"]
      : 4.5;
  const display4Size =
    theme.typography && theme.typography["display4-size"]
      ? theme.typography["display4-size"]
      : 3.5;
  const display1Weight =
    theme.typography && theme.typography["display1-weight"]
      ? theme.typography["display1-weight"]
      : 300;
  const display2Weight =
    theme.typography && theme.typography["display2-weight"]
      ? theme.typography["display2-weight"]
      : 300;
  const display3Weight =
    theme.typography && theme.typography["display3-weight"]
      ? theme.typography["display3-weight"]
      : 300;
  const display4Weight =
    theme.typography && theme.typography["display4-weight"]
      ? theme.typography["display4-weight"]
      : 300;
  const displayLineHeight =
    theme.typography && theme.typography["display-line-height"]
      ? theme.typography["display-line-height"]
      : headingsLineHeight;
  const leadFontSize =
    theme.typography && theme.typography["lead-font-size"]
      ? theme.typography["lead-font-size"]
      : fontSizeBase * 1.25;
  const leadFontWeight =
    theme.typography && theme.typography["lead-font-weight"]
      ? theme.typography["lead-font-weight"]
      : 300;
  const smallFontSize =
    theme.typography && theme.typography["small-font-size"]
      ? theme.typography["small-font-size"]
      : 80;
  const textMuted =
    theme.typography && theme.typography["text-muted"]
      ? theme.typography["text-muted"]
      : null; // $gray-600
  const blockquoteSmallColor =
    theme.typography && theme.typography["blockquote-small-color"]
      ? theme.typography["blockquote-small-color"]
      : null; // $gray-600
  const blockquoteSmallFontSize =
    theme.typography && theme.typography["blockquote-small-font-size"]
      ? theme.typography["blockquote-small-font-size"]
      : smallFontSize;
  const blockquoteFontSize =
    theme.typography && theme.typography["blockquote-font-size"]
      ? theme.typography["blockquote-font-size"]
      : fontSizeBase * 1.25;
  const hrBorderColor =
    theme.typography && theme.typography["hr-border-color"]
      ? theme.typography["hr-border-color"]
      : null; // rgba($black, .1)
  const hrBorderWidth =
    theme.typography && theme.typography["hr-border-width"]
      ? theme.typography["hr-border-width"]
      : 0; //$border-width
  const markPadding =
    theme.typography && theme.typography["mark-padding"]
      ? theme.typography["mark-padding"]
      : 0.2; //em;!!!!
  const dtFontWeight =
    theme.typography && theme.typography["dt-font-weight"]
      ? theme.typography["dt-font-weight"]
      : fontWeightBold;
  const kbdBoxShadow =
    theme.typography && theme.typography["kbd-box-shadow"]
      ? theme.typography["kbd-box-shadow"]
      : null; //inset 0 -.1rem 0 rgba($black, .25);
  const nestedKbdFontWeight =
    theme.typography && theme.typography["nested-kbd-font-weight"]
      ? theme.typography["nested-kbd-font-weight"]
      : fontWeightBold;
  const listInlinePadding =
    theme.typography && theme.typography["list-inline-padding"]
      ? theme.typography["list-inline-padding"]
      : 0.5; //rem;
  const markBg =
    theme.typography && theme.typography["mark-bg"]
      ? theme.typography["mark-bg"]
      : "#fcf8e3";
  const hrMarginY =
    theme.typography && theme.typography["hr-margin-y"]
      ? theme.typography["hr-margin-y"]
      : 1; //$spacer;

  const spacer =
    theme.spacing && theme.spacing.spacer ? theme.spacing.spacer : 1; //rem;

  const spacer1 =
    theme.spacing && theme.spacing["spacer1Ratio"]
      ? theme.spacing["spacer1Ratio"] * spacer + "rem"
      : 0.25 * spacer + "rem";

  const spacer2 =
    theme.spacing && theme.spacing["spacer2Ratio"]
      ? theme.spacing["spacer2Ratio"] * spacer + "rem"
      : 0.5 * spacer + "rem";

  const spacer3 =
    theme.spacing && theme.spacing["spacer3Ratio"]
      ? theme.spacing["spacer3Ratio"] * spacer + "rem"
      : 1 * spacer + "rem";

  const spacer4 =
    theme.spacing && theme.spacing["spacer4Ratio"]
      ? theme.spacing["spacer4Ratio"] * spacer + "rem"
      : 1.5 * spacer + "rem";
  const spacer5 =
    theme.spacing && theme.spacing["spacer5Ratio"]
      ? theme.spacing["spacer5Ratio"] * spacer + "rem"
      : 3 * spacer + "rem";

  const borderRadius =
    theme.components && theme.components["border-radius"]
      ? theme.components["border-radius"] + "rem"
      : 0.25 + "rem";
  const borderRadiusLg =
    theme.components && theme.components["border-radius-lg"]
      ? theme.components["border-radius-lg"] + "rem"
      : 0.3 + "rem";
  const borderRadiusSm =
    theme.components && theme.components["border-radius-sm"]
      ? theme.components["border-radius-sm"] + "rem"
      : 0.2 + "rem";

  const btnBorderRadius =
    theme["global-styling-options"] &&
    theme["global-styling-options"]["enable-rounded"]
      ? theme.buttons && theme.buttons["btn-border-radius"]
        ? theme.buttons["btn-border-radius"]
        : borderRadius
      : 0;
  const btnBorderRadiusLg =
    theme["global-styling-options"] &&
    theme["global-styling-options"]["enable-rounded"]
      ? theme.buttons && theme.buttons["btn-border-radius-lg"]
        ? theme.buttons["btn-border-radius-lg"]
        : borderRadiusLg
      : 0;
  const btnBorderRadiusSm =
    theme["global-styling-options"] &&
    theme["global-styling-options"]["enable-rounded"]
      ? theme.buttons && theme.buttons["btn-border-radius-sm"]
        ? theme.buttons["btn-border-radius-sm"]
        : borderRadiusSm
      : 0;

  const cardBorderRadius =
    theme["global-styling-options"] &&
    theme["global-styling-options"]["enable-rounded"]
      ? theme.cards && theme.cards["card-border-radius"]
        ? theme.cards["card-border-radius"]
        : borderRadius
      : 0;

  const gray900 =
    theme.color && theme.color.gray_900 ? theme.color.gray_900 : "#212529";
  const white = theme.color && theme.color.white ? theme.color.white : "#fff";

  const YiqContrastedThreshold =
    theme["color-contrast"] &&
    theme["color-contrast"]["yiq-contrasted-threshold"]
      ? theme["color-contrast"]["yiq-contrasted-threshold"]
      : 150;
  const YiqTextDark =
    theme["color-contrast"] && theme["color-contrast"]["yiq-text-dark"]
      ? theme["color-contrast"]["yiq-text-dark"]
      : gray900;
  const YiqTextLight =
    theme["color-contrast"] && theme["color-contrast"]["yiq-text-light"]
      ? theme["color-contrast"]["yiq-text-light"]
      : white;

  function colorYiq(bgColor) {
    var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16);
    var g = parseInt(color.substring(2, 4), 16);
    var b = parseInt(color.substring(4, 6), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > YiqContrastedThreshold
      ? YiqTextDark
      : YiqTextLight;
  }

  const [linkState, setLink] = React.useState([]);

  var link = document.createElement("link");
  link.href = "purestyle.css";
  link.type = "text/css";
  link.rel = "stylesheet";

  const sameLink = arraysEqual(linkState, link);

  if (sameLink === false) {
    setLink((linkState) => link);
    window.frames[1].frameElement.contentWindow.document.head.append(link);
  }

  return (
    <div className="container-md px-5">
      <div className="row">
        {themeData ? (
          <div className="col-12">
            <div
              className={"row border py-4 mt-5 shadow-lg"}
              style={{ backgroundColor: theme.color.bodyBg }}
            >
              <div className={"col-12"}>
                <div>
                  <h3
                    style={{
                      fontSize: h3FontSize + "rem",
                      fontFamily: headings_font,
                      color: headingsColor,
                      marginBottom: headingsMarginBottom + "rem",
                      fontWeight: headingsFontWeight,
                      lineHeight: headingsLineHeight,
                    }}
                  >
                    Theme:{" "}
                    <span className="font-weight-bold">{theme.title}</span>
                  </h3>
                  <p
                    style={{
                      fontSize: fontSizeBase + "rem",
                      fontFamily: base_font,
                      color: theme.color.bodyColor,
                      marginBottom: paragraphMarginBottom + "rem",
                      lineHeight: lineHeightBase,
                    }}
                  >
                    Base Font:{" "}
                    <span className="font-weight-bold">
                      {theme.typography.base_font}
                    </span>
                    <br />
                    Headings Font:{" "}
                    <span className="font-weight-bold">
                      {theme.typography.headings_font}
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-4 col-lg">
                <div
                  className="card mb-4 w-100"
                  style={{
                    borderRadius: cardBorderRadius,
                    backgroundColor: theme.color.primary,
                    color: colorYiq(theme.color.primary),
                  }}
                >
                  <div className="card-header">Primary</div>
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{
                        fontSize: fontSizeBase + "rem",
                        fontFamily: base_font,
                        lineHeight: lineHeightBase,
                      }}
                    >
                      {theme.color.primary}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg">
                <div
                  className="card mb-4 w-100"
                  style={{
                    borderRadius: cardBorderRadius,
                    backgroundColor: theme.color.secondary,
                    color: colorYiq(theme.color.secondary),
                  }}
                >
                  <div className="card-header">Secondary</div>
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{
                        fontSize: fontSizeBase + "rem",
                        fontFamily: base_font,
                        lineHeight: lineHeightBase,
                      }}
                    >
                      {theme.color.secondary}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg">
                <div
                  className="card mb-4 w-100"
                  style={{
                    borderRadius: cardBorderRadius,
                    backgroundColor: theme.color.accent,
                    color: colorYiq(theme.color.accent),
                  }}
                >
                  <div className="card-header">Accent</div>
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{
                        fontSize: fontSizeBase + "rem",
                        fontFamily: base_font,
                        lineHeight: lineHeightBase,
                      }}
                    >
                      {theme.color.accent}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg offset-2 offset-lg-0">
                <div
                  className="card mb-4 w-100"
                  style={{
                    borderRadius: cardBorderRadius,
                    backgroundColor: theme.color.light,
                    color: colorYiq(theme.color.light),
                  }}
                >
                  <div className="card-header">Light</div>
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{
                        fontSize: fontSizeBase + "rem",
                        fontFamily: base_font,
                        lineHeight: lineHeightBase,
                      }}
                    >
                      {theme.color.light}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg">
                <div
                  className="card mb-4 w-100"
                  style={{
                    borderRadius: cardBorderRadius,
                    backgroundColor: theme.color.dark,
                    color: colorYiq(theme.color.dark),
                  }}
                >
                  <div className="card-header">Dark</div>
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{
                        fontSize: fontSizeBase + "rem",
                        fontFamily: base_font,
                        lineHeight: lineHeightBase,
                      }}
                    >
                      {theme.color.dark}
                    </p>
                  </div>
                </div>
              </div>

              <div className={"col-12 pt-3"}>
                <h1
                  style={{
                    fontSize: h1FontSize + "rem",
                    fontFamily: headings_font,
                    color: headingsColor,
                    marginBottom: headingsMarginBottom + "rem",
                    fontWeight: headingsFontWeight,
                    lineHeight: headingsLineHeight,
                  }}
                >
                  {data.sitetitle}
                </h1>
                <p
                  style={{
                    fontSize: fontSizeBase + "rem",
                    fontFamily: base_font,
                    color: theme.color.bodyColor,
                    marginBottom: paragraphMarginBottom + "rem",
                    lineHeight: lineHeightBase,
                  }}
                >
                  {" "}
                  {data.tagline}
                </p>{" "}
                <p
                  style={{
                    fontSize: fontSizeBase + "rem",
                    fontFamily: base_font,
                    color: theme.color.bodyColor,
                    marginBottom: paragraphMarginBottom + "rem",
                    lineHeight: lineHeightBase,
                  }}
                >
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className={"col-12 pt-3"}>
                <div className="mb-4">
                  <button
                    type="button"
                    className="btn btn-sm"
                    style={{
                      marginRight: spacer3,
                      borderRadius: btnBorderRadiusSm,
                      backgroundColor: theme.color.primary,
                      color: colorYiq(theme.color.primary),
                    }}
                  >
                    Small Button
                  </button>

                  <button
                    type="button"
                    className="btn"
                    style={{
                      marginRight: spacer3,
                      borderRadius: btnBorderRadius,
                      backgroundColor: theme.color.primary,
                      color: colorYiq(theme.color.primary),
                    }}
                  >
                    Default Button
                  </button>

                  <button
                    type="button"
                    className="btn btn-lg"
                    style={{
                      borderRadius: btnBorderRadiusLg,
                      backgroundColor: theme.color.primary,
                      color: colorYiq(theme.color.primary),
                    }}
                  >
                    Large Button
                  </button>
                </div>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: spacer3,
                    marginBottom: spacer3,
                    borderRadius: btnBorderRadius,
                    backgroundColor: theme.color.primary,
                    color: colorYiq(theme.color.primary),
                  }}
                >
                  Primary Button
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: spacer3,
                    marginBottom: spacer3,
                    borderRadius: btnBorderRadius,
                    backgroundColor: theme.color.secondary,
                    color: colorYiq(theme.color.secondary),
                  }}
                >
                  Secondary Button
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: spacer3,
                    marginBottom: spacer3,
                    borderRadius: btnBorderRadius,
                    backgroundColor: theme.color.accent,
                    color: colorYiq(theme.color.accent),
                  }}
                >
                  Accent Button
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: spacer3,
                    marginBottom: spacer3,
                    borderRadius: btnBorderRadius,
                    backgroundColor: theme.color.light,
                    color: colorYiq(theme.color.light),
                  }}
                >
                  Light Button
                </button>

                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: spacer3,
                    marginBottom: spacer3,
                    borderRadius: btnBorderRadius,
                    backgroundColor: theme.color.dark,
                    color: colorYiq(theme.color.dark),
                  }}
                >
                  Dark Button
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: spacer3,
                    marginBottom: spacer3,
                    borderRadius: btnBorderRadius,
                    backgroundColor: theme.color.success,
                    color: colorYiq(theme.color.success),
                  }}
                >
                  Success Button
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: spacer3,
                    marginBottom: spacer3,
                    borderRadius: btnBorderRadius,
                    backgroundColor: theme.color.warning,
                    color: colorYiq(theme.color.warning),
                  }}
                >
                  Warning Button
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: spacer3,
                    marginBottom: spacer3,
                    borderRadius: btnBorderRadius,
                    backgroundColor: theme.color.danger,
                    color: colorYiq(theme.color.danger),
                  }}
                >
                  Danger Button
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    marginRight: spacer3,
                    marginBottom: spacer3,
                    borderRadius: btnBorderRadius,
                    backgroundColor: theme.color.info,
                    color: colorYiq(theme.color.info),
                  }}
                >
                  Info Button
                </button>
              </div>
            </div>
            <div className="text-right pt-4 px-2">
              <a
                className="btn btn-primary"
                href={`#/collections/themes/entries/${theme.uid.toLowerCase()}`}
              >
                Edit Theme "{theme.title}"
              </a>
            </div>
          </div>
        ) : (
          <div>loading theme</div>
        )}
      </div>
      <div className="row">
        <div className="col-12 pt-3">
          <h4>Site Variables</h4>

          <p>
            Site variables are available in your layouts, pages, posts and
            modules by writing them in double curly brackets. Only enter data to
            the fields on the left that should be available to the public -
            otherwise, just leave them empty.
          </p>
        </div>
        <div className="col-auto">
          {"{{ sitetitle }}"}
          <br />
          {"{{ tagline }}"}
          <br />
          {"{{ siteowner }}"}
          <br />
          {"{{ email }}"}
          <br />
          {"{{ phone }}"}
          <br />
          {"{{ address1 }}"}
          <br />
          {"{{ address2 }}"}
          <br />
          {"{{ address3 }}"}
          <br />
          {"{{ address4 }}"}
          <br />
          {"{{ website }}"}
          <br />
          {"{{ github }}"}
          <br />
          {"{{ twitter }}"}
          <br />
          {"{{ facebook }}"}
          <br />
          {"{{ instagram }}"}
          <br />
          {"{{ year }}"}
        </div>
        <div className="col-auto">
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
          <br />
          {">"}
        </div>
        <div className="col-auto font-weight-bold text-success">
          {data.sitetitle ? (
            data.sitetitle
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.tagline ? (
            data.tagline
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.siteowner ? (
            data.siteowner
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.email ? (
            data.email
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.phone ? (
            data.phone
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.address1 ? (
            data.address1
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.address2 ? (
            data.address2
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.address3 ? (
            data.address3
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.address4 ? (
            data.address4
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.website ? (
            data.website
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.github ? (
            data.github
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.twitter ? (
            data.twitter
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.facebook ? (
            data.facebook
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {data.instagram ? (
            data.instagram
          ) : (
            <span className="text-warning">not set</span>
          )}
          <br />
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default generalSettings;
