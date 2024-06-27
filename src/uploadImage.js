// // src/uploadImages.js
// const { db, storage } = require('./firebase');
// const path = require('path');
// const fs = require('fs');

// const images = [
//   { file: path.resolve(__dirname, '../../assets/Featured/chair.png'), title: "Cantilever Chair", code: "Y523201", price: "42.00" },
//   { file: path.resolve(__dirname, '../../assets/Featured/chair2.png'), title: "Cantilever Chair", code: "Y523201", price: "42.00" },
//   { file: path.resolve(__dirname, '../../assets/Featured/chair3.png'), title: "Elegant Chair", code: "Y523202", price: "55.00" },
//   { file: path.resolve(__dirname, '../../assets/Featured/chair4.png'), title: "Modern Chair", code: "Y523203", price: "60.00" }
// ];

// const uploadImage = async () => {
//   for (const image of images) {
//     const fileContent = fs.readFileSync(image.file);
//     const blob = new Blob([fileContent], { type: 'image/png' });
//     const storageRef = storage.ref();
//     const fileRef = storageRef.child(`images/${image.title.replace(/\s+/g, '_').toLowerCase()}.png`);
//     await fileRef.put(blob);
//     const fileUrl = await fileRef.getDownloadURL();

//     await db.collection('products').add({
//       image: fileUrl,
//       title: image.title,
//       code: image.code,
//       price: image.price
//     });
//     console.log(`Uploaded ${image.title}`);
//   }
// };

// uploadImage().then(() => console.log('All images uploaded')).catch(console.error);
