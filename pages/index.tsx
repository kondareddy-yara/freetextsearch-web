import type { NextPage } from "next";
import React, { useState } from "react";
import ProductList from "../components/productlist";
import SearchBar from "../components/SearchBar";
import { ProductType } from "../provider/api";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [products, setProducts] = useState([] as ProductType[]);
  return (
    <div className={styles.container}>
      <SearchBar setProudcts={setProducts} />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
