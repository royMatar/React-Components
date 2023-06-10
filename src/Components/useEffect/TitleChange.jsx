import React, { useEffect, useState } from "react";

function TitleChange() {
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    document.title = toggle ? "React Components" : "Components React";
  }, [toggle]); //updates the state one time
  //to update on every toggle: [toggle]
  return (
    <div>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome to my components page</h2>}
    </div>
  );
}

export default TitleChange;
