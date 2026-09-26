//Una fila del carrito

function CartItem({item, onRemove}) {
    const subtotal = item.price * item.quantity;

    return(
        <div>
            <img src={item.image} alt={item.name} width="60" />
            <span>{item.name}</span>
            <span> - Cantidad: {item.quantity}</span>
            <span>- Subtotal: {subtotal}</span>
            <button onClick={() => onRemove(item.id)}>Quitar</button>
        </div>
    );
}

export default CartItem;