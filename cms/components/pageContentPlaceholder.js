import React from "react";
import PropTypes from "prop-types";

const PageContentPlaceholder = (props) => {
  var inner = (
    <main
      className={props.block.cssClasses && props.block.cssClasses.join(" ")}
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
            PAGE CONTENT
          </div>
          <div
            style={{
              fontSize: "16px",
            }}
          >
            Your page content blocks will be displayed here.
            <br />
            This area will shrink or expand depending on the page content.
          </div>
        </div>
      </div>
    </main>
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

export default PageContentPlaceholder;

PageContentPlaceholder.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    cssClasses: PropTypes.array,
    wrapperCssClasses: PropTypes.array,
  }),
};
