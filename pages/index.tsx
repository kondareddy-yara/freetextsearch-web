import { Card } from "@mui/material";
import type { NextPage } from "next";
import React from "react";
import card from "../components/card";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Card variant="outlined">{card}</Card>
    </div>
  );
};

export default Home;
