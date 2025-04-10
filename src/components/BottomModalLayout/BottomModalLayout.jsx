import AddRestaurantModal from "./AddRestaurantModal/AddRestaurantModal";
import RestaurantDetailModal from "./RestaurantDetailModal/RestaurantDetailModal";
import styles from "./BottomModalLayout.module.css";

function BottomModalLayout({ modalName }) {
  return (
    <>
      <div className={`${styles.modal} ${styles.open}`}>
        <div className={styles.backdrop}></div>
        <div className={styles.container}>
          {modalName === "restaurantDetail" && <RestaurantDetailModal />}
          {modalName === "restaurantAdd" && <AddRestaurantModal />}
        </div>
      </div>
    </>
  );
}

export default BottomModalLayout;
