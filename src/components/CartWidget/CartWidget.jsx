import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CartWidget () {
    const {getTotalQuantity} = useCart();

    return (
        <Link to= "/cart" >
            🛒 {getTotalQuantity() > 0 && <span>({getTotalQuantity()})</span>}
        </Link>
    );
}

export default CartWidget;