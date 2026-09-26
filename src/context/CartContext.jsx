import { createContext, useState, useContext } from "react";

const CartContext = createContext();    //crea una caja compartida, todavia esta vacia

export function CartProvider({ children }) {    //componente que envuelve a toda la app, q contiene el estado real del carrito, un array de productos
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {   //Busca si ese prod ya está en el carrito, si está, actualiza , si no, lo agrega
    setCart((prevCart) => {
      const alreadyInCart = prevCart.find((cartItem) => cartItem.id === item.id);

      if (alreadyInCart) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity }];
    });
  };

  const removeFromCart = (id) => {    //Saca un prod del carrito por su id, con filter(se queda con todos ls que no sean ese id)
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  const clearCart = () => { //Vacia el carrito
    setCart([]);
  };

  const getTotalQuantity = () => {  //Suma las cantidades de todos los prod, para mostrar en el cartWidget
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => { //Para el total de la compra
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (  //Lo que hace q todo este disponible para los hijos(children)
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotalQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}