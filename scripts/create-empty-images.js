const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = [
  'public/images/products',
  'public/images'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Product images
const products = [
  'men-tshirt-1',
  'men-jacket-1',
  'men-jeans-1',
  'men-formal-1',
  'women-dress-1',
  'women-blouse-1',
  'women-jeans-1',
  'women-coat-1'
];

// Create empty product images
products.forEach(product => {
  const filepath = path.join('public/images/products', `${product}.jpg`);
  fs.writeFileSync(filepath, '');
  console.log(`Created ${product}`);
});

// Create empty hero image
const heroFilepath = path.join('public/images', 'hero-image.jpg');
fs.writeFileSync(heroFilepath, '');
console.log('Created hero image'); 