import React from "react";
import PropTypes from "prop-types";
import arraysEqual from "../helpers/arraysEqual.js";
import Wrapper from "../helpers/cssWrapper.js";

import Components from "./layoutComponents.js";

// const ConditionalWrapper = ({ condition, wrapper, children }) =>
//   condition ? wrapper(children) : children;

const Layout = ({ entry, getAsset, fieldsMetaData }) => {
  const frontmatter = entry.get("data").toJS();
  const [data, setData] = React.useState([]);

  const [linkState, setLink] = React.useState([]);

  function handler(val) {
    setModulesCss({
      someVar: "some value",
    });
  }

  var link = document.createElement("link");
  link.href = "/css/style.css";
  link.type = "text/css";
  link.rel = "stylesheet";

  const sameLink = arraysEqual(linkState, link);

  if (sameLink === false) {
    setLink((linkState) => link);
    window.frames[1].frameElement.contentWindow.document.head.append(link);
  }

  // append <style> to html head if it doesn't exist
  const head = window.frames[1].frameElement.contentWindow.document.head;

  const styleElementExists = head.getElementsByTagName("style")[0];
  if (typeof styleElementExists === "undefined") {
    var style = document.createElement("style");
    head.appendChild(style);
  }

  //var css = 'h1 { background: red; }',
  //head = document.head || document.getElementsByTagName('head')[0],
  //style = document.createElement('style');
  //
  //window.frames[1].frameElement.contentWindow.document.head.appendChild(style);

  /*async function moduleCssHandler() {
    const classes =
      (await fieldsMetaData) &&
      fieldsMetaData.getIn([
        "containers",
        "module",
        "settings",
        "newclass",
        "superClasses",
      ]);

      const path = ([
        "containers",
        "module",
        "settings",
        container.module,
        "superClasses",
      ]);
    

    setModulesCss(classes);
    console.log("inside:" + JSON.stringify(modulesCss));
  }

  moduleCssHandler();
*/

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

  if (frontmatter.containers) {
    return (
      <div
        className={frontmatter.cssClasses && frontmatter.cssClasses.join(" ")}
        style={{ minHeight: "100vh" }}
      >
        <div className="breakpoint-indicator">
          <span className="d-sm-none">XS</span>
          <span className="d-none d-sm-inline d-md-none">SM</span>
          <span className="d-none d-md-inline d-lg-none">MD</span>
          <span className="d-none d-lg-inline d-xl-none">LG</span>
          <span className="d-none d-xl-inline">XL</span>
        </div>
        {frontmatter.containers.map((container) => {
          const path = container.module
            ? [
                "containers",
                "module",
                "settings",
                container.module,
                "superClasses",
              ]
            : [];
          const modulecssdata =
            container.module && fieldsMetaData && fieldsMetaData.getIn(path)
              ? fieldsMetaData.getIn(path).toJS()
              : [];

          const eachBreakpoint = (breakpoint) => {
            return `${
              modulecssdata &&
              modulecssdata
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
                      items:
                        superClass[breakpoint] && superClass[breakpoint].items,
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

          console.log(container.module && css);
          if (container.module)
            window.frames[1].frameElement.contentWindow.document.head.getElementsByTagName(
              "style"
            )[0].innerHTML = css;
          const wrapperClassNames = [
            container.wrapperCssClasses &&
              container.wrapperCssClasses.join(" "),
            container.module && `pure-${container.module}`,
          ];

          if (container.blocks) {
            return (
              <Wrapper classes={wrapperClassNames}>
                <Wrapper classes={container.cssClasses}>
                  {container.blocks.map((block) =>
                    Components(block, getAsset, fieldsMetaData)
                  )}
                </Wrapper>
              </Wrapper>
            );
          } else {
            return (
              <div
                key={container.uid ? container.uid : "new"}
                className={wrapperClassNames}
                style={{
                  backgroundColor: "rgba(130, 130, 130,0.4)",
                  height: "20vh",
                }}
              >
                <div
                  className={classNames}
                  style={{
                    backgroundColor: "rgba(20, 20, 20, 0.2)",
                    color: "rgba(255, 255, 255, 0.3)",
                    fontSize: "40px",
                    fontWeight: "bold",
                    textAlign: "center",
                    height: "100%",
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                  }}
                >
                  <div
                    className={
                      "d-flex flex-column align-items-center justify-content-center h-100"
                    }
                  >
                    <div
                      style={{
                        fontSize: "40px",
                        fontWeight: "bold",
                      }}
                    >
                      {container.name}
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      Well done! Now you can add some content blocks to this
                      empty container.
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

        {/*
    <div
          key={"copyrightfooter"}
          className={
            frontmatter.copyrightCssClasses &&
            frontmatter.copyrightCssClasses.join(" ")
          }
        >
          <div className="opacity-3">
            powered by{" "}
            <a
              href="https://puresitebuilder.org"
              target="_blank"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              pure sitebuilder
            </a>
            <span className="d-none d-md-inline">
              , the free and open source website builder
            </span>
          </div>
        </div>*/}
      </div>
    );
  }

  return <div>no content</div>;
};

export default Layout;

Layout.propTypes = {
  container: PropTypes.shape({
    id: PropTypes.string,
  }),
};

// not working
Layout.defaultProps = {
  container: {
    id: "new",
  },
};
