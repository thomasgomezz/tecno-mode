//Formulario final que pide los datos del comprador y confirma la compra

import { useState } from "react";
import  { useNavigate } from "react-router-dom";
import {useCart} from "../../context/CartContext";
import {createOrder} from "../../firebase/config";

function CheckoutForm(){
    const {cart, getTotalPrice, clearCart } = useCart();
    const navigate = useNavigate(); 

    //Estados uno por cada campo del formulario
    const [name, setName] = useState("");
    //const [email, setEmail] = ("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState(null);
    const [saving, setSaving]  = useState(false);

    const handleSubmit = async (event) => {   //Se ejecuta al tocar confirmar compra
        event.preventDefault();
        setSaving(true);

        const order = {
            buyer: {
                name : name,
                phone : phone,
            },
            items : cart.map ((item) => ({
                id: item.id,
                name: item.name,
                prince: item.price,
                quantity: item.quantity,
            })),
            total: getTotalPrice(),
            date: new Date().toString(),
        };

        const newOrderId = await createOrder(order);
        
        setOrderId(newOrderId);
        setSaving(saving);
        clearCart();
    };

    if (orderId) {
        return (
            <div>
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: {orderId}</p>
                 <button onClick={() => navigate("/")}>Volver al catálogo</button>
            </div>
        );
    }

     return (
    <div>
      <h2>Finalizar compra</h2>
      <p>Total a pagar: ${getTotalPrice()}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre y apellido: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Teléfono: </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={saving}>
          {saving ? "Guardando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;

/*

        //por ahora simulamos un id de orden. mas adelante, aca vamos a guardar la orden en firestore y usar el id que nos devuelva

        const fakeOrderId = "ORD-" + Date.now();

        setOrderId(fakeOrderId);
        clearCart();
    };

    if (cart.length === 0 && !orderId) {
        return <p>No hay productos para comprar.</p>
    }

    if (orderId) {
        return(
            <div>
                <h2>¡Gracias por tu compra, {name}!</h2>
                <p>Tu número de orden es: {orderId}</p>
                <button onClick={() => navigate("/")}>Volver al catálogo</button>
            </div>
        );
    }

    return (
        <div>
            <h2>Finalizar compra</h2>
            <p>Total a pagar: ${getTotalPrice()}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre y apellido:</label>
                    <input type="text"
                    value = {name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                <div>
                    <label>Teléfono: </label>
                    <input type="tel" 
                    value ={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    required
                    />
                </div>

                <button type="submit">Confirmar compra</button>
            </form>
        </div>
    );
}

export default CheckoutForm;*/