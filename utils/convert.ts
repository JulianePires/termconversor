import { temperatureUnity } from "../constants/types";

const setDecimalPlaces = (value: number, decimalPlaces: number) => {
  var numberObject = Number(value);
  return numberObject.toFixed(decimalPlaces);
};

export const fromCelcius = (
  celciusTemperature: number,
  to: temperatureUnity,
  decimalPlaces: number = 2
) => {
  switch (to) {
    case "kelvin":
      return setDecimalPlaces(celciusTemperature + 273.15, decimalPlaces);
    case "fahrenheit":
      return setDecimalPlaces(celciusTemperature * 1.8 + 32, decimalPlaces);
    default:
      return setDecimalPlaces(celciusTemperature, decimalPlaces);
  }
};

export const fromFahrenheit = (
  fahrenheitTemperature: number,
  to: temperatureUnity,
  decimalPlaces: number = 2
) => {
  switch (to) {
    case "celcius":
      return setDecimalPlaces(
        (fahrenheitTemperature - 32) / 1.8,
        decimalPlaces
      );
    case "kelvin":
      return setDecimalPlaces(
        (fahrenheitTemperature - 32) / 1.8 + 273.15,
        decimalPlaces
      );
    default:
      return setDecimalPlaces(fahrenheitTemperature, decimalPlaces);
  }
};

export const fromKelvin = (
  kelvinTemperature: number,
  to: temperatureUnity,
  decimalPlaces: number = 2
) => {
  switch (to) {
    case "celcius":
      return setDecimalPlaces(
        (kelvinTemperature - 273.15) * 1.8 + 32,
        decimalPlaces
      );
    case "fahrenheit":
      return setDecimalPlaces(kelvinTemperature - 273.15, decimalPlaces);
    default:
      return setDecimalPlaces(kelvinTemperature, decimalPlaces);
  }
};
