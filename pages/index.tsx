import { NextPage } from "next";
import { useState } from "react";

import { Box } from "@material-ui/core";

import Layout from "../components/Layout";
import Menu from "../components/Menu";
import styles from "../styles/Home.module.scss";

type activePaths = "Home" | "About";

const Home: NextPage = () => {
  const [activePath, setActivePath] = useState<activePaths>("Home");

  function toggleSwitchActivePath() {
    if (activePath === "Home") {
      setActivePath("About");
    } else {
      setActivePath("Home");
    }
  }
  return (
    <Layout title={`TermConversor | ${activePath}`}>
      <Box width="100%">
        <Menu switchActivePath={toggleSwitchActivePath} />
        Olá
      </Box>
    </Layout>
  );
};

export default Home;
