import asianIcon from "../../../assets/category-asian.png";
import chineseIcon from "../../../assets/category-chinese.png";
import etcIcon from "../../../assets/category-etc.png";
import japaneseIcon from "../../../assets/category-japanese.png";
import koreanIcon from "../../../assets/category-korean.png";
import westernIcon from "../../../assets/category-western.png";

import styles from "./RestaurantList.module.css";

const categoryIcons = {
  한식: koreanIcon,
  중식: chineseIcon,
  일식: japaneseIcon,
  양식: westernIcon,
  아시안: asianIcon,
  기타: etcIcon,
};

function RestaurantList({ restaurants, onClickRestaurant }) {
  return (
    <section className={styles.listContainer}>
      <ul className={styles.restaurantList}>
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            className={styles.restaurantBox}
            onClick={() => onClickRestaurant({ restaurant })}
          >
            <div className={styles.category}>
              <img
                src={categoryIcons[restaurant.category]}
                alt={restaurant.category}
                className="category-icon"
              />
            </div>
            <div className={styles.info}>
              <h3 className={`${styles.name} text-subtitle`}>
                {restaurant.name}
              </h3>
              <p className={`${styles.description} text-body`}>
                {restaurant.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RestaurantList;
