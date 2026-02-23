import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../firebase/db";

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const order = {
            buyer: formData,
            items: cart.map(prod => ({ id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity })),
            total: totalPrice(),
            date: new Date().toISOString()
        };

        const id = await createOrder(order);
        setOrderId(id);
        setLoading(false);
        clearCart(); // Vaciamos el carrito después de la compra
    };

    if (loading) return <div className="container mt-5"><h2>Generando orden...</h2></div>;

    if (orderId) {
        return (
            <div className="container mt-5 text-center">
                <h2 className="text-success">¡Compra exitosa!</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
                <p>Guárdalo para realizar el seguimiento de tu pedido.</p>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" name="name" className="form-control" required onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="number" name="phone" className="form-control" required onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" required onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Generar Orden</button>
            </form>
        </div>
    );
};

export default Checkout;