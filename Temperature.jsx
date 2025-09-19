import React, { useState } from "react";

function CelsiusInput({ celsius, onCelsiusChange }) {
  return (
    <div>
      <label>Celsius: </label>
      <input value={celsius} onChange={(e) => onCelsiusChange(e.target.value)} />
    </div>
  );
}

function FahrenheitInput({ fahrenheit, onFahrenheitChange }) {
  return (
    <div>
      <label>Fahrenheit: </label>
      <input
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(e.target.value)}
      />
    </div>
  );
}

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  // Convert Celsius to Fahrenheit
  const fahrenheit = celsius ? (celsius * 9) / 5 + 32 : "";

  return (
    <div>
      <CelsiusInput celsius={celsius} onCelsiusChange={setCelsius} />
      <FahrenheitInput
        fahrenheit={fahrenheit}
        onFahrenheitChange={(val) => setCelsius(((val - 32) * 5) / 9)}
      />
    </div>
  );
}

export default TemperatureConverter;