import React from "react";
import PropTypes from "prop-types";
import Commonmark from "react-commonmark"; // instead of "react-markdown" for correct display of "new line"
import replaceAll from "../helpers/useAsyncImport.js";

const encodeMarkdownURIs = (source = "") => {
  const markdownLinkRegex = /\[(.+)\]\((.+)(".+)\)/g;
  return source.replace(markdownLinkRegex, (match, linkURI) => {
    if (!linkURI) return match;
    const replaced = match.replace(linkURI, encodeURI(linkURI));
    return replaced;
  });
};

const RichText = (props) => {
  const source = replaceAll(props.block.markdown) || "";
  const wrapperClassNames =
    props.block.wrapperCssClasses && props.block.wrapperCssClasses.join(" ");

  const Wrapper = wrapperClassNames
    ? ({ children }) => <div className={wrapperClassNames}>{children}</div>
    : ({ children }) => <>{children}</>;
  // for html code in markdown field

  if (source.match(/^</)) {
    return (
      <Wrapper>
        <div
          className={props.block.cssClasses && props.block.cssClasses.join(" ")}
          dangerouslySetInnerHTML={{ __html: source }}
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Commonmark
        className={props.block.cssClasses && props.block.cssClasses.join(" ")}
        source={source}
      />
    </Wrapper>
  );
};

export default RichText;

RichText.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    markdown: PropTypes.string,
    cssClasses: PropTypes.array,
    wrapperCssClasses: PropTypes.array,
  }),
};
