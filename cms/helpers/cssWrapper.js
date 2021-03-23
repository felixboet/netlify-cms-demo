import React from "react";

const ConditionalWrapper = ({ classes, children }) => {
  const classesString = classes && classes.join(" ");
  return classesString ? (
    <div className={classesString}>{children}</div>
  ) : (
    <>{children}</>
  );
};

export default ConditionalWrapper;
