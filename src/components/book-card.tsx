import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Book } from "../types";

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  const isbn = book.isbn ? book.isbn[0] : undefined;
  const imageUrl = isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg` : '';

  function onCardClick() {
    window.open(`https://openlibrary.org/books/${book.cover_edition_key}`, '_blank');
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ display: 'flex' }} onClick={() => onCardClick()}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {book.author_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.edition_count} ediciones
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={imageUrl}
          alt={book.title}
        />
      </CardActionArea>
    </Card>
  );
}
