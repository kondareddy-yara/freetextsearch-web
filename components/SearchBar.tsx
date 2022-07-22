import { debounce } from "@material-ui/core";
import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import fetchProducts, { ProductType } from "../provider/api";

type Props = {
  setProudcts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const SearchBar: React.FC<Props> = ({ setProudcts }) => {
  const [searchText, setSearchText] = useState("");

  const debounceSearch = useCallback(
    debounce((query: string, cb: (query: string) => Promise<void>) => {
      cb(query);
    }, 500),
    []
  );

  useEffect(() => {
    const fetchProductsData = async (searchText: string) => {
      setProudcts((await fetchProducts(searchText)) as ProductType[]);
    };
    searchText && debounceSearch(searchText, fetchProductsData);
  }, [searchText, debounceSearch, setProudcts]);

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
