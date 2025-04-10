import styles from "./BottomModalLayout.module.css";

function BottomModalLayout({ children, onClose }) {
  return (
    <>
      <div className={`${styles.modal} ${styles.open}`}>
        <div className={styles.backdrop} onClick={onClose}></div>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
}

export default BottomModalLayout;
