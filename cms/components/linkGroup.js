import React from "react";
import PropTypes from "prop-types";
import replaceAll from "../helpers/useAsyncImport.js";

const LinkGroup = (props) => {
  const wrapperClassNames =
    props.block.wrapperCssClasses && props.block.wrapperCssClasses.join(" ");

  const Wrapper = wrapperClassNames
    ? ({ children }) => <div className={wrapperClassNames}>{children}</div>
    : ({ children }) => <>{children}</>;
  const allLinksWrapperClassNames =
    props.block.allLinksWrapperCssClasses &&
    props.block.allLinksWrapperCssClasses.join(" ");

  const LinkWrapper = allLinksWrapperClassNames
    ? ({ children }) => (
        <div className={allLinksWrapperClassNames}>{children}</div>
      )
    : ({ children }) => <>{children}</>;

  return (
    <React.Fragment key={props.block.id}>
      <Wrapper>
        {props.block.links ? (
          props.block.links.map((link) => (
            <React.Fragment key={link.id}>
              <LinkWrapper>
                {(function () {
                  const target = {
                    ...(link.newTab && { target: "_blank" }),
                  };
                  const linkText = replaceAll(link.linkText);
                  switch (link.type) {
                    case "internalPageLink":
                      return (
                        <a
                          href="#"
                          className={
                            link.cssClasses && link.cssClasses.join(" ")
                          }
                          {...target}
                        >
                          {linkText}
                        </a>
                      );
                    case "internalBlogLink":
                      return (
                        <a
                          href="#"
                          className={
                            link.cssClasses && link.cssClasses.join(" ")
                          }
                          {...target}
                        >
                          {linkText}
                        </a>
                      );
                    case "externalLink":
                      return (
                        <a
                          href="#"
                          className={
                            link.cssClasses && link.cssClasses.join(" ")
                          }
                          {...target}
                        >
                          {linkText}
                        </a>
                      );
                    case "fileLink":
                      return (
                        <a
                          href="#"
                          className={
                            link.cssClasses && link.cssClasses.join(" ")
                          }
                          {...target}
                        >
                          {linkText}
                        </a>
                      );

                    default:
                      return null;
                  }
                })()}
              </LinkWrapper>
            </React.Fragment>
          ))
        ) : (
          <div
            className={
              props.block.cssClasses && props.block.cssClasses.join(" ")
            }
            style={{
              border: "1px solid rgba(74, 74, 74, 0.3)",
              background: "rgba(166, 166, 166, 0.3)",
              display: "inline",
              padding: "2px 5px",
            }}
          >
            <span className={"text-monospace"}>{props.block.name}</span>
          </div>
        )}
      </Wrapper>
    </React.Fragment>
  );
};

export default LinkGroup;

LinkGroup.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    wrapperCssClasses: PropTypes.array,
  }),
};
