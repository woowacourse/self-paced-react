import styles from "./RestaurantDetailModal.module.css";

function RestaurantDetailModal() {
  return (
    <>
      <h2 className={`${styles.title} text-title`}>음식점 이름</h2>
      <div className={styles.info}>
        <p className={`${styles.description} text-body`}>음식점 소개 문구</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.buttonPrimary} text-caption`}
        >
          닫기
        </button>
      </div>
    </>
  );
}

export default RestaurantDetailModal;
