import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = ({onHideCart}) => <div className={styles.backdrop} onClick={onHideCart}></div>;

const ModalWindow = ({ children }) => (
  <div className={styles.modal}>
    <div className={styles.content}>{children}</div>
  </div>
);

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onHideCart }) => (
  <>
    {ReactDOM.createPortal(<Backdrop onHideCart={onHideCart}/>, portalElement)}
    {ReactDOM.createPortal(
      <ModalWindow>{children}</ModalWindow>,
      portalElement
    )}
  </>
);

export default Modal;
