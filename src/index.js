import { useState, useEffect } from "preact/hooks";
import Canva from "./components/Canva";
import ColorMenu from "./components/ColorMenu";

import LZString from "lz-string/libs/lz-string.min.js";

import "./style";

export default function App() {
  const [color, setColor] = useState("#000000");

  const initializeDraw = () => {
    if (location.href.length > 50) {
      let invertedUrl = location.href.split("").reverse().join("");

      let drawData = invertedUrl
        .slice(0, invertedUrl.indexOf("/"))
        .split("")
        .reverse()
        .join("")
        .split(",");

      return LZString.decompressFromUint8Array(new Uint8Array(drawData)).split(
        ","
      );
    } else {
      return Array(256).fill("#ffffff");
    }
  };

  useEffect(() => savePixelArt());

  const [pixelArray, setPixelArray] = useState(initializeDraw());

  const savePixelArt = () => {
    let dataString = pixelArray.join();
    let compressedData = LZString.compressToUint8Array(dataString);

    history.pushState(null, null, "/!#/" + compressedData);
  };

  return (
    <div class="layout">
      <Canva
        color={color}
        pixelArray={pixelArray}
        setPixelArray={setPixelArray}
      />
      <ColorMenu color={color} setColor={setColor} pixelArray={pixelArray} />
    </div>
  );
}
