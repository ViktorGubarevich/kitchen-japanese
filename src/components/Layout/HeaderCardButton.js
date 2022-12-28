import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCardButton.module.css";

const HeaderCardButton = ({ onClick }) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span onClick={onClick}>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  );
};

export default HeaderCardButton;
