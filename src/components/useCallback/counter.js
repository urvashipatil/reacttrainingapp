import * as React from "react";

function Counter({ text, count }) {
  console.log("Counter" + text + " Rendering");

  return (
    <div>
      <div>
        {text} count: {count}
      </div>
    </div>
  );
}

export default React.memo(Counter);
