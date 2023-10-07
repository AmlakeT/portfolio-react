import React from "react";

const Child = ({ props, changeName }) => {
  return (
    <div className="m-20">
      <p>{props}</p>
      <button onClick={changeName} className="border px-2 mt-3 ">
        click it
      </button>
    </div>
  );
};

export default Child;
