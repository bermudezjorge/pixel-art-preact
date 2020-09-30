export default function Pixel({
  color,
  drawing,
  pixelPosition,
  pixelArray,
  setPixelArray,
}) {
  const setColor = () => {
    if (color !== pixelArray[pixelPosition])
      setPixelArray((draw) => {
        let newPixelArr = draw;
        newPixelArr[pixelPosition] = color;

        return newPixelArr;
      });
  };

  const handleDraw = (type) => {
    if (type === "1px") {
      setColor();
    } else {
      if (drawing) {
        setColor();
      }
    }
  };

  return (
    <div
      class="pixel"
      onClick={() => handleDraw("1px")}
      onMouseover={() => handleDraw("+px")}
      style={{
        backgroundColor: pixelArray[pixelPosition],
      }}
    ></div>
  );
}
