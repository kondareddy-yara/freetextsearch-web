import { Card } from "@mui/material";
import React from "react";
import { ProductType } from "../provider/api";
import card from "./card";

type Props = {
  products: ProductType[];
};

const ProductList: React.FC<Props> = ({ products }) => {
  console.log("p", products);
  return (
    <>
      {products &&
        products?.map((product) => {
          return (
            <div key={product.name} style={{ marginBottom: "1rem" }}>
              <Card variant="outlined">{card}</Card>
            </div>
          );
        })}
    </>
  );
};

export default ProductList;
