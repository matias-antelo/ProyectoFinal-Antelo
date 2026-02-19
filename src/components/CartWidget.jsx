const CartWidget = () => {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary position-relative d-flex align-items-center"
    >
      <span className="fs-4">🛒</span>

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
        4
      </span>
    </button>
  );
};

export default CartWidget;
