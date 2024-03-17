import { faker } from "@faker-js/faker";

// Create an empty array to store the products
export const products = [];

// Generate 100 products
for (let i = 0; i < +100; i++) {
  // Create a new product object
  const product = {
    id: i,
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  };

  // Add the product to the products array
  products.push(product);
}

// Print the products array
