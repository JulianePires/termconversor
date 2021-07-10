import { NextPage } from "next";
import { useState } from "react";

import { Layout } from "../components/Layout";
import { Menu } from "../components/Menu";

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

  function checkCurrentPage(page: string) {
    return page === activePath ? true : false;
  }

  return (
    <Layout title={`TermConversor | ${activePath}`}>
      <Menu
        isCurrentPage={checkCurrentPage}
        switchActivePath={toggleSwitchActivePath}
      />
    </Layout>
  );
};

export default Home;
