import React from "react";
import Wrapper from "../helpers/cssWrapper.js";
import replaceAll from "../helpers/useAsyncImport.js";

const Heading = (props) => {
  const TagName = props.block.headingType || "h1";
  return (
    <Wrapper classes={props.block.wrapperCssClasses}>
      <TagName
        className={props.block.cssClasses && props.block.cssClasses.join(" ")}
      >
        {replaceAll(props.block.name)}
      </TagName>
    </Wrapper>
  );
};

export default Heading;
