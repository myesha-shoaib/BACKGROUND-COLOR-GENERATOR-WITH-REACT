import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#8b5cf6");

  const [isGradient, setIsGradient] = useState(false);

  const colors = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#10b981",
    "#06b6d4",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
  ];

  const gradients = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #00c6ff, #0072ff)",
    "linear-gradient(135deg, #f093fb, #f5576c)",
    "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    "linear-gradient(135deg, #43e97b, #38f9d7)",
    "linear-gradient(135deg, #30cfd0, #330867)",
  ];

  const changeColor = (newColor) => {
    setColor(newColor);
    setIsGradient(false);
  };

  const changeGradient = (gradient) => {
    setColor(gradient);
    setIsGradient(true);
  };

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    changeColor(colors[randomIndex]);
  };

  const copyColor = async () => {
    try {
      await navigator.clipboard.writeText(color);
      alert("Color copied successfully!");
    } catch {
      alert("Copy failed. Color: " + color);
    }
  };

  return (
    <div
      className="app"
      style={{ background: color }}
    >
      <nav className="navbar">
        <h2 className="logo">✦ BgChanger</h2>

        <span className="nav-text">Creative Background Studio</span>
      </nav>

      <section className="hero">
        <span className="badge">✨ YOUR COLORS, YOUR STYLE</span>

        <h1>
          Change Your
          <br />
          <span>Background.</span>
        </h1>

        <p className="description">
          Explore beautiful colors and gradients.
          <br />
          Make every click feel magical.
        </p>

        <div className="color-card">
          <h3>Choose Your Color</h3>

          <p className="subtitle">
            Select a color and watch the magic happen.
          </p>

          <div className="color-picker">
            {colors.map((item) => (
              <button
                key={item}
                className={`color-circle ${
                  color === item && !isGradient ? "selected" : ""
                }`}
                style={{ background: item }}
                onClick={() => changeColor(item)}
                title={item}
                aria-label={`Select color ${item}`}
              />
            ))}
          </div>

          <div className="current-color">
            <div
              className="preview"
              style={{ background: color }}
            />

            <span className="hex-value">
              {isGradient ? "Gradient Selected" : color.toUpperCase()}
            </span>

            <button className="copy-button" onClick={copyColor}>
              📋 Copy Color
            </button>
          </div>

          <div className="divider"></div>

          <h3>Gradient Backgrounds</h3>

          <div className="gradient-list">
            {gradients.map((gradient, index) => (
              <button
                key={gradient}
                className={`gradient-box ${
                  color === gradient && isGradient ? "selected" : ""
                }`}
                style={{ background: gradient }}
                onClick={() => changeGradient(gradient)}
                title={`Gradient ${index + 1}`}
                aria-label={`Select gradient ${index + 1}`}
              />
            ))}
          </div>

          <button className="random-button" onClick={randomColor}>
            ✨ Generate Random Color
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

