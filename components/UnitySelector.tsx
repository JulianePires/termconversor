import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface UnitySelectorProps {
  placeholder: string;
  onSelectCelcius: () => void;
  onSelectFahrenheint: () => void;
  onSelectKelvin: () => void;
}

export const UnitySelector = ({
  placeholder,
  onSelectCelcius,
  onSelectFahrenheint,
  onSelectKelvin,
}: UnitySelectorProps) => {
  return (
    <Menu>
      <MenuButton w="100%" variant="outline" colorScheme="blue" as={Button}>
        {placeholder}
      </MenuButton>
      <MenuList w="100%">
        <MenuItem onClick={onSelectCelcius}>Celcius</MenuItem>
        <MenuItem onClick={onSelectFahrenheint}>Fahrenheit</MenuItem>
        <MenuItem onClick={onSelectKelvin}>Kelvin</MenuItem>
      </MenuList>
    </Menu>
  );
};
