import React from "react";
import data from "./dataGlasses";
import style from "./style.css";

export default function Glass({ onChangeGlass }) {
  return data.map((glass) => {
    return (
      <div
        className={style.glasses_element}
        onClick={() => onChangeGlass(glass.name)}
      >
        <img src={glass.displayUrl}></img>
      </div>
    );
  });
}
