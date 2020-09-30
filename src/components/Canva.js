import Pixel from "./Pixel";

export default function Canva({ color, pixelArray, setPixelArray }) {
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
            pixel={i}
            pixelColor={pixelArray[i]}
            changePixelColor={changePixelColor}
          />
        ))}
      </div>
    </div>
  );
}
