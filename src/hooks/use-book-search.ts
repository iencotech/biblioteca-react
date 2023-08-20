import { useQuery } from "@tanstack/react-query";
import { searchBooks } from "../api";

export function useBookSearch(terms: string) {
  const enabled = Boolean(terms && terms.length > 2);

  return useQuery({
    queryKey: ['search', terms],
    queryFn: () => searchBooks(terms),
    enabled,
  });
}
