import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = () => (
  <>
    <header className={styles.header}>
      <h1>Японская Кухня</h1>
      <HeaderCardButton />
    </header>
    <div className={styles["main-image"]}>
      <img src={sushiImage} alt="Блюда японской кухни" />
    </div>
  </>
);

export default Header;
