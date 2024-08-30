// Define an array of product objects
const product = [
    {
      title: "Mukena Premium 1",
      description: "Mukena dengan bahan sutra yang lembut dan nyaman.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://chatgpt.com/?oai-dm=1"
    },
    {
      title: "Mukena Premium 1",
      description: "Mukena dengan bahan sutra yang lembut dan nyaman.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://chatgpt.com/?oai-dm=1"
    },
    // Tambahkan objek produk lainnya di sini sesuai kebutuhan
  ];
  
  // Function to create product card HTML
  function createProduct(product) {
    return `
      <div class="col-md-6">
        <a href="${product.link}" class="card-link">
          <div class="card product-card">
            <img src="${product.imageUrl}" class="card-img-top product-img" alt="${product.title}" />
            <div class="card-body text-center">
              <h5 class="product-title">${product.title}</h5>
              <p class="product-description">${product.description}</p>
              <a href="${product.link}" class="btn btn-outline-primary">View Details</a>
            </div>
          </div>
        </a>
      </div>
    `;
  }
  
  // Function to render all product
  function insertProduct() {
    const container = document.getElementById("best-seller-container");
    container.innerHTML = product.map(createProduct).join("");
  }
  
  // Call insertProduct when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", insertProduct);
  
