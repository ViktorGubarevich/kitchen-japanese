import styles from "./Input.module.css";

const Input = ({ input, label }) => (
  <div className={styles.input}>
    <label htmlFor={input.id}>{label}</label>
    <input {...input} />
  </div>
);

export default Input;
