//Una tarjeta de producto..

import { Link } from "react-router-dom";

function Item ({item}) { 
    return(
        <div>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <Link to={`/item/${item.id}`}>Ver detalle</Link>
        </div>
    );
}

export default Item;

