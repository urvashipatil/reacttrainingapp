import * as React from "react";

function Title() {
  console.log("Title Rendering");
  return <div>UseCallback example</div>;
}

export default React.memo(Title);
