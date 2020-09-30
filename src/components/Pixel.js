import { useState, useEffect } from "preact/hooks";

export default function Pixel({ pixel, pixelColor, changePixelColor }) {
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

  const handleDraw = (type) => {
    if (type === "1px") {
      changePixelColor(pixel);
    } else {
      if (drawing) {
        changePixelColor(pixel);
      }
    }
  };

  return (
    <div
      class="pixel"
      onClick={() => handleDraw("1px")}
      onMouseover={() => handleDraw("+px")}
      style={{
        backgroundColor: pixelColor,
      }}
    ></div>
  );
}
