import { initials, temperatureUnity } from "../constants/types";

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

export const changeInitials = (temperature: temperatureUnity) => {
  switch (temperature) {
    case "celcius":
      return initials.celcius;
    case "fahrenheit":
      return initials.fahrenheit;
    case "kelvin":
      return initials.kelvin;
  }
};

export const zeroTemperatures = (temperature: temperatureUnity) => {
  switch (temperature) {
    case "celcius":
      return 0;
    case "fahrenheit":
      return 32;
    case "kelvin":
      return 273.15;
  }
};

export const minimalTemperatures = (temperature: temperatureUnity) => {
  switch (temperature) {
    case "celcius":
      return -273.15;
    case "fahrenheit":
      return -459;
    case "kelvin":
      return 0;
  }
};

export const maximalTemperatures = (temperature: temperatureUnity) => {
  switch (temperature) {
    case "celcius":
      return 100;
    case "fahrenheit":
      return 212;
    case "kelvin":
      return 373.15;
  }
};
