import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCardButton.module.css";

const HeaderCardButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  );
};

export default HeaderCardButton;
