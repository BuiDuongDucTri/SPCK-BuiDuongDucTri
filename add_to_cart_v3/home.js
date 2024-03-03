// An array of products
const products = [
    {
      name: 'Áo tết đỏ',
      price: '800',
      imageUrl: 'img/aotetdo1.png'
    },
    {
      name: 'Áo tết xanh',
      price: '900',
      imageUrl: 'img/aotetxanh.png'
    },

    // Add more products here...
  ];
  
  // Get the product container element
  const productContainer = document.getElementById('product-container');
  
  // Iterate over the products array and create a product element for each product
  products.forEach(product => {
    // Create the product element
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    
    // Add the product name
    const nameElement = document.createElement('h2');
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);
    
    // Add the product price
    const priceElement = document.createElement('p');
    priceElement.textContent = `$${product.price}`;
    productElement.appendChild(priceElement);
    
    // Add the product image
    const imageElement = document.createElement('img');
    imageElement.src = product.imageUrl;
    imageElement.alt = product.name;
    productElement.appendChild(imageElement);
    
    // Add the product element to the product container
    productContainer.appendChild(productElement);
  });
  