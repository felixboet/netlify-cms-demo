import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
  const myimage = props.block.image && props.getAsset(props.block.image);
  const innerImg = (
    <>
      {props.block.image ? (
        <img
          className={props.block.cssClasses && props.block.cssClasses.join(" ")}
          src={myimage}
          alt={props.block.alt && props.block.alt}
          title={props.block.title && props.block.title}
        />
      ) : (
        <div
          className={"embed-responsive embed-responsive-16by9"}
          style={{
            border: "1px solid rgba(74, 74, 74, 0.5)",
            background: "rgba(166, 166, 166, 0.5)",
          }}
        >
          {" "}
          <div
            className={
              "embed-responsive-item d-flex align-items-center justify-content-center text-white"
            }
          >
            <div>Image</div>
          </div>
        </div>
      )}
    </>
  );

  if (props.block.wrapperCssClasses) {
    return (
      <div
        className={
          props.block.wrapperCssClasses &&
          props.block.wrapperCssClasses.join(" ")
        }
      >
        {innerImg}
      </div>
    );
  }

  return innerImg;
};

export default Image;

Image.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    cssClasses: PropTypes.array,
    wrapperCssClasses: PropTypes.array,
  }),
};
