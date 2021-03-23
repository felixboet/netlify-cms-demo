import React from "react";
import PropTypes from "prop-types";

const Grid = (props) => {
  const wrapperClassNames =
    props.block.wrapperCssClasses && props.block.wrapperCssClasses.join(" ");

  const Wrapper = wrapperClassNames
    ? ({ children }) => <div className={wrapperClassNames}>{children}</div>
    : ({ children }) => <>{children}</>;

  return (
    <React.Fragment key={props.block.id}>
      <Wrapper>
        {props.block.blocks ? (
          <div
            className={
              props.block.cssClasses && props.block.cssClasses.join(" ")
            }
          >
            {props.children}
          </div>
        ) : (
          <div
            className={
              props.block.cssClasses && props.block.cssClasses.join(" ")
            }
            style={{
              border: "1px solid rgba(74, 74, 74, 0.3)",
              background: "rgba(166, 166, 166, 0.3)",
            }}
          >
            <div
              className={
                "w-100 d-flex py-3 align-items-center justify-content-center"
              }
            >
              <p className={"text-center text-monospace"}>
                <span className={"lead"}> {props.block.name}</span>
                {props.block.wrapperCssClasses && (
                  <>
                    <br />
                    Wrapper CSS Classes:{" "}
                    {props.block.wrapperCssClasses.join(" ")}
                  </>
                )}
                {props.block.cssClasses && (
                  <>
                    <br />
                    CSS Classes: {props.block.cssClasses.join(" ")}
                  </>
                )}
              </p>
            </div>
          </div>
        )}
      </Wrapper>
    </React.Fragment>
  );
};

export default Grid;

Grid.propTypes = {
  block: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    blocks: PropTypes.array,
    cssClasses: PropTypes.array,
  }),
};
