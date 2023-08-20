import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { BookCard } from "../components";
import { useBookSearch } from "../hooks";
import React, { useState } from "react";

export function Home() {
  const [ searchTerms, setSearchTerms ] = useState<string>('');
  const [ searchInput, setSearchInput ] = useState<string>('');

  const { data: books } = useBookSearch(searchTerms);

  function onSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  function onSearchClicked() {
    setSearchTerms(searchInput);
  }

  return <>
    <Box m={2}>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Biblioteca
        </Typography>
      </Container>
      <Container>
        <TextField
          id="search"
          label="Escriba el título o el autor"
          variant="outlined"
          fullWidth
          onChange={onSearchInputChange}/>
        <Box mt={1}>
          <Button variant="contained" onClick={() => onSearchClicked()}>Buscar</Button>
        </Box>
      </Container>
      <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {
          books && books.map((book) => (
            <Box key={book.key} mt={2}>
              <BookCard book={book} />
            </Box>
          ))
        }
      </Container>
    </Box>
  </>;
}
