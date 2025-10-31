// Revealing Module Pattern
const App = (() => {
  const postsAPI = "https://jsonplaceholder.typicode.com/posts";
  const todosAPI = "https://jsonplaceholder.typicode.com/todos";

  // DOM elements
  const postsContainer = document.getElementById("postsContainer");
  const todosContainer = document.getElementById("todosContainer");
  const fetchPostsBtn = document.getElementById("fetchPostsBtn");
  const fetchTodosBtn = document.getElementById("fetchTodosBtn");
  const errorMessage = document.getElementById("errorMessage");
  const loader = document.getElementById("loading");

  // Common fetch handler
  const fetchData = async (url) => {
    try {
      showLoader(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Server unreachable or invalid response!");
      return await response.json();
    } catch (error) {
      showError(error.message);
      return [];
    } finally {
      showLoader(false);
    }
  };

  // Display Posts
  const displayPosts = (posts) => {
    postsContainer.innerHTML = posts
      .slice(0, 8)
      .map(
        (post) => `
        <div class="card">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `
      )
      .join("");
  };

  // Display Todos
  const displayTodos = (todos) => {
    todosContainer.innerHTML = todos
      .slice(0, 8)
      .map(
        (todo) => `
        <div class="card ${todo.completed ? "todo-completed" : ""}">
          <h4>${todo.title}</h4>
          <p>Status: ${todo.completed ? "✔ Completed" : "❌ Pending"}</p>
        </div>
      `
      )
      .join("");
  };

  // Show Error Message
  const showError = (msg) => {
    errorMessage.textContent = msg;
    errorMessage.classList.remove("hidden");
    setTimeout(() => errorMessage.classList.add("hidden"), 4000);
  };

  // Show/Hide Loader
  const showLoader = (state) => {
    loader.classList[state ? "remove" : "add"]("hidden");
  };

  // Event handlers
  const handleFetchPosts = async () => {
    const posts = await fetchData(postsAPI);
    if (posts.length > 0) displayPosts(posts);
  };

  const handleFetchTodos = async () => {
    const todos = await fetchData(todosAPI);
    if (todos.length > 0) displayTodos(todos);
  };

  // Initialize App
  const init = () => {
    fetchPostsBtn.addEventListener("click", handleFetchPosts);
    fetchTodosBtn.addEventListener("click", handleFetchTodos);
  };

  // Reveal public functions
  return { init };
})();

document.addEventListener("DOMContentLoaded", App.init);
