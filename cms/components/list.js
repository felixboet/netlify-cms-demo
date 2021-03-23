import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const wrapperClassNames =
    props.block.wrapperCssClasses && props.block.wrapperCssClasses.join(" ");

  const Wrapper = wrapperClassNames
    ? ({ children }) => <div className={wrapperClassNames}>{children}</div>
    : ({ children }) => <>{children}</>;

  return (
    <React.Fragment key={props.block.id}>
      <Wrapper>
        <ul>
          {props.block.listItems ? (
            props.block.listItems.map((listItem) => (
              <li
                className={listItem.cssClasses && listItem.cssClasses.join(" ")}
              >
                {listItem.name}
              </li>
            ))
          ) : (
            <li>
              <div
                style={{
                  border: "1px solid rgba(74, 74, 74, 0.3)",
                  background: "rgba(166, 166, 166, 0.3)",
                  display: "inline",
                  padding: "2px 5px",
                }}
              >
                <span className={"text-monospace"}>{props.block.name}</span>
              </div>
            </li>
          )}
        </ul>
      </Wrapper>
    </React.Fragment>
  );
};
export default List;

List.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    wrapperCssClasses: PropTypes.array,
  }),
};

List.defaultProps = {
  block: {
    id: "new",
    wrapperCssClasses: [],
  },
};
