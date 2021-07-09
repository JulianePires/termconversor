import { Box, BoxProps } from "@material-ui/core";
import styles from "../styles/components/Menu.module.scss";
import Image from "next/image";
import { useTheme } from "@material-ui/core/styles";

import LogoBlue from "../public/logo-blue.gif";

interface menuProps extends BoxProps {
  switchActivePath: () => void;
}

const menu = ({ switchActivePath, ...rest }: menuProps) => {
  const theme = useTheme();
  return (
    <Box
      component="div"
      bgcolor={theme.palette.primary.light}
      boxShadow="10px 10px 5px #141414a2"
      className={styles.navbar}
      {...rest}
      width="100vw"
      height="8rem"
      py="1rem"
    >
      <Image
        src={LogoBlue}
        alt="logo Blue"
        height="100%"
        objectFit="contain"
        className={styles.image}
      />
    </Box>
  );
};

export default menu;
