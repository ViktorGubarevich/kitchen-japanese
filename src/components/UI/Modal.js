import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = () => <div className={styles.backdrop}></div>;

const ModalWindow = ({ children }) => (
  <div className={styles.modal}>
    <div className={styles.content}>{children}</div>
  </div>
);

const portalElement = document.getElementById("overlays");

const Modal = ({ children }) => (
  <>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(
      <ModalWindow>{children}</ModalWindow>,
      portalElement
    )}
  </>
);

export default Modal;
