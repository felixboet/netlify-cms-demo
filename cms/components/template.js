import React from "react";
import PropTypes from "prop-types";

import Cards from "./cards.js";
import Carousel from "./carousel.js";
import Divider from "./divider.js";
import Form from "./form.js";
import Grid from "./grid.js";
import Group from "./group.js";
import Heading from "./heading.js";
import HtmlCode from "./htmlCode.js";
import Image from "./image.js";
import Video from "./video.js";
import Map from "./map.js";
import LinkGroup from "./linkGroup.js";
import List from "./list.js";
import Module from "./module.js";
import Navigation from "./navigation.js";
import PageContent from "./pageContent.js";
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
  htmlCode: HtmlCode,
  image: Image,
  video: Video,
  map: Map,
  linkGroup: LinkGroup,
  list: List,
  module: Module,
  navigation: Navigation,
  pageContent: PageContent,
  paragraph: Paragraph,
  richText: RichText,
};

const Template = (props) => (
  <div
    className={
      props.template.layoutSettings &&
      props.template.layoutSettings.cssClasses &&
      props.template.layoutSettings.cssClasses.join(" ")
    }
    style={{ minHeight: "100vh" }}
  >
    {props.template.containers ? (
      props.template.containers.map((container) => {
        const wrapperClassNames =
          container.wrapperCssClasses && container.wrapperCssClasses.join(" ");

        const classNames =
          container.cssClasses && container.cssClasses.join(" ");
        const Wrapper = wrapperClassNames
          ? ({ children }) => (
              <div className={wrapperClassNames}>{children}</div>
            )
          : ({ children }) => <>{children}</>;

        const InnerWrapper = classNames
          ? ({ children }) => <div className={classNames}>{children}</div>
          : ({ children }) => <>{children}</>;

        return (
          <React.Fragment key={container.id}>
            <Wrapper>
              <InnerWrapper>
                {container.blocks &&
                  container.blocks.map((block) => (
                    <React.Fragment key={block.id}>
                      {(function () {
                        if (typeof Components[block.type] !== "undefined") {
                          return React.createElement(Components[block.type], {
                            block: block,
                            frontmatter: props.frontmatter,
                            getAsset: props.getAsset,
                          });
                        }
                        // component doesn't exist yet
                        return React.createElement(
                          () => (
                            <div>
                              Layout: component "{block.type}" does not exist.
                            </div>
                          ),
                          { key: "0" }
                        );
                      })()}
                    </React.Fragment>
                  ))}
              </InnerWrapper>
            </Wrapper>{" "}
          </React.Fragment>
        );
      })
    ) : (
      <p>no layout selected</p>
    )}
  </div>
);

export default Template;

// an array of a particular shape.
