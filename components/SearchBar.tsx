import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useState } from "react";
import fetchProducts, { ProductType } from "../provider/api";

type Props = {
  setProudcts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const SearchBar: React.FC<Props> = ({ setProudcts }) => {
  const [searchText, setSearchText] = useState("yara");
  const searchProducts = async () => {
    const products = await fetchProducts(searchText);
    setProudcts(products as ProductType[]);
    setSearchText("");
  };

  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
      <TextField
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Search
        sx={{
          fontSize: 24,
          height: "48px",
          width: "48px",
          ":hover": {
            cursor: "pointer",
          },
        }}
        onClick={searchProducts}
      />
    </div>
  );
};

export default SearchBar;
