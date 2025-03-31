import { useState } from "react";
import { useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered.
// Use useRef to create a variable that persists across renders without causing additional
// renders when it changes.

export function Assignment2() {
  const [render, forceRender] = useState(0);

  const vari = useRef(0);
  const handleReRender = () => {
    // Update state to force re-render
    forceRender(render + 1);
  };
  vari.current = parseInt(vari.current) + 1;

  return (
    <div>
      <p>This component has rendered {vari.current} times.</p>
      {console.log(vari)}
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
