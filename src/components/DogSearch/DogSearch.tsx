import React, { useState, useEffect } from "react";
import { Box, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, useLocation } from "react-router";
import qs from "qs";



interface Props { }

const DogSearch = (props: Props) => {
  const history = useHistory();

  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push(`/dogs?search=${searchText}`);
  };

  const location = useLocation();
  useEffect(() => {
    const searchParams = qs.parse(location.search.substr(1));
    if (searchParams.search) {
      setSearchText(searchParams.search as string);
    } else {
      setSearchText("");
    }
  }, [location.search]);

  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <form onSubmit={handleFormSubmit}>
        <TextField
          value={searchText}
          onChange={handleInputChange}
          variant="outlined"
          placeholder="Search"
          InputProps={{ endAdornment: <SearchIcon /> }}
        />
      </form>
    </Box>
  );
};

export default DogSearch;
