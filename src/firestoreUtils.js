import { firestore } from "./firebase";
import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import chair1 from './Components/assets/Featured/chair.png';
import chair2 from './Components/assets/Featured/chair2.png';
import chair3 from './Components/assets/Featured/chair3.png';
import chair4 from './Components/assets/Featured/chair4.png';

import productImage from "./Components/assets/Latest/pic1.png";
import productImage2 from "./Components/assets/Latest/pic2.png";
import productImage3 from "./Components/assets/Latest/pic3.png";
import productImage4 from "./Components/assets/Latest/pic4.png";
import productImage5 from "./Components/assets/Latest/pic5.png";
import productImage6 from "./Components/assets/Latest/pic7.png";

import Tchair1 from './Components/assets/Trending/chair1.png';
import Tchair2 from './Components/assets/Trending/chair2.png';
import Tchair3 from './Components/assets/Trending/chair5.png';
import Tchair4 from './Components/assets/Trending/chair4.png';

import Himage from './Components/assets/Trending/chair6.png';
import Himage2 from './Components/assets/Trending/chair7.png';

import CproductImage from './Components/assets/Categories/chair1.png';
import CproductImage1 from './Components/assets/Categories/chair.png';
import CproductImage2 from './Components/assets/Categories/pic.png';

export const addProductsToFirestore = async (products) => {
  try {
    const productsRef = collection(firestore, 'products');
    const existingDocs = await getDocs(productsRef);
    const existingIds = existingDocs.docs.map(doc => doc.id);
    
    const batchSize = 10;
    for (let i = 0; i < products.length; i += batchSize) {
      const batch = writeBatch(firestore);
      for (let j = i; j < i + batchSize && j < products.length; j++) {
        const product = products[j];
        const { id, name, description, price, imageSrc } = product;

        if (!existingIds.includes(id.toString())) {
          const productDocRef = doc(productsRef, id.toString());
          batch.set(productDocRef, { id: id.toString(), name, description, price, imageSrc });
        }
      }
      await batch.commit();
      console.log(`Batch ${i / batchSize + 1} of products added to Firestore.`);
    }
    console.log('All products added to Firestore!');
  } catch (error) {
    console.error('Error adding products to Firestore: ', error);
  }
};

export const fetchProductsFromFirestore = async () => {
    try {
      const productsRef = collection(firestore, 'products');
      const productSnapshot = await getDocs(productsRef);
      const productList = productSnapshot.docs.map(doc => doc.data());
      return productList;
    } catch (error) {
      console.error('Error fetching products from Firestore: ', error);
      return [];
    }
  };


  export const addLatestProductsToFirestore = async (latestProducts) => {
    try {
      const latestRef = collection(firestore, 'latestProducts');
      const batchSize = 10;
      for (let i = 0; i < latestProducts.length; i += batchSize) {
        const batch = writeBatch(firestore);
        for (let j = i; j < i + batchSize && j < latestProducts.length; j++) {
          const product = latestProducts[j];
          const productDocRef = doc(latestRef, product.id.toString());
          batch.set(productDocRef, product);
        }
        await batch.commit();
        console.log(`Batch ${i / batchSize + 1} of latest products added to Firestore.`);
      }
    } catch (error) {
      console.error('Error adding latest products to Firestore: ', error);
    }
  };
  
  // Function to fetch latest products from Firestore
  export const fetchLatestProductsFromFirestore = async () => {
    try {
      const latestRef = collection(firestore, 'latestProducts');
      const latestSnapshot = await getDocs(latestRef);
      const latestList = latestSnapshot.docs.map(doc => doc.data());
      return latestList;
    } catch (error) {
      console.error('Error fetching latest products from Firestore: ', error);
      return [];
    }
  };
  
  // Function to add Shopex data to Firestore
  export const addShopexDataToFirestore = async (shopexData) => {
    try {
      const shopexRef = collection(firestore, 'shopex');
      const batchSize = 10;
      for (let i = 0; i < shopexData.length; i += batchSize) {
        const batch = writeBatch(firestore);
        for (let j = i; j < i + batchSize && j < shopexData.length; j++) {
          const shopexItem = shopexData[j];
          const shopexDocRef = doc(shopexRef, shopexItem.id.toString());
          batch.set(shopexDocRef, shopexItem);
        }
        await batch.commit();
        console.log(`Batch ${i / batchSize + 1} of Shopex data added to Firestore.`);
      }
    } catch (error) {
      console.error('Error adding Shopex data to Firestore: ', error);
    }
  };
  
  // Function to fetch Shopex data from Firestore
  export const fetchShopexDataFromFirestore = async () => {
    try {
      const shopexRef = collection(firestore, 'shopex');
      const shopexSnapshot = await getDocs(shopexRef);
      const shopexList = shopexSnapshot.docs.map(doc => doc.data());
      return shopexList;
    } catch (error) {
      console.error('Error fetching Shopex data from Firestore: ', error);
      return [];
    }
  };



