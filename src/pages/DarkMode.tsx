import React, { useState } from "react";

const DarkMode = () => {
  const [mode, setMode] = useState(false);

  const handleChangeBgColor = () => {
    setMode(!mode);
  };

  return (
    <div className="btn-box">
      <div className={mode ? "bg-color" : ""}>
        <button onClick={handleChangeBgColor}>Click It</button>
      </div>
    </div>
  );
};

export default DarkMode;
