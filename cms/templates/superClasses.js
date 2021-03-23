import React from "react";
import arraysEqual from "../helpers/arraysEqual.js";
import BreakpointIndicator from "../helpers/breakpointIndicator.js";
import Components from "./moduleComponents.js";

const superClasses = ({ entry, getAsset, fieldsMetaData }) => {
  const data = entry.get("data").toJS();

  console.log(JSON.stringify(data));

  // html head of preview frame (has no ID)
  const head = window.frames[1].frameElement.contentWindow.document.head;

  // append <style> to html head if it doesn't exist
  const styleElementExists = head.getElementsByTagName("style")[0];
  if (typeof styleElementExists === "undefined") {
    var style = document.createElement("style");
    head.appendChild(style);
  }

  /*   // load purestyle once ... how to do this better? also in the other preview templates
  const [linkState, setLink] = React.useState([]);
  var link = document.createElement("link");
  link.href = "purestyle.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  const sameLink = arraysEqual(linkState, link);
  if (sameLink === false) {
    setLink((linkState) => link);
    head.append(link);
  } */

  const [linkState, setLink] = React.useState([]);

  var link = document.createElement("link");
  link.href = "/css/style.css";
  link.type = "text/css";
  link.rel = "stylesheet";

  const sameLink = arraysEqual(linkState, link);

  if (sameLink === false) {
    setLink((linkState) => link);
    window.frames[1].frameElement.contentWindow.document.head.append(link);
  }

  const cssPropertyBackground = ({ items }) => {
    const filteredItems =
      items &&
      items.map((item) => {
        switch (item.type) {
          case "gradient": {
            const gradientItems = item.colors
              ? item.colors.map((gradientItem) => {
                  return `${
                    gradientItem.color ? gradientItem.color : "rgba(0, 0, 0, 0)"
                  } ${
                    gradientItem.position ? `${gradientItem.position}%` : ``
                  }`;
                })
              : ``;

            return `linear-gradient(${
              item.angle ? item.angle : "90"
            }deg, ${gradientItems})`;
          }
          case "image": {
            const backgroundPosition = item.backgroundPosition
              ? ` ${item.backgroundPosition}`
              : ``;
            const backgroundRepeat = item.backgroundRepeat
              ? ` ${item.backgroundRepeat}`
              : ``;
            const backgroundSize = item.backgroundSize
              ? ` / ${item.backgroundSize}`
              : ``;
            const backgroundAttachment = item.backgroundAttachment
              ? ` ${item.backgroundAttachment}`
              : ``;

            return `url(${
              item.image ? getAsset(item.image) : "test.jpg"
            })${backgroundPosition}${backgroundSize}${backgroundAttachment}${backgroundRepeat}`;
          }
        }
      });

    return filteredItems ? `background: ${filteredItems};` : ``;
  };

  const eachBreakpoint = (breakpoint) => {
    return `${
      data.superClasses &&
      data.superClasses
        .map((superClass) => {
          const cssPropertyBackgroundColor =
            superClass[breakpoint] && superClass[breakpoint].color
              ? `background-color: ${superClass[breakpoint].color};`
              : ``;

          const cssPropertyHeight =
            superClass[breakpoint] && superClass[breakpoint].height
              ? `min-height: ${superClass[breakpoint].height} !important;`
              : ``;

          return `.pure-${superClass.title} {
            ${cssPropertyBackgroundColor}
            ${cssPropertyHeight}
            ${cssPropertyBackground({
              items: superClass[breakpoint] && superClass[breakpoint].items,
            })}
          }`;
        })
        .join("")
    }`;
  };

  var css = `${eachBreakpoint("xs")}
@media (min-width: 540px) {${eachBreakpoint("sm")}}
@media (min-width: 768px) {${eachBreakpoint("md")}}
@media (min-width: 992px) {${eachBreakpoint("lg")}}
@media (min-width: 1140px) {${eachBreakpoint("xl")}}`;

  console.log(css);

  // inject css to <style> element
  head.getElementsByTagName("style")[0].innerHTML = css; //some css goes here

  return (
    <>
      <BreakpointIndicator />
      <div className="container-fluid px-5 pt-5">
        <div className="row">
          {data.superClasses.map((superClass, index) => {
            console.log("super: " + JSON.stringify(superClass));
            console.log("vodeo: " + superClass.video && superClass.video);
            return (
              <div key={superClass.uid || index} className="col-12">
                <h4>{superClass.title}</h4>
                <div
                  className={`mb-4 shadow`}
                  style={{
                    background:
                      'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==")',
                    zIndex: "-1",
                  }}
                >
                  <div
                    className={`pure-${superClass.title}`}
                    style={{ minHeight: "10rem", position: "relative" }}
                  >
                    {superClass.video && (
                      <video
                        loop
                        muted
                        autoPlay
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <source
                          src={getAsset(superClass.video)}
                          type="video/mp4"
                        />
                      </video>
                    )}

                    {superClass.blocks &&
                      superClass.blocks.map((block) =>
                        Components(block, getAsset, fieldsMetaData)
                      )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default superClasses;