//Trending Products
export const addTrendingProductsToFirestore = async (trendingProducts) => {
    try {
      const trendingRef = collection(firestore, 'trendingProducts');
      const batchSize = 10;
      
      for (let i = 0; i < trendingProducts.length; i += batchSize) {
        const batch = writeBatch(firestore);
        
        for (let j = i; j < i + batchSize && j < trendingProducts.length; j++) {
          const product = trendingProducts[j];
          const { id, name, description, price, imageSrc } = product;
          
          const productDocRef = doc(trendingRef, id.toString());
          batch.set(productDocRef, { id, name, description, price, imageSrc });
        }
        
        await batch.commit();
        console.log(`Batch ${i / batchSize + 1} of trending products added to Firestore.`);
      }
      
      console.log('All trending products added to Firestore!');
    } catch (error) {
      console.error('Error adding trending products to Firestore: ', error);
    }
  };
  


  export const fetchTrendingProductsFromFirestore = async () => {
    try {
      const trendingRef = collection(firestore, 'trendingProducts');
      const trendingSnapshot = await getDocs(trendingRef);
      const trendingList = trendingSnapshot.docs.map(doc => doc.data());
      return trendingList;
    } catch (error) {
      console.error('Error fetching trending products from Firestore: ', error);
      return [];
    }
  };

  //Horizontal Grid
  export const addHorizontalGridToFirestore = async (horizontalGridData) => {
    try {
      const horizontalRef = collection(firestore, 'horizontalGrid');
      const batchSize = 10;
      
      for (let i = 0; i < horizontalGridData.length; i += batchSize) {
        const batch = writeBatch(firestore);
        
        for (let j = i; j < i + batchSize && j < horizontalGridData.length; j++) {
          const item = horizontalGridData[j];
          const { id, heading, imageSrc } = item;
          
          const itemDocRef = doc(horizontalRef, id.toString());
          batch.set(itemDocRef, { id, heading, imageSrc });
        }
        
        await batch.commit();
        console.log(`Batch ${i / batchSize + 1} of horizontal grid items added to Firestore.`);
      }
      
      console.log('All horizontal grid items added to Firestore!');
    } catch (error) {
      console.error('Error adding horizontal grid items to Firestore: ', error);
    }
  };
  


  export const fetchHorizontalGridFromFirestore = async () => {
    try {
      const horizontalRef = collection(firestore, 'horizontalGrid');
      const horizontalSnapshot = await getDocs(horizontalRef);
      const horizontalList = horizontalSnapshot.docs.map(doc => doc.data());
      return horizontalList;
    } catch (error) {
      console.error('Error fetching horizontal grid from Firestore: ', error);
      return [];
    }
  };


  export const addProductListToFirestore = async (productListData) => {
    try {
      const productListRef = collection(firestore, 'productList');
      const batchSize = 10;
      
      for (let i = 0; i < productListData.length; i += batchSize) {
        const batch = writeBatch(firestore);
        
        for (let j = i; j < i + batchSize && j < productListData.length; j++) {
          const product = productListData[j];
          const { id, name, description, price, imageSrc } = product;
          
          const productDocRef = doc(productListRef, id.toString());
          batch.set(productDocRef, { id, name, description, price, imageSrc });
        }
        
        await batch.commit();
        console.log(`Batch ${i / batchSize + 1} of product list items added to Firestore.`);
      }
      
      console.log('All product list items added to Firestore!');
    } catch (error) {
      console.error('Error adding product list items to Firestore: ', error);
    }
  };
  
  
  export const fetchProductListFromFirestore = async () => {
    try {
      const productListRef = collection(firestore, 'productList');
      const productListSnapshot = await getDocs(productListRef);
      const productList = productListSnapshot.docs.map(doc => doc.data());
      return productList;
    } catch (error) {
      console.error('Error fetching product list from Firestore: ', error);
      return [];
    }
  };

  export const addCategoriesToFirestore = async (categories) => {
    try {
      const categoryRef = collection(firestore, 'categories');
      const batchSize = 10;
  
      for (let i = 0; i < categories.length; i += batchSize) {
        const batch = writeBatch(firestore);
  
        for (let j = i; j < i + batchSize && j < categories.length; j++) {
          const category = categories[j];
          const { id, image, name, price, oldPrice } = category;
  
          // Check if id is defined before using toString()
          if (id !== undefined) {
            const categoryDocRef = doc(categoryRef, id.toString());
            batch.set(categoryDocRef, { id: id.toString(), image, name, price, oldPrice });
          } else {
            console.error('Category id is undefined:', category);
          }
        }
        await batch.commit();
        console.log(`Batch ${i / batchSize + 1} of categories added to Firestore`);
      }
      console.log('All categories added to Firestore!');
    } catch (error) {
      console.error('Error adding categories to Firestore:', error);
    }
  };


  export const fetchCategoriesFromFirestore = async () => {
  try {
    const categoryRef = collection(firestore, 'categories');
    const categorySnapshot = await getDocs(categoryRef);
    const categoryList = categorySnapshot.docs.map(doc => doc.data());
    return categoryList;
  } catch (error) {
    console.error('Error fetching categories from Firestore:', error);
    return [];
  }
};

