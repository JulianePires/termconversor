import {
  NumberInput as ChakraNumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

interface NumberInputProps {
  min: number;
  max: number;
  onChange: (temperature: string) => void;
  defaultValue: number;
}

export const NumberInput = ({
  min,
  max,
  defaultValue,
  onChange,
}: NumberInputProps) => {
  return (
    <ChakraNumberInput
      defaultValue={defaultValue}
      min={min}
      max={max}
      onChange={onChange}
      color="orange.500"
      variant="flushed"
      allowMouseWheel
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
};
