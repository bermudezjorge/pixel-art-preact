export default function Pixel({
  drawing,
  pixel,
  pixelColor,
  changePixelColor,
}) {
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
