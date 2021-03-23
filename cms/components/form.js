import React from "react";
import PropTypes from "prop-types";

const Form = (props) => {
  var inner = (
    <p className={props.block.cssClasses && props.block.cssClasses.join(" ")}>
      {props.block.type}
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

export default Form;

Form.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    cssClasses: PropTypes.array,
    wrapperCssClasses: PropTypes.array,
  }),
};
