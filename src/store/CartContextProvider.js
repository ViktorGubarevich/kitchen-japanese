import CartContext from "./cart-context";

const CarContextProvider = ({ children }) => {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmoutn: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CarContextProvider;
