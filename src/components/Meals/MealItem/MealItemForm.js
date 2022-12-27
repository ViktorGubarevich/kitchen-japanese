import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = ({id}) => {
  return (
    <form className={styles.form}>
      <Input
        label="Количество"
        input={{
          id: id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Добавить</button>
    </form>
  );
};

export default MealItemForm;
