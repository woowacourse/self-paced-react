import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.title} text-title`}>점심 뭐 먹지</h1>
      <button type="button" className={styles.button} aria-label="음식점 추가">
        <img src="./images/add-button.png" alt="음식점 추가" />
      </button>
    </header>
  );
}

export default Header;
