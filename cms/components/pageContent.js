import React from "react";
import PropTypes from "prop-types";

import Cards from "./cards.js";
import Carousel from "./carousel.js";
import Divider from "./divider.js";
import Form from "./form.js";
import Grid from "./grid.js";
import Group from "./group.js";
import Heading from "./heading.js";
import CustomHtml from "./customHtml.js";
import Image from "./image.js";
import Video from "./video.js";
import Map from "./map.js";
import LinkGroup from "./linkGroup.js";
import List from "./list.js";
import Module from "./module.js";
import Navigation from "./navigation.js";
import Paragraph from "./paragraph.js";
import RichText from "./richText.js";

const Components = {
  cards: Cards,
  carousel: Carousel,
  divider: Divider,
  form: Form,
  grid: Grid,
  group: Group,
  heading: Heading,
  customHtml: CustomHtml,
  image: Image,
  video: Video,
  map: Map,
  linkGroup: LinkGroup,
  list: List,
  module: Module,
  navigation: Navigation,
  paragraph: Paragraph,
  richText: RichText,
};

const PageContent = (props) => {
  const wrapperClassNames =
    props.block.wrapperCssClasses && props.block.wrapperCssClasses.join(" ");

  const Wrapper = wrapperClassNames
    ? ({ children }) => <div className={wrapperClassNames}>{children}</div>
    : ({ children }) => <>{children}</>;
  // console.log("pagecontent.js");
  // console.log("props.parentPath:" + props.parentPath);
  // console.log("propsfieldsMetaData:" + props.fieldsMetaData);
  return (
    <Wrapper>
      <div
        className={props.block.cssClasses && props.block.cssClasses.join(" ")}
      >
        {props.frontmatter.blocks ? (
          props.frontmatter.blocks.map((block) => {
            let DynamicComponent = Components[block.type];
            if (typeof Components[block.type] !== "undefined") {
              return (
                <DynamicComponent
                  key={block.id}
                  block={block}
                  parentPath={["blocks"]}
                  getAsset={props.getAsset}
                  fieldsMetaData={props.fieldsMetaData}
                >
                  {block.blocks &&
                    block.blocks.map((block) => {
                      const parentPath = props.parentPath.concat("blocks");
                      let DynamicComponent = Components[block.type];
                      if (typeof Components[block.type] !== "undefined") {
                        return (
                          <DynamicComponent
                            key={block.id}
                            block={block}
                            parentPath={parentPath}
                            getAsset={props.getAsset}
                            fieldsMetaData={props.fieldsMetaData}
                          >
                            {block.blocks &&
                              block.blocks.map((block) => {
                                const parentPath = props.parentPath.concat(
                                  "blocks"
                                );
                                let DynamicComponent = Components[block.type];
                                if (
                                  typeof Components[block.type] !== "undefined"
                                ) {
                                  return (
                                    <DynamicComponent
                                      key={block.id}
                                      block={block}
                                      parentPath={parentPath}
                                      getAsset={props.getAsset}
                                      fieldsMetaData={props.fieldsMetaData}
                                    >
                                      {block.blocks &&
                                        block.blocks.map((block) => {
                                          const parentPath = props.parentPath.concat(
                                            "blocks"
                                          );
                                          let DynamicComponent =
                                            Components[block.type];
                                          if (
                                            typeof Components[block.type] !==
                                            "undefined"
                                          ) {
                                            return (
                                              <DynamicComponent
                                                key={block.id}
                                                block={block}
                                                parentPath={parentPath}
                                                getAsset={props.getAsset}
                                                fieldsMetaData={
                                                  props.fieldsMetaData
                                                }
                                              />
                                            );
                                          }
                                          return React.createElement(
                                            () => (
                                              <div>
                                                The component {block.type} has
                                                not been created yet.
                                              </div>
                                            ),
                                            { key: block.id }
                                          );
                                        })}
                                    </DynamicComponent>
                                  );
                                }
                                return React.createElement(
                                  () => (
                                    <div>
                                      The component {block.type} has not been
                                      created yet.
                                    </div>
                                  ),
                                  { key: block.id }
                                );
                              })}
                          </DynamicComponent>
                        );
                      }
                      return React.createElement(
                        () => (
                          <div>
                            The component {block.type} has not been created yet.
                          </div>
                        ),
                        { key: block.id }
                      );
                    })}
                </DynamicComponent>
              );
            }
            return React.createElement(
              () => (
                <div>The component {block.type} has not been created yet.</div>
              ),
              { key: block.id }
            );
          })
        ) : (
          <div
            style={{
              backgroundColor: "rgba(130, 130, 130,0.4)",
              height: "50vh",
            }}
          >
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.2)",
                color: "rgba(255, 255, 255, 0.3)",
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
                height: "100%",
                width: "100%",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
              }}
            >
              <div className="align-self-center">
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  NOTHING HERE
                </div>
                <div
                  style={{
                    fontSize: "16px",
                  }}
                >
                  start adding content blocks
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default PageContent;
