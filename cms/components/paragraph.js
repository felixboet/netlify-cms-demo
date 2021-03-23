import React from "react";
import PropTypes from "prop-types";

const Paragraph = (props) => {
  var inner = (
    <p className={props.block.cssClasses && props.block.cssClasses.join(" ")}>
      {props.block.text}
    </p>
  );

  if (props.block.wrapperCssClasses) {
    return (
      <div
        className={
          props.block.wrapperCssClasses &&
          props.block.wrapperCssClasses.join(" ")
        }
      >
        {inner}
      </div>
    );
  }

  return inner;
};

export default Paragraph;

Paragraph.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    cssClasses: PropTypes.array,
    wrapperCssClasses: PropTypes.array,
  }),
};

Paragraph.defaultProps = {
  block: {
    id: "new",
    text: "Lorem Ipsum",
    cssClasses: [],
    wrapperCssClasses: [],
  },
};
