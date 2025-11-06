// Global variable 
let allProducts = [];
const productGrid = document.getElementById('productGrid');
const statusMessage = document.getElementById('statusMessage');
const categoryFilter = document.getElementById('categoryFilter');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const sortOrderSelect = document.getElementById('sortOrder');


// 1. API Handling

async function fetchProducts() {
    // Show loading state
    statusMessage.classList.remove('alert-danger');
    statusMessage.classList.add('alert-info');
    statusMessage.textContent = 'Displaying a loading message during API calls...';
    productGrid.innerHTML = ''; 

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
            // Throw an error for bad HTTP statuses
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Store the full list, populate filters, and render
        allProducts = data;
        populateCategoryFilter(data);
        applyFilters(); // Initial render
        
        statusMessage.style.display = 'none'; // Hide loading message on success

    } catch (error) {
        // Error Handling: Use of try...catch and fallback UI
        console.error('Fetch failed:', error);
        statusMessage.textContent = `Error fetching data: ${error.message}. Please check the console for details.`;
        statusMessage.classList.remove('alert-info');
        statusMessage.classList.add('alert-danger');
        statusMessage.style.display = 'block'; // Ensure error message is visible
    }
}


// 2. DOM Manipulation: Dynamic product rendering
function renderProducts(products) {
    productGrid.innerHTML = ''; // Clear the grid for re-rendering

    if (products.length === 0) {
        productGrid.innerHTML = '<div class="col-12"><div class="alert alert-warning text-center">No products found matching your filter criteria.</div></div>';
        return;
    }

    products.forEach(product => {
        const cardCol = document.createElement('div');
        cardCol.className = 'col';
        // Dynamically display product data
        cardCol.innerHTML = `
            <div class="card product-card shadow-sm">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title text-truncate" title="${product.title}">${product.title}</h5>
                    <p class="card-text text-muted small">${product.category}</p>
                    <div class="price-tag">₹${product.price.toFixed(2)}</div>
                    <a href="#" class="btn btn-outline-primary mt-2">View Details</a>
                </div>
            </div>
        `;
        productGrid.appendChild(cardCol);
    });
}

function populateCategoryFilter(products) {
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryFilter.appendChild(option);
    });
}

// 3. Filter/Sort Logic
function applyFilters() {
    let filteredProducts = [...allProducts]; 

    // --- A. Filtering ---
    const selectedCategory = categoryFilter.value;
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

    // Filter by Category
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
    }

    // Filter by Price Range
    filteredProducts = filteredProducts.filter(p => 
        p.price >= minPrice && p.price <= maxPrice
    );

    // --- B. Sorting ---
    const sortOrder = sortOrderSelect.value;

    if (sortOrder === 'price_asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price_desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Render the final list (DOM Manipulation)
    renderProducts(filteredProducts);
}

// Initialize the app by fetching data
fetchProducts();