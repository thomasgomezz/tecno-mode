import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../data/products";
import ItemList from "../ItemList/ItemList";


function ItemListContainer(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        const request = categoryId
            ? getProductsByCategory(categoryId)
            : getProducts();

            request.then((data) => {
                setItems(data);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <p>Cargando productos...</p>
    }

    return <ItemList items = {items} />
}

export default ItemListContainer;