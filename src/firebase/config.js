import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { products } from "../data/products";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: false,
});

// Sube los productos locales a Firestore (ya la usamos una vez, la dejamos por si hace falta)
export async function seedProducts() {
  console.log("Botón tocado, empezando a cargar...");
  try {
    for (const product of products) {
      await addDoc(collection(db, "products"), product);
    }
    console.log("Productos cargados en Firestore");
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
}

// Devuelve todos los productos de la colección "products"
export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map((docSnap) => ({
    firestoreId: docSnap.id,
    ...docSnap.data(),
  }));
}

// Devuelve solo los productos de una categoría
export async function getProductsByCategory(categoryId) {
  const q = query(collection(db, "products"), where("category", "==", categoryId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnap) => ({
    firestoreId: docSnap.id,
    ...docSnap.data(),
  }));
}

// Devuelve un solo producto, buscándolo por su id
export async function getProductById(id) {
  const q = query(collection(db, "products"), where("id", "==", id));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;
  const docSnap = querySnapshot.docs[0];
  return { firestoreId: docSnap.id, ...docSnap.data() };
}

// Crea una orden nueva en la colección "orders" y devuelve su id
export async function createOrder(order) {
  const docRef = await addDoc(collection(db, "orders"), order);
  return docRef.id;
}