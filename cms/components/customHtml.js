import React from "react";
import Wrapper from "../helpers/cssWrapper.js";
import replaceAll from "../helpers/useAsyncImport.js";

// todo: make inner css classes div optional

const CustomHtml = (props) => {
  return (
    <Wrapper classes={props.block.wrapperCssClasses}>
      <div
        className={props.block.cssClasses && props.block.cssClasses.join(" ")}
        dangerouslySetInnerHTML={{ __html: props.block.code }}
      />
    </Wrapper>
  );
};

export default CustomHtml;
