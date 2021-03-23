import React from "react";

import PropTypes from "prop-types";

import Cards from "../components/cards.js";
import Carousel from "../components/carousel.js";
import Divider from "../components/divider.js";
import Form from "../components/form.js";
import Grid from "../components/grid.js";
import Group from "../components/group.js";
import Heading from "../components/heading.js";
import Image from "../components/image.js";
import Video from "../components/video.js";
import Map from "../components/map.js";
import LinkGroup from "../components/linkGroup.js";
import List from "../components/list.js";
import Module from "../components/module.js";
import Navigation from "../components/navigation.js";
import Paragraph from "../components/paragraph.js";
import RichText from "../components/richText.js";

const Components = {
  cards: Cards,
  carousel: Carousel,
  divider: Divider,
  form: Form,
  grid: Grid,
  group: Group,
  heading: Heading,
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

export default (block, getAsset, fieldsMetaData) => {
  const path = ["layout", "layouts", "xxx", "containers", "blocks"];
  let DynamicComponent = Components[block.type];

  if (typeof Components[block.type] !== "undefined") {
    return (
      <DynamicComponent
        key={block.id}
        block={block}
        getAsset={getAsset}
        parentPath={path}
        fieldsMetaData={fieldsMetaData}
      >
        {block.blocks &&
          block.blocks.map((block) => {
            const path1 = path.concat("blocks");

            let DynamicComponent = Components[block.type];
            if (typeof Components[block.type] !== "undefined") {
              return (
                <DynamicComponent
                  key={block.id}
                  block={block}
                  getAsset={getAsset}
                  parentPath={path1}
                  fieldsMetaData={fieldsMetaData}
                >
                  {block.blocks &&
                    block.blocks.map((block) => {
                      const path2 = path1.concat("blocks");

                      let DynamicComponent = Components[block.type];
                      if (typeof Components[block.type] !== "undefined") {
                        return (
                          <DynamicComponent
                            key={block.id}
                            block={block}
                            getAsset={getAsset}
                            parentPath={path2}
                            fieldsMetaData={fieldsMetaData}
                          >
                            {block.blocks &&
                              block.blocks.map((block) => {
                                const path3 = path2.concat("blocks");

                                let DynamicComponent = Components[block.type];
                                if (
                                  typeof Components[block.type] !== "undefined"
                                ) {
                                  return (
                                    <DynamicComponent
                                      key={block.id}
                                      block={block}
                                      getAsset={getAsset}
                                      parentPath={path3}
                                      fieldsMetaData={fieldsMetaData}
                                    >
                                      {block.blocks &&
                                        block.blocks.map((block) => {
                                          const path4 = path3.concat("blocks");

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
                                                getAsset={getAsset}
                                                parentPath={path4}
                                                fieldsMetaData={fieldsMetaData}
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
          })}
      </DynamicComponent>
    );
  }

  return React.createElement(
    () => <div>The component {block.type} has not been created yet.</div>,
    { key: block.id }
  );
};
