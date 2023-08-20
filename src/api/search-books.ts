import { Book } from "../types";

export async function searchBooks(terms: string): Promise<Book[]> {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(terms)}`
  );
  if (response.status !== 200) {
    throw new Error('Error fetching book search data');
  }
  const dataText = await response.text();
  const data = JSON.parse(dataText);
  console.log(`books`, data.docs);
  return data.docs;
}
