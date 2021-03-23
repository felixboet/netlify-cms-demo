import React from "react";
import PropTypes from "prop-types";

const Divider = (props) => {
  var inner = (
    <hr
      className={props.block.cssClasses && props.block.cssClasses.join(" ")}
    />
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

export default Divider;

Divider.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    cssClasses: PropTypes.array,
    wrapperCssClasses: PropTypes.array,
  }),
};
