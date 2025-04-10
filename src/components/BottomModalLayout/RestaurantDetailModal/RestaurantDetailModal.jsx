import styles from "./RestaurantDetailModal.module.css";

function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <>
      <h2 className={`${styles.title} text-title`}>{restaurant.name}</h2>
      <div className={styles.info}>
        <p className={`${styles.description} text-body`}>
          {restaurant.description}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.buttonPrimary} text-caption`}
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </>
  );
}

export default RestaurantDetailModal;
