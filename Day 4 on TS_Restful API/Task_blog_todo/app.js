// Revealing Module Pattern for clean structure
const AppModule = (() => {
  
  const postsContainer = document.getElementById("posts");
  const todosContainer = document.getElementById("todos");
  const errorMessage = document.getElementById("error-message");

  const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
  const TODOS_API = "https://jsonplaceholder.typicode.com/todos";

  // Generic Fetch Function with Error Handling
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      showError(`Failed to fetch data: ${error.message}`);
      return null;
    }
  };

  // Display Posts
  const displayPosts = (posts) => {
    if (!posts) return;
    postsContainer.innerHTML = posts
      .slice(0, 10) // Display first 10 for neatness
      .map(post => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `)
      .join('');
  };

  // Display Todos
  const displayTodos = (todos) => {
    if (!todos) return;
    todosContainer.innerHTML = todos
      .slice(0, 10)
      .map(todo => `
        <div class="todo ${todo.completed ? 'completed' : ''}">
          <input type="checkbox" ${todo.completed ? 'checked' : ''} disabled>
          ${todo.title}
        </div>
      `)
      .join('');
  };

  // Show error messages on screen
  const showError = (msg) => {
    errorMessage.textContent = msg;
  };

  // Initialize App
  const init = async () => {
    const posts = await fetchData(POSTS_API);
    const todos = await fetchData(TODOS_API);
    displayPosts(posts);
    displayTodos(todos);
  };

  // Revealing public methods
  return {
    init
  };
})();

// Start the app
document.addEventListener("DOMContentLoaded", AppModule.init);
