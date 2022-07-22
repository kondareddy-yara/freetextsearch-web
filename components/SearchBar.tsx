import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";

const SearchBar: React.FC = () => (
  <>
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
  </>
);

export default SearchBar;
