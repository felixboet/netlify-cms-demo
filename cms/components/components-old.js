import Heading from "heading";
import Paragraph from "paragraph";
import Row from "row";

const Components = {
  Heading: Heading,
  paragraph: Paragraph,
  row: Row,
};

export default (Compo) => {
  // component does exist
  if (typeof Components[block.type] !== "undefined") {
    return React.createElement(Components[block.type], {
      key: "0",
      block: block,
    });
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.type} has not been created yet.</div>,
    { key: "0" }
  );
};
