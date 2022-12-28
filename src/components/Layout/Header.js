import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => (
  <>
    <header className={styles.header}>
      <h1>Японская Кухня</h1>
      <HeaderCartButton onClick={onShowCart} />
    </header>
    <div className={styles["main-image"]}>
      <img src={sushiImage} alt="Блюда японской кухни" />
    </div>
  </>
);

export default Header;
