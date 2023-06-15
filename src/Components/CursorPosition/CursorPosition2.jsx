import React, { useState, useEffect } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);
  return render({ mousePosition });
};

const PanelMouseLogger = () => {
  return (
    <div>
      <p>Mouse Position: </p>
      <MousePosition
        render={({ mousePosition }) => (
          <div>
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function CursorPosition2() {
  return;
  <div>
    <PanelMouseLogger />
    <PointMouseLogger />
  </div>;
}

export default CursorPosition2;
