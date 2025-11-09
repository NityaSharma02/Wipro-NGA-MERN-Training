export async function fetchBooks() {
  const res = await fetch("http://localhost:3001/books");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
