import React, { useState } from "react";

const Content = () => {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    const inputText = document.getElementById("textarea").value;
    setDisplayText(inputText);
  };

  return (
    <div>
      <textarea
        id="textarea"
        rows="4"
        cols="50"
        className="form-control w-50 mb-2"
      />
      <button className="btn btn-success" onClick={handleButtonClick}>
        Display Text
      </button>
      <p>{displayText}</p>
    </div>
  );
};

export default Content;
