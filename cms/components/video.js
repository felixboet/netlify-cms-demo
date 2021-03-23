import React from "react";
import PropTypes from "prop-types";

const Video = (props) => {
  const wrapperClassNames =
    props.block.wrapperCssClasses && props.block.wrapperCssClasses.join(" ");

  const OuterWrapper = wrapperClassNames
    ? ({ children }) => <div className={wrapperClassNames}>{children}</div>
    : ({ children }) => <>{children}</>;
  const classNames = props.block.cssClasses && props.block.cssClasses.join(" ");

  const Wrapper = classNames
    ? ({ children }) => <div className={classNames}>{children}</div>
    : ({ children }) => <>{children}</>;

  if (props.block.videoFile) {
    return (
      <OuterWrapper>
        <Wrapper>
          <div>local</div>{" "}
        </Wrapper>
      </OuterWrapper>
    );
  } else if (props.block.videoSource == "youtube") {
    const youTubeLink =
      "https://www.youtube-nocookie.com/embed/" + props.block.videoId;
    return (
      <OuterWrapper>
        <Wrapper>
          <iframe
            className={
              props.block.videoCssClasses &&
              props.block.videoCssClasses.join(" ")
            }
            width="100%"
            src={youTubeLink}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Wrapper>
      </OuterWrapper>
    );
  } else if (props.block.videoSource == "vimeo") {
    const vimeoLink =
      "https://player.vimeo.com/video/" +
      props.block.videoId +
      "?dnt=1&title=0&byline=0&portrait=0";
    return (
      <OuterWrapper>
        <Wrapper>
          <iframe
            className={
              props.block.videoCssClasses &&
              props.block.videoCssClasses.join(" ")
            }
            src={vimeoLink}
            width="100%"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </Wrapper>
      </OuterWrapper>
    );
  }
};

export default Video;

Video.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    cssClasses: PropTypes.array,
    wrapperCssClasses: PropTypes.array,
  }),
};
