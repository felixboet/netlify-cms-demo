import React from "react";
import arraysEqual from "../helpers/arraysEqual.js";
import cleanFont from "../helpers/cleanFont.js";
const WebFontLoader = require("webfontloader");

//    theme_interval
//    yiq_contrasted_threshold

const Theme = ({ entry }) => {
  const frontmatter = entry.get("data").toJS();
  const [fonts, setFonts] = React.useState([]);
  const selectedFonts = [
    frontmatter.typography && frontmatter.typography.base_font,
    frontmatter.typography && frontmatter.typography.headings_font,
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

  // load purestyle once ... how to do this better? also in the other preview templates
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

  const defaultFont =
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

  const base_font =
    frontmatter.typography && frontmatter.typography.base_font
      ? cleanFont(frontmatter.typography.base_font)
      : defaultFont;
  const headings_font =
    frontmatter.typography && frontmatter.typography.headings_font
      ? cleanFont(frontmatter.typography.headings_font)
      : base_font;

  const gray900 =
    frontmatter.color && frontmatter.color.gray_900
      ? frontmatter.color.gray_900
      : "#212529";
  const white =
    frontmatter.color && frontmatter.color.white
      ? frontmatter.color.white
      : "#fff";
  const primary =
    frontmatter.color && frontmatter.color.primary
      ? frontmatter.color.primary
      : "#707c8d";
  const secondary =
    frontmatter.color && frontmatter.color.secondary
      ? frontmatter.color.secondary
      : "#b1bfc5";
  const accent =
    frontmatter.color && frontmatter.color.accent
      ? frontmatter.color.accent
      : "#20b9bd";
  const light =
    frontmatter.color && frontmatter.color.light
      ? frontmatter.color.light
      : "#e7eaee";
  const dark =
    frontmatter.color && frontmatter.color.dark
      ? frontmatter.color.dark
      : "#3b4146";
  const bodyColor =
    frontmatter.color && frontmatter.color.bodyColor
      ? frontmatter.color.bodyColor
      : "#212529";
  const bodyBg =
    frontmatter.color && frontmatter.color.bodyBg
      ? frontmatter.color.bodyBg
      : "#fff";
  const info =
    frontmatter.color && frontmatter.color.info
      ? frontmatter.color.info
      : "#5977ad";
  const success =
    frontmatter.color && frontmatter.color.success
      ? frontmatter.color.success
      : "#75a86c";
  const warning =
    frontmatter.color && frontmatter.color.warning
      ? frontmatter.color.warning
      : "#ffc107";
  const danger =
    frontmatter.color && frontmatter.color.danger
      ? frontmatter.color.danger
      : "#e15241";

  const paragraphMarginBottom =
    frontmatter.typography && frontmatter.typography["paragraph-margin-bottom"]
      ? frontmatter.typography["paragraph-margin-bottom"]
      : 1;
  const lineHeightBase =
    frontmatter.typography && frontmatter.typography["line-height-base"]
      ? frontmatter.typography["line-height-base"]
      : 1.5;
  const fontFamilySansSerif =
    frontmatter.typography && frontmatter.typography["font-family-sans-serif"]
      ? frontmatter.typography["font-family-sans-serif"]
      : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  const monospaceFontFamily =
    frontmatter.typography && frontmatter.typography["monospace_font-family"]
      ? frontmatter.typography["monospace_font-family"]
      : 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  const fontSizeBase =
    frontmatter.typography && frontmatter.typography["font-size-base"]
      ? frontmatter.typography["font-size-base"]
      : "1";
  const fontSizeLg =
    frontmatter.typography && frontmatter.typography["font-size-lg"]
      ? frontmatter.typography["font-size-lg"]
      : fontSizeBase * 1.25;
  const fontSizeSm =
    frontmatter.typography && frontmatter.typography["font-size-sm"]
      ? frontmatter.typography["font-size-sm"]
      : fontSizeBase * 0.875;
  const fontWeightLighter =
    frontmatter.typography && frontmatter.typography["font-weight-lighter"]
      ? frontmatter.typography["font-weight-lighter"]
      : "lighter";
  const fontWeightLight =
    frontmatter.typography && frontmatter.typography["font-weight-light"]
      ? frontmatter.typography["font-weight-light"]
      : 300;
  const fontWeightNormal =
    frontmatter.typography && frontmatter.typography["font-weight-normal"]
      ? frontmatter.typography["font-weight-normal"]
      : 400;
  const fontWeightBold =
    frontmatter.typography && frontmatter.typography["font-weight-bold"]
      ? frontmatter.typography["font-weight-bold"]
      : 700;
  const fontWeightBolder =
    frontmatter.typography && frontmatter.typography["font-weight-bolder"]
      ? frontmatter.typography["font-weight-bolder"]
      : "bolder";
  const fontWeightBase =
    frontmatter.typography && frontmatter.typography["font-weight-base"]
      ? frontmatter.typography["font-weight-base"]
      : fontWeightNormal;
  const h1FontSize =
    frontmatter.typography && frontmatter.typography["h1-font-size"]
      ? fontSizeBase * frontmatter.typography["h1-font-size"]
      : fontSizeBase * 2.5;
  const h2FontSize =
    frontmatter.typography && frontmatter.typography["h2-font-size"]
      ? fontSizeBase * frontmatter.typography["h2-font-size"]
      : fontSizeBase * 2;
  const h3FontSize =
    frontmatter.typography && frontmatter.typography["h3-font-size"]
      ? fontSizeBase * frontmatter.typography["h3-font-size"]
      : fontSizeBase * 1.75;
  const h4FontSize =
    frontmatter.typography && frontmatter.typography["h4-font-size"]
      ? fontSizeBase * frontmatter.typography["h4-font-size"]
      : fontSizeBase * 1.5;
  const h5FontSize =
    frontmatter.typography && frontmatter.typography["h5-font-size"]
      ? fontSizeBase * frontmatter.typography["h5-font-size"]
      : fontSizeBase * 1.25;
  const h6FontSize =
    frontmatter.typography && frontmatter.typography["h6-font-size"]
      ? fontSizeBase * frontmatter.typography["h6-font-size"]
      : fontSizeBase;
  const headingsMarginBottom =
    frontmatter.typography && frontmatter.typography["headings-margin-bottom"]
      ? frontmatter.typography["headings-margin-bottom"]
      : null; //$spacer / 2
  const headingsFontWeight =
    frontmatter.typography && frontmatter.typography["headings-font-weight"]
      ? frontmatter.typography["headings-font-weight"]
      : 500;
  const headingsLineHeight =
    frontmatter.typography && frontmatter.typography["headings-line-height"]
      ? frontmatter.typography["headings-line-height"]
      : 1.2;
  const headingsColor =
    frontmatter.typography && frontmatter.typography["headings-color"]
      ? frontmatter.typography["headings-color"]
      : bodyColor;
  const display1Size =
    frontmatter.typography && frontmatter.typography["display1-size"]
      ? frontmatter.typography["display1-size"]
      : 6;
  const display2Size =
    frontmatter.typography && frontmatter.typography["display2-size"]
      ? frontmatter.typography["display2-size"]
      : 5.5;
  const display3Size =
    frontmatter.typography && frontmatter.typography["display3-size"]
      ? frontmatter.typography["display3-size"]
      : 4.5;
  const display4Size =
    frontmatter.typography && frontmatter.typography["display4-size"]
      ? frontmatter.typography["display4-size"]
      : 3.5;
  const display1Weight =
    frontmatter.typography && frontmatter.typography["display1-weight"]
      ? frontmatter.typography["display1-weight"]
      : 300;
  const display2Weight =
    frontmatter.typography && frontmatter.typography["display2-weight"]
      ? frontmatter.typography["display2-weight"]
      : 300;
  const display3Weight =
    frontmatter.typography && frontmatter.typography["display3-weight"]
      ? frontmatter.typography["display3-weight"]
      : 300;
  const display4Weight =
    frontmatter.typography && frontmatter.typography["display4-weight"]
      ? frontmatter.typography["display4-weight"]
      : 300;
  const displayLineHeight =
    frontmatter.typography && frontmatter.typography["display-line-height"]
      ? frontmatter.typography["display-line-height"]
      : headingsLineHeight;
  const leadFontSize =
    frontmatter.typography && frontmatter.typography["lead-font-size"]
      ? frontmatter.typography["lead-font-size"]
      : fontSizeBase * 1.25;
  const leadFontWeight =
    frontmatter.typography && frontmatter.typography["lead-font-weight"]
      ? frontmatter.typography["lead-font-weight"]
      : 300;
  const smallFontSize =
    frontmatter.typography && frontmatter.typography["small-font-size"]
      ? frontmatter.typography["small-font-size"]
      : 80;
  const textMuted =
    frontmatter.typography && frontmatter.typography["text-muted"]
      ? frontmatter.typography["text-muted"]
      : null; // $gray-600
  const blockquoteSmallColor =
    frontmatter.typography && frontmatter.typography["blockquote-small-color"]
      ? frontmatter.typography["blockquote-small-color"]
      : null; // $gray-600
  const blockquoteSmallFontSize =
    frontmatter.typography &&
    frontmatter.typography["blockquote-small-font-size"]
      ? frontmatter.typography["blockquote-small-font-size"]
      : smallFontSize;
  const blockquoteFontSize =
    frontmatter.typography && frontmatter.typography["blockquote-font-size"]
      ? frontmatter.typography["blockquote-font-size"]
      : fontSizeBase * 1.25;
  const hrBorderColor =
    frontmatter.typography && frontmatter.typography["hr-border-color"]
      ? frontmatter.typography["hr-border-color"]
      : null; // rgba($black, .1)
  const hrBorderWidth =
    frontmatter.typography && frontmatter.typography["hr-border-width"]
      ? frontmatter.typography["hr-border-width"]
      : 0; //$border-width
  const markPadding =
    frontmatter.typography && frontmatter.typography["mark-padding"]
      ? frontmatter.typography["mark-padding"]
      : 0.2; //em;!!!!
  const dtFontWeight =
    frontmatter.typography && frontmatter.typography["dt-font-weight"]
      ? frontmatter.typography["dt-font-weight"]
      : fontWeightBold;
  const kbdBoxShadow =
    frontmatter.typography && frontmatter.typography["kbd-box-shadow"]
      ? frontmatter.typography["kbd-box-shadow"]
      : null; //inset 0 -.1rem 0 rgba($black, .25);
  const nestedKbdFontWeight =
    frontmatter.typography && frontmatter.typography["nested-kbd-font-weight"]
      ? frontmatter.typography["nested-kbd-font-weight"]
      : fontWeightBold;
  const listInlinePadding =
    frontmatter.typography && frontmatter.typography["list-inline-padding"]
      ? frontmatter.typography["list-inline-padding"]
      : 0.5; //rem;
  const markBg =
    frontmatter.typography && frontmatter.typography["mark-bg"]
      ? frontmatter.typography["mark-bg"]
      : "#fcf8e3";
  const hrMarginY =
    frontmatter.typography && frontmatter.typography["hr-margin-y"]
      ? frontmatter.typography["hr-margin-y"]
      : 1; //$spacer;

  const spacer =
    frontmatter.spacing && frontmatter.spacing.spacer
      ? frontmatter.spacing.spacer
      : 1; //rem;

  const spacer1 =
    frontmatter.spacing && frontmatter.spacing["spacer1Ratio"]
      ? frontmatter.spacing["spacer1Ratio"] * spacer + "rem"
      : 0.25 * spacer + "rem";

  const spacer2 =
    frontmatter.spacing && frontmatter.spacing["spacer2Ratio"]
      ? frontmatter.spacing["spacer2Ratio"] * spacer + "rem"
      : 0.5 * spacer + "rem";

  const spacer3 =
    frontmatter.spacing && frontmatter.spacing["spacer3Ratio"]
      ? frontmatter.spacing["spacer3Ratio"] * spacer + "rem"
      : 1 * spacer + "rem";

  const spacer4 =
    frontmatter.spacing && frontmatter.spacing["spacer4Ratio"]
      ? frontmatter.spacing["spacer4Ratio"] * spacer + "rem"
      : 1.5 * spacer + "rem";
  const spacer5 =
    frontmatter.spacing && frontmatter.spacing["spacer5Ratio"]
      ? frontmatter.spacing["spacer5Ratio"] * spacer + "rem"
      : 3 * spacer + "rem";

  const borderRadius =
    frontmatter.components && frontmatter.components["border-radius"]
      ? frontmatter.components["border-radius"] + "rem"
      : 0.25 + "rem";
  const borderRadiusLg =
    frontmatter.components && frontmatter.components["border-radius-lg"]
      ? frontmatter.components["border-radius-lg"] + "rem"
      : 0.3 + "rem";
  const borderRadiusSm =
    frontmatter.components && frontmatter.components["border-radius-sm"]
      ? frontmatter.components["border-radius-sm"] + "rem"
      : 0.2 + "rem";

  const btnBorderRadius =
    frontmatter["global-styling-options"] &&
    frontmatter["global-styling-options"]["enable-rounded"]
      ? frontmatter.buttons && frontmatter.buttons["btn-border-radius"]
        ? frontmatter.buttons["btn-border-radius"]
        : borderRadius
      : 0;
  const btnBorderRadiusLg =
    frontmatter["global-styling-options"] &&
    frontmatter["global-styling-options"]["enable-rounded"]
      ? frontmatter.buttons && frontmatter.buttons["btn-border-radius-lg"]
        ? frontmatter.buttons["btn-border-radius-lg"]
        : borderRadiusLg
      : 0;
  const btnBorderRadiusSm =
    frontmatter["global-styling-options"] &&
    frontmatter["global-styling-options"]["enable-rounded"]
      ? frontmatter.buttons && frontmatter.buttons["btn-border-radius-sm"]
        ? frontmatter.buttons["btn-border-radius-sm"]
        : borderRadiusSm
      : 0;

  const cardBorderRadius =
    frontmatter["global-styling-options"] &&
    frontmatter["global-styling-options"]["enable-rounded"]
      ? frontmatter.cards && frontmatter.cards["card-border-radius"]
        ? frontmatter.cards["card-border-radius"]
        : borderRadius
      : 0;

  const YiqContrastedThreshold =
    frontmatter["color-contrast"] &&
    frontmatter["color-contrast"]["yiq-contrasted-threshold"]
      ? frontmatter["color-contrast"]["yiq-contrasted-threshold"]
      : 150;
  const YiqTextDark =
    frontmatter["color-contrast"] &&
    frontmatter["color-contrast"]["yiq-text-dark"]
      ? frontmatter["color-contrast"]["yiq-text-dark"]
      : gray900;
  const YiqTextLight =
    frontmatter["color-contrast"] &&
    frontmatter["color-contrast"]["yiq-text-light"]
      ? frontmatter["color-contrast"]["yiq-text-light"]
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

  return (
    <main style={{ minHeight: "100vh", backgroundColor: bodyBg }}>
      <div className={"container-fluid"}>
        <div className={"row pt-3"}>
          <div className={"col-12 pt-3"}>
            <div className="card-deck">
              <div
                className="card mb-3"
                style={{
                  borderRadius: cardBorderRadius,
                  backgroundColor: primary,
                  color: colorYiq(primary),
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
                    Primary background with automatic contrast color text.
                  </p>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{
                  borderRadius: cardBorderRadius,
                  backgroundColor: secondary,
                  color: colorYiq(secondary),
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
                    Secondary background with automatic contrast color text.
                  </p>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{
                  borderRadius: cardBorderRadius,
                  backgroundColor: accent,
                  color: colorYiq(accent),
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
                    Accent background with automatic contrast color text.
                  </p>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{
                  borderRadius: cardBorderRadius,
                  backgroundColor: light,
                  color: colorYiq(light),
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
                    Light background with automatic contrast color text.
                  </p>
                </div>
              </div>
              <div
                className="card mb-3"
                style={{
                  borderRadius: cardBorderRadius,
                  backgroundColor: dark,
                  color: colorYiq(dark),
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
                    Dark background with automatic contrast color text.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"col-12 col-sm-5 pt-3"}>
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
              Heading 1
            </h1>
            <p
              style={{
                fontSize: fontSizeBase + "rem",
                fontFamily: base_font,
                color: bodyColor,
                marginBottom: paragraphMarginBottom + "rem",
                lineHeight: lineHeightBase,
              }}
            >
              Of the 654 Bootstrap theme variables here, just the most important
              are applied in the preview, but they all have an effect in the
              rendered CSS file. In the future, the preview will be even more
              detailed. You are very welcome to contribute to the project on
              Github.
              <br />
              This is a text paragraph with the base font for regular text.{" "}
              <strong>This is bold</strong> and here are{" "}
              <em>some italic words</em>. UPPERCASE would look like this!
            </p>{" "}
            <h2
              style={{
                fontSize: h2FontSize + "rem",
                fontFamily: headings_font,
                color: headingsColor,
                marginBottom: headingsMarginBottom + "rem",
                fontWeight: headingsFontWeight,
                lineHeight: headingsLineHeight,
              }}
            >
              Heading 2
            </h2>
            <p
              style={{
                fontSize: fontSizeBase + "rem",
                fontFamily: base_font,
                color: bodyColor,
                marginBottom: paragraphMarginBottom + "rem",
                lineHeight: lineHeightBase,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>{" "}
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
              Heading 3
            </h3>
            <p
              style={{
                fontSize: fontSizeBase + "rem",
                fontFamily: base_font,
                color: bodyColor,
                marginBottom: paragraphMarginBottom + "rem",
                lineHeight: lineHeightBase,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>{" "}
            <h4
              style={{
                fontSize: h4FontSize + "rem",
                fontFamily: headings_font,
                color: headingsColor,
                marginBottom: headingsMarginBottom + "rem",
                fontWeight: headingsFontWeight,
                lineHeight: headingsLineHeight,
              }}
            >
              Heading 4
            </h4>
            <p
              style={{
                fontSize: fontSizeBase + "rem",
                fontFamily: base_font,
                color: bodyColor,
                marginBottom: paragraphMarginBottom + "rem",
                lineHeight: lineHeightBase,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>{" "}
            <h5
              style={{
                fontSize: h5FontSize + "rem",
                fontFamily: headings_font,
                color: headingsColor,
                marginBottom: headingsMarginBottom + "rem",
                fontWeight: headingsFontWeight,
                lineHeight: headingsLineHeight,
              }}
            >
              Heading 5
            </h5>
            <p
              style={{
                fontSize: fontSizeBase + "rem",
                fontFamily: base_font,
                color: bodyColor,
                marginBottom: paragraphMarginBottom + "rem",
                lineHeight: lineHeightBase,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>{" "}
            <h6
              style={{
                fontSize: h6FontSize + "rem",
                fontFamily: headings_font,
                color: headingsColor,
                marginBottom: headingsMarginBottom + "rem",
                fontWeight: headingsFontWeight,
                lineHeight: headingsLineHeight,
              }}
            >
              Heading 6
            </h6>
            <p
              style={{
                fontSize: fontSizeBase + "rem",
                fontFamily: base_font,
                color: bodyColor,
                marginBottom: paragraphMarginBottom + "rem",
                lineHeight: lineHeightBase,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p
              style={{
                fontSize: fontSizeBase + "rem",
                fontFamily: base_font,
                color: bodyColor,
                marginBottom: paragraphMarginBottom + "rem",
                lineHeight: lineHeightBase,
              }}
            >
              This is a second paragraph to demonstrate the spacing in between.
              Edit "Typography / Paragraph Margin Bottom" to adjust it.
            </p>
          </div>
          <div className={"col-12 col-sm-7 pt-3"}>
            <h4>Buttons</h4>
            <div className="mb-4">
              <button
                type="button"
                className="btn btn-sm"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadiusSm,
                  backgroundColor: primary,
                  color: colorYiq(primary),
                }}
              >
                Small Button
              </button>

              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  backgroundColor: primary,
                  color: colorYiq(primary),
                }}
              >
                Default Button
              </button>

              <button
                type="button"
                className="btn btn-lg"
                style={{
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadiusLg,
                  backgroundColor: primary,
                  color: colorYiq(primary),
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
                backgroundColor: primary,
                color: colorYiq(primary),
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
                backgroundColor: secondary,
                color: colorYiq(secondary),
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
                backgroundColor: accent,
                color: colorYiq(accent),
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
                backgroundColor: light,
                color: colorYiq(light),
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
                backgroundColor: dark,
                color: colorYiq(dark),
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
                backgroundColor: success,
                color: colorYiq(success),
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
                backgroundColor: warning,
                color: colorYiq(warning),
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
                backgroundColor: danger,
                color: colorYiq(danger),
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
                backgroundColor: info,
                color: colorYiq(info),
              }}
            >
              Info Button
            </button>
            <div>
              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  borderColor: primary,
                  color: primary,
                }}
              >
                Primary Outline Button
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  borderColor: secondary,
                  color: secondary,
                }}
              >
                Secondary Outline Button
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  borderColor: accent,
                  color: accent,
                }}
              >
                Accent Outline Button
              </button>

              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  borderColor: dark,
                  color: dark,
                }}
              >
                Dark Outline Button
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  borderColor: light,
                  color: light,
                }}
              >
                Light Outline Button
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  borderColor: success,
                  color: success,
                }}
              >
                Success Outline Button
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  borderColor: warning,
                  color: warning,
                }}
              >
                Warning Outline Button
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  borderColor: danger,
                  color: danger,
                }}
              >
                Danger Outline Button
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  marginRight: spacer3,
                  marginBottom: spacer3,
                  borderRadius: btnBorderRadius,
                  borderColor: info,
                  color: info,
                }}
              >
                Info Outline Button
              </button>
            </div>
            <div>
              <h4>Spacer</h4>
            </div>
            <div>
              <div className={"row text-center"}>
                <div className="col-12 pt-3">
                  <div className="">
                    <div style={{ background: "lightgray", padding: spacer1 }}>
                      <div style={{ background: "gray", padding: spacer1 }}>
                        <div>Spacer 1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3">
                  <div className="">
                    <div style={{ background: "lightgray", padding: spacer2 }}>
                      <div style={{ background: "gray", padding: spacer2 }}>
                        <div>Spacer 2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3">
                  <div className="">
                    <div style={{ background: "lightgray", padding: spacer3 }}>
                      <div style={{ background: "gray", padding: spacer3 }}>
                        <div>Spacer 3</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3">
                  <div className="">
                    <div style={{ background: "lightgray", padding: spacer4 }}>
                      <div style={{ background: "gray", padding: spacer4 }}>
                        <div>Spacer 4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3">
                  <div className="">
                    <div style={{ background: "lightgray", padding: spacer5 }}>
                      <div style={{ background: "gray", padding: spacer5 }}>
                        <div>Spacer 5</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Theme;
