import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface InputSearchProps {
  onSearchChange: (search: string) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export const InputSearch = ({ onSearchChange, onSubmit }: InputSearchProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <Paper
      onSubmit={onSubmit}
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 200,
        height: 40,
        backgroundColor: "transparent",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        borderRadius: "10px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#fff", fontSize: 12 }}
        value={search}
        onChange={handleSearch}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "rgba(255, 255, 255, 0.5)" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
