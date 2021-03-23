import React from "react";
import PropTypes from "prop-types";

const Navigation = (props) => {
  const path = props.parentPath.concat([
    "navigation",
    "navigations",
    props.block.navigation,
  ]);

  const blogEntries = ["test"];

  const loadEntries = (entries) =>
    Promise.all(entries.map((entry) => import(`./${entry}.txt`)));

  loadEntries(blogEntries).then((entries) => console.log(entries));

  const navigation = props.block.navigation && props.fieldsMetaData.getIn(path);

  const navigationJS = typeof navigation !== "undefined" && navigation.toJS();
  // console.log("navtest:" + JSON.stringify(navtest));

  const wrapperClassNames =
    props.block.wrapperCssClasses && props.block.wrapperCssClasses.join(" ");

  const Wrapper = wrapperClassNames
    ? ({ children }) => <div className={wrapperClassNames}>{children}</div>
    : ({ children }) => <>{children}</>;

  return (
    <React.Fragment key={props.block.id}>
      <Wrapper>
        <div
          className={
            props.block.wrapperCssClasses &&
            props.block.wrapperCssClasses.join(" ")
          }
        >
          <ul>
            {navigationJS ? (
              navigationJS.menuItems &&
              navigationJS.menuItems.map((menuItem) => (
                <li
                  className={
                    menuItem.cssClasses && menuItem.cssClasses.join(" ")
                  }
                >
                  <a href={"#"}>{menuItem.linkText}</a>
                </li>
              ))
            ) : (
              <p>select navigation</p>
            )}
          </ul>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};
export default Navigation;

Navigation.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    wrapperCssClasses: PropTypes.array,
  }),
};

Navigation.defaultProps = {
  block: {
    id: "new",
    wrapperCssClasses: [],
  },
};
