export const products = [
  { id: "1", name: "Celular Nova X1", price: 450, category: "celulares", stock: 8, description: "Pantalla de 6.5 pulgadas y 128 GB.", image: "https://images.unsplash.com/photo-1645680918048-ef0409ead1cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "2", name: "Celular Orbit Pro", price: 700, category: "celulares", stock: 5, description: "Cámara triple y carga rápida.", image: "https://images.unsplash.com/photo-1640936343842-268f9d87e764?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "3", name: "Celular Lite S", price: 250, category: "celulares", stock: 0, description: "Económico y con buena batería.", image: "https://images.unsplash.com/photo-1672413514634-4781b15fd89e?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "4", name: "Notebook Aero 14", price: 900, category: "notebooks", stock: 4, description: "14 pulgadas, 16 GB de RAM y 512 GB SSD.", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "5", name: "Notebook Forge 15", price: 1300, category: "notebooks", stock: 3, description: "Pensada para gaming y diseño.", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "6", name: "Notebook Basic 13", price: 550, category: "notebooks", stock: 10, description: "Liviana, ideal para estudiar.", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "7", name: "Auriculares Wave", price: 60, category: "accesorios", stock: 20, description: "Bluetooth con cancelación de ruido.", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "8", name: "Teclado Click Mecánico", price: 80, category: "accesorios", stock: 12, description: "Teclado mecánico con luces.", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "9", name: "Mouse Glide", price: 30, category: "accesorios", stock: 15, description: "Mouse inalámbrico ergonómico.", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
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

