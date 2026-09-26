//la pantalla completa

import {Link} from "react-router-dom";
import {useCart} from "../../context/CartContext"; 
import CartItem from "../CartItem/CartItem";

function Cart () {
    const {cart, removeFromCart, clearCart, getTotalPrice } = useCart();

    if (cart.length === 0) {
        return(
            <div>
                <p>Tu carrito está vacío.</p>
                <Link to = "/">Ver catálogo</Link>
            </div>
        );
    }

    return(
        <div>
            <h2>Carrito de compras</h2>
            {cart.map((item) => (
                <CartItem key = {item.id} item = {item} onRemove={removeFromCart} />
            ))}

            <h3>Total: ${getTotalPrice()}</h3>

            <button onClick={clearCart} >Vaciar carrito</button>
            <Link to= "/checkout">
                <button>Finalizar compra</button>
            </Link>
        </div>
    );
}

export default Cart;