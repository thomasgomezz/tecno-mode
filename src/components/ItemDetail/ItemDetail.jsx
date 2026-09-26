//Solo muestra... 

function ItemDetail({item}) {
    return(
        <div>
            <img src="{item.image}" alt="{item.name" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>

            {item.stock > 0 ? (
                <p>Stock disponible: {item.stock}</p>
            ) : (
                <p>Producto sin stock</p>
            )}
        </div>
    );
}

export default ItemDetail;