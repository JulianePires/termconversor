import {
  Button,
  Divider,
  Flex,
  HStack,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { NumberInput } from "../components/NumberInput";
import { UnitySelector } from "../components/UnitySelector";
import { temperatureUnity } from "../constants/types";
import {
  changeInitials,
  fromCelcius,
  fromFahrenheit,
  fromKelvin,
  maximalTemperatures,
  minimalTemperatures,
  zeroTemperatures,
} from "../utils/convert";

export const HomeScreen = () => {
  /* INITIAL STATES */
  const [toConvert, setToConvert] = useState<temperatureUnity>("celcius");
  const [initialTemperature, setInitialTemperature] = useState<number>(
    zeroTemperatures(toConvert)
  );
  const [decimalPlaces, setDecimalPlaces] = useState<number>(2);

  /* FINAL STATES */
  const [convertTo, setConvertTo] = useState<temperatureUnity>("fahrenheit");
  const [result, setResult] = useState<string>("");

  /* MAIN FUNCTTON */
  function convertTemperature() {
    switch (toConvert) {
      case "celcius":
        setResult(fromCelcius(initialTemperature, convertTo, decimalPlaces));
        setInitialTemperature(zeroTemperatures(toConvert));
      case "fahrenheit":
        setResult(fromFahrenheit(initialTemperature, convertTo, decimalPlaces));
        setInitialTemperature(zeroTemperatures(toConvert));
      case "kelvin":
        setResult(fromKelvin(initialTemperature, convertTo, decimalPlaces));
        setInitialTemperature(zeroTemperatures(toConvert));
    }
  }

  /* CHANGE STATES FUNCTIONS */

  function handleChangeToConvert(temperature: temperatureUnity) {
    setToConvert(temperature);
  }

  function handleChangeConvertTo(temperature: temperatureUnity) {
    setConvertTo(temperature);
  }

  return (
    <Flex w="100%" h="80vh" alignItems="center" justifyContent="center" p="4">
      <Stack
        spacing={["8", "8", "10", "4"]}
        direction={["column", "column", "column", "row"]}
        wrap={["wrap", "wrap", "wrap", "nowrap"]}
        alignItems="center"
        justifyContent="center"
      >
        <VStack w="100%">
          <Text color="orange">Initial Temperature</Text>
          <NumberInput
            defaultValue={zeroTemperatures(toConvert)}
            min={minimalTemperatures(toConvert)}
            max={maximalTemperatures(toConvert)}
            onChange={(value) => setInitialTemperature(Number(value))}
          />

          <UnitySelector
            placeholder={toConvert}
            onSelectCelcius={() => handleChangeToConvert("celcius")}
            onSelectFahrenheint={() => handleChangeToConvert("fahrenheit")}
            onSelectKelvin={() => handleChangeToConvert("kelvin")}
          />
        </VStack>

        <VStack w="100%">
          <Text color="orange">Decimal Places</Text>
          <NumberInput
            defaultValue={decimalPlaces}
            min={0}
            max={5}
            onChange={(value) => setDecimalPlaces(Number(value))}
          />
        </VStack>

        <VStack w="100%">
          <Text color="orange">Unity to Convert</Text>
          <UnitySelector
            placeholder={convertTo}
            onSelectCelcius={() => handleChangeConvertTo("celcius")}
            onSelectFahrenheint={() => handleChangeConvertTo("fahrenheit")}
            onSelectKelvin={() => handleChangeConvertTo("kelvin")}
          />
        </VStack>

        <Button w="56" colorScheme="orange" onClick={convertTemperature}>
          Convert
        </Button>
        <Stat>
          <StatLabel color="orange">Temperature</StatLabel>
          <StatNumber>{`${result}º${changeInitials(convertTo)}`}</StatNumber>
        </Stat>
      </Stack>
    </Flex>
  );
};
