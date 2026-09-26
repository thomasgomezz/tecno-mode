//Busca el producto...

import { useState, useEffect, use } from "react";
import {useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(){
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} =  useParams();

    useEffect(() => {
        setLoading(true);

        getProductById(id).then((data) => {
            setItem(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <p>Cargando producto...</p>
    }

    if (!item) {
        return <p>El producto no existe.</p>
    }
    return <ItemDetail item = {item} />;
}

export default ItemDetailContainer;