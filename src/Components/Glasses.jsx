import React, { useState } from "react";
import Glass from "./Glass";
import data from "./dataGlasses";
import style from "./mystyle.module.css";

console.log(data);
export default function Glasses() {
  const [imgUrl, setImgUrl] = useState("./glassesImage/v1.png");
  const [name, setName] = useState("GUCCI G8850U");
  const [price, setPrice] = useState(30);

  const handleChangeGlass = (name) => {
    switch (name) {
      case "GUCCI G8850U":
        setImgUrl("./glassesImage/v1.png");
        setName("GUCCI G8850U");
        setPrice(30);
        break;
      case "GUCCI G8759H":
        setImgUrl("./glassesImage/v2.png");
        setName("GUCCI G8759H");
        setPrice(50);
        break;
      case "DIOR D6700HQ":
        setImgUrl("./glassesImage/v3.png");
        setName("DIOR D6700HQ");
        setPrice(30);
        break;
      case "DIOR D6005U":
        setImgUrl("./glassesImage/v4.png");
        setName("DIOR D6005U");
        setPrice(70);
        break;
      case "PRADA P8750":
        setImgUrl("./glassesImage/v5.png");
        setName("PRADA P8750");
        setPrice(40);
        break;
      case "PRADA P9700":
        setImgUrl("./glassesImage/v6.png");
        setName("PRADA P9700");
        setPrice(60);
        break;
      case "FENDI F8750":
        setImgUrl("./glassesImage/v7.png");
        setName("FENDI F8750");
        setPrice(80);
        break;
      case "FENDI F8500":
        setImgUrl("./glassesImage/v8.png");
        setName("FENDI F8500");
        setPrice(100);
        break;
      case "FENDI F4300":
        setImgUrl("./glassesImage/v9.png");
        setName("FENDI F4300");
        setPrice(60);
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.glasses_layout}>
      <h1>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0,0,255,.1)" }}
        >
          TRY GLASSES ONLINE
        </div>
      </h1>

      <div className={style.glasses_model}>
        <img src="./glassesImage/model.jpg"></img>
        <div className={style.glasses_of_model}>
          <img src={imgUrl}></img>
          <p className={style.glasses_name}>
            {name} - {price}$
          </p>
        </div>
      </div>

      <div className={style.glasses}>
        <div className="container mt-5">
          <div className={style.glasses_container}>
            <Glass onChangeGlass={handleChangeGlass} />
          </div>
        </div>
      </div>
    </div>
  );
}
