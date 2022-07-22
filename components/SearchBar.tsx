import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";

const SearchBar: React.FC = () => (
  <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
    <TextField fullWidth />
    <Search
      sx={{
        fontSize: 24,
        height: "48px",
        width: "48px",
        ":hover": {
          cursor: "pointer",
        },
      }}
    />
  </div>
);

export default SearchBar;