//Featured Products
export const products = [
    { id: 1, imageSrc: chair1, name: "Cantilever Chair", description: "Y523201", price: 42.00 },
    { id: 2, imageSrc: chair2, name: "Cantilever Chair", description: "Y523201", price: 42.00 },
    { id: 3, imageSrc: chair3, name: "Elegant Chair", description: "Y523202", price: 55.00 },
    { id: 4, imageSrc: chair4, name: "Modern Chair", description: "Y523203", price: 60.00 }
  
];


//Latest Products
export const latestProducts = [
    { id: 1, imageSrc: productImage, name: "Comfort Handy Craft", description: "12345", price: "42.00" },
    { id: 2, imageSrc: productImage2, name: "Comfort Handy Craft", description: "12346", price: "42.00" },
    { id: 3, imageSrc: productImage3, name: "Comfort Handy Craft", description: "12347", price: "42.00" },
    { id: 4, imageSrc: productImage4, name: "Comfort Handy Craft", description: "12348", price: "42.00" },
    { id: 5, imageSrc: productImage5, name: "Comfort Handy Craft", description: "12349", price: "42.00" },
    { id: 6, imageSrc: productImage6, name: "Comfort Handy Craft", description: "12350", price: "42.00" },
  ];
  
 //Shopex data array
  export const shopexData = [
    { id: 1, title: "24/7 Support", text: "No matter the hour, count on us for reliable 24/7 support!" },
    { id: 2, title: "Free Shipping", text: "Get free shipping on all orders above $50." },
    { id: 3, title: "Easy Returns", text: "30-day return policy on all purchases." },
    { id: 4, title: "Secure Payment", text: "100% secure payment with SSL encryption." },
  ];

  //Trending Products
   export const trendingProducts = [
    { id: 1, imageSrc: Tchair1, name: "Cantilever Chair", description: "Y523201", price: 42.00 },
    { id: 2, imageSrc: Tchair2, name: "Cantilever Chair", description: "Y523201", price: 42.00 },
    { id: 3, imageSrc: Tchair3, name: "Elegant Chair", description: "Y523202", price: 55.00 },
    { id: 4, imageSrc: Tchair4, name: "Modern Chair", description: "Y523203", price: 60.00 }
  ];


  //Horizontal Grid
  export const horizontalGridData = [
    { id: 1, heading: "Special Offer", imageSrc: Himage },
    { id: 2, heading: "Best Deals", imageSrc: Himage2 }
  ];


  //Products List
  export const productListData = [
    { id: 1, imageSrc: Himage, name: "Executive Seat Chair", price: "42.00" },
    { id: 2, imageSrc: Himage, name: "Executive Seat Chair", price: "42.00" },

  ];


  export const categories = [
    { id: 1, image: CproductImage, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
    { id: 2, image: CproductImage1, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00"},
    { id: 3, image: CproductImage2, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00"},
    { id: 4, image: CproductImage, name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" }
  ];
  