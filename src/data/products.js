export const products = [
  { id: "1", name: "Celular Nova X1", price: 450, category: "celulares", stock: 8, description: "Pantalla de 6.5 pulgadas y 128 GB.", image: "https://placehold.co/300x200?text=Nova+X1" },
  { id: "2", name: "Celular Orbit Pro", price: 700, category: "celulares", stock: 5, description: "Cámara triple y carga rápida.", image: "https://placehold.co/300x200?text=Orbit+Pro" },
  { id: "3", name: "Celular Lite S", price: 250, category: "celulares", stock: 0, description: "Económico y con buena batería.", image: "https://placehold.co/300x200?text=Lite+S" },
  { id: "4", name: "Notebook Aero 14", price: 900, category: "notebooks", stock: 4, description: "14 pulgadas, 16 GB de RAM y 512 GB SSD.", image: "https://placehold.co/300x200?text=Aero+14" },
  { id: "5", name: "Notebook Forge 15", price: 1300, category: "notebooks", stock: 3, description: "Pensada para gaming y diseño.", image: "https://placehold.co/300x200?text=Forge+15" },
  { id: "6", name: "Notebook Basic 13", price: 550, category: "notebooks", stock: 10, description: "Liviana, ideal para estudiar.", image: "https://placehold.co/300x200?text=Basic+13" },
  { id: "7", name: "Auriculares Wave", price: 60, category: "accesorios", stock: 20, description: "Bluetooth con cancelación de ruido.", image: "https://placehold.co/300x200?text=Wave" },
  { id: "8", name: "Teclado Click Mecánico", price: 80, category: "accesorios", stock: 12, description: "Teclado mecánico con luces.", image: "https://placehold.co/300x200?text=Click" },
  { id: "9", name: "Mouse Glide", price: 30, category: "accesorios", stock: 15, description: "Mouse inalámbrico ergonómico.", image: "https://placehold.co/300x200?text=Glide" },
];

// Devuelve todos los productos, con una demora de 800 ms (simula una base de datos)
export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 800);
  });
}

// Devuelve solo los productos de una categoría
export function getProductsByCategory(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === categoryId));
    }, 800);
  });
}

//Devuelve un solo producto, buscadolo por id..

export function getProductById(id){
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products.find((products) => products.id === id));
  }, 800);
});
}

