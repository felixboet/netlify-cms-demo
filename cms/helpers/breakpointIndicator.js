import React from "react";

const BreakpointIndicator = () => (
  <div className="breakpoint-indicator">
    <span className="d-sm-none">XS</span>
    <span className="d-none d-sm-inline d-md-none">SM</span>
    <span className="d-none d-md-inline d-lg-none">MD</span>
    <span className="d-none d-lg-inline d-xl-none">LG</span>
    <span className="d-none d-xl-inline">XL</span>
  </div>
);

export default BreakpointIndicator;
