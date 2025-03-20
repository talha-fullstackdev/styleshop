const https = require('https');
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

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
}

// Download product images
products.forEach(product => {
  const url = `https://via.placeholder.com/500x500/f3f4f6/9ca3af?text=${encodeURIComponent(product)}`;
  const filepath = path.join('public/images/products', `${product}.jpg`);
  downloadImage(url, filepath)
    .then(() => console.log(`Downloaded ${product}`))
    .catch(err => console.error(`Error downloading ${product}:`, err));
});

// Download hero image
const heroUrl = 'https://via.placeholder.com/1920x1080/1f2937/ffffff?text=Fashion+Collection';
const heroFilepath = path.join('public/images', 'hero-image.jpg');
downloadImage(heroUrl, heroFilepath)
  .then(() => console.log('Downloaded hero image'))
  .catch(err => console.error('Error downloading hero image:', err)); 