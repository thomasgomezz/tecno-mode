//Solo muestra... 

import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";


function ItemDetail({item}) {
    const [added, setAdded] = useState(false);
    const {addToCart} = useCart();


    const handleAdd = (quantity) => {
         addToCart(item, quantity);
         setAdded(true);
    };

    return(
        <div>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>

            {item.stock === 0 && <p>Producto sin stock</p>}

            {item.stock > 0 && !added && (
                <ItemCount stock={item.stock} onAdd={handleAdd} />
            )}

            {added && <p>Producto agregado al carrito</p>}
            </div>
    );
}

export default ItemDetail;