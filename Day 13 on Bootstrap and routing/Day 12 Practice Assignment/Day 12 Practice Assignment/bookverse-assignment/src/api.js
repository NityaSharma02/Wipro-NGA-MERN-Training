// small API helper for fetching books from json-server
const BASE = "http://localhost:3001"; // json-server address (start it with: npx json-server --watch books.json --port 3001)

export async function fetchBooks() {
  const res = await fetch(`${BASE}/books`);
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function fetchBookById(id) {
  const res = await fetch(`${BASE}/books/${id}`);
  if (!res.ok) throw new Error("Failed to fetch book");
  return res.json();
}
