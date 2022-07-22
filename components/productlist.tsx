import { Card } from "@mui/material";
import React from "react";
import { ProductType } from "../provider/api";
import CardComponent from "./card";

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
              <Card variant="outlined">
                <CardComponent
                  name={product.name}
                  fertiliser_group_name={product.fertiliser_group_name}
                  Manufacturer_name={product.Manufacturer_name as string}
                  categoryName={product.categoryName as string}
                  Country= {product.Country_of_origin as string}
                  img={product.ProductVariants[0].photo}
                />
              </Card>
            </div>
          );
        })}
    </>
  );
};

export default ProductList;
