import { useState, useEffect } from "preact/hooks";

import Pixel from "./Pixel";

export default function Canva({ color, pixelArray, setPixelArray }) {
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    function mouseHold() {
      document.addEventListener("mousedown", () => {
        setDrawing(true);
      });

      document.addEventListener("mouseup", () => {
        setDrawing(false);
      });
    }
    mouseHold();

    return () => {
      document.removeEventListener("mousedown", mouseHold);
      document.removeEventListener("mouseup", mouseHold);
    };
  }, []);

  const changePixelColor = (pixel) => {
    if (color !== pixelArray[pixel]) {
      let newPixelArr = [...pixelArray];
      newPixelArr[pixel] = color;

      setPixelArray(newPixelArr);
    }
  };

  return (
    <div class="canva-container">
      <div class="canva">
        {pixelArray.map((_, i) => (
          <Pixel
            key={i}
            drawing={drawing}
            pixel={i}
            pixelColor={pixelArray[i]}
            changePixelColor={changePixelColor}
          />
        ))}
      </div>
    </div>
  );
}
