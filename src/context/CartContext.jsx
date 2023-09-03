import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    console.log(cart);

    const addProducts = (product, quantity) => {
        if (!isInCart(product.id)) {
            setCart(prev => [...prev, {...product, quantity}]);
            setTotalQuantity(prevQuantity => prevQuantity + quantity);
            setTotal(prevTotal => prevTotal + (product.price * quantity));
        } else {
            console.error(`El producto ${product.id}, ya fue agregado`);
        }
    }

    const removeProduct = (productoId) => {
        const productToRemove = cart.find(prod => prod.id === productoId);
        if (productToRemove) {
            setCart(prev => prev.filter(prod => prod.id !== productoId));
            setTotalQuantity(prevQuantity => prevQuantity - productToRemove.quantity);
            setTotal(prevTotal => prevTotal - (productToRemove.price * productToRemove.quantity));
        }
    }

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    

    const isInCart = (productoId) => {
        return cart.some(prod => prod.id === productoId);
    }

    return (
        <CartContext.Provider value={{cart, addProducts, removeProduct, clearCart, totalQuantity, total}} >
            {children}
        </CartContext.Provider>
    )
}
