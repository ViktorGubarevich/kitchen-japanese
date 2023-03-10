import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import SubmitOrder from "./SubmitOrder";

const Cart = ({ onHideCart }) => {
  const cartContext = useContext(CartContext);
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
  const [isDataSubmitting, setIsDataSubmitting] = useState(false);
  const [wasDataSendingSuccessfull, setWasDataSendingSuccessfull] =
    useState(false);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const orderHandler = () => {
    setIsSubmitOrderAvailable(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsDataSubmitting(true);

    await fetch(
      "https://kitchen-japanese-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedMeals: cartContext.items,
        }),
      }
    );

    setIsDataSubmitting(false);
    setWasDataSendingSuccessfull(true);
    cartContext.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalButtons = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={onHideCart}>
        Закрыть
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Заказать
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {isSubmitOrderAvailable && (
        <SubmitOrder onSubmit={submitOrderHandler} onCancel={onHideCart} />
      )}
      {!isSubmitOrderAvailable && modalButtons}
    </>
  );

  const dataSubmittingCartModalContent = <p>Отправка данных заказа ...</p>;
  const dataWasSubmittedCartModalContent = (
    <>
      <p>Ваш заказ успешно отправлен</p>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onHideCart}>
          Закрыть
        </button>
      </div>
    </>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {!isDataSubmitting && !wasDataSendingSuccessfull && cartModalContent}
      {isDataSubmitting && dataSubmittingCartModalContent}
      {wasDataSendingSuccessfull && dataWasSubmittedCartModalContent}
    </Modal>
  );
};

export default Cart;
