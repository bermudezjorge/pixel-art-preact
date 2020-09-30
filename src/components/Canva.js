import Pixel from "./Pixel";

export default function Canva({ color, drawing, pixelArray, setPixelArray }) {
  return (
    <div class="canva-container">
      <div class="canva">
        {pixelArray.map((_, i) => (
          <Pixel
            key={i}
            color={color}
            drawing={drawing}
            pixelPosition={i}
            pixelArray={pixelArray}
            setPixelArray={setPixelArray}
          />
        ))}
      </div>
    </div>
  );
}
