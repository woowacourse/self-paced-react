import addButtonImg from "../../../assets/add-button.png";

import styles from "./Header.module.css";

function Header({ onAddRestaurant }) {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.title} text-title`}>점심 뭐 먹지</h1>
      <button
        onClick={onAddRestaurant}
        type="button"
        className={styles.button}
        aria-label="음식점 추가"
      >
        <img src={addButtonImg} alt="음식점 추가" />
      </button>
    </header>
  );
}

export default Header;
