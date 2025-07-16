import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #678765
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b} )`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <button style={{ padding: "3px" }} onClick={() => setypeOfColor("hex")}>
          Generat HEX Color
        </button>
        <button style={{ padding: "3px" }} onClick={() => setypeOfColor("rgb")}>
          Generate RGB color
        </button>
        <button
          style={{ padding: "3px" }}
          onClick={() =>
            typeOfColor === "hex"
              ? handleCreateRandomHexColor()
              : handleCreateRandomRgbColor()
          }
        >
          Generate Random color
        </button>
      </div>
      <div style={{ display: "flex", marginTop: "50px", fontSize: "60px",flexDirection:"column",alignItems:"center",gap:"20px" }}>
        <h3>{typeOfColor === "rgb" ? "RGB COLOR" : "HEX COLOR"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
