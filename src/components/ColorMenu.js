import { useEffect, useState } from "preact/hooks";

export default function ColorMenu({ pixelArray, color, setColor }) {
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    let newPalette = [];
    pixelArray.forEach((color) => {
      if (color !== "#ffffff" && newPalette.indexOf(color) === -1) {
        newPalette.push(color);
      }
    });

    setPalette(newPalette);
  });

  const handleChangeColor = ({ target }) => {
    setColor(target.value);
  };

  return (
    <div class="color-menu">
      <h1>Color</h1>
      <label>
        <b>Currect color</b>
        <input type="color" name="" value={color} onInput={handleChangeColor} />
      </label>
      <p onClick={() => setColor("#ffffff")}>Borrar</p>
      <h1>Palette</h1>
      <ul class="palette-container">
        {palette.length > 0 ? (
          palette.map((p) => (
            <li
              class="palette-square"
              key={p}
              style={{ backgroundColor: p }}
              onClick={() => setColor(p)}
            ></li>
          ))
        ) : (
          <p>No palette.</p>
        )}
      </ul>
    </div>
  );
}
