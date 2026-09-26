//Solo muestra... 

import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({item}) {
    const [added, setAdded] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleAdd = (count) => {
         setQuantity(count);
         setAdded(true);
         console.log(`Se agregaron ${count} unidades de ${item.name}`);
    }

    return(
        <div>
            <img src="{item.image}" alt="{item.name" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>

            {item.stock === 0 && <p>Producto sin stock</p>}

            {item.stock > 0 && !added && (
                <ItemCount stock={item.stock} onAdd={handleAdd} />
            )}

            {added && <p>Agregaste {quantity} unidade(es) al carrito </p>}

            </div>
    );
}

export default ItemDetail;