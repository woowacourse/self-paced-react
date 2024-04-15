import categoryKorean from "../assets/category-korean.png";
import categoryChinese from "../assets/category-chinese.png";
import categoryJapanese from "../assets/category-japanese.png";
import categoryWestern from "../assets/category-western.png";
import categoryAsian from "../assets/category-asian.png";
import categoryEtc from "../assets/category-etc.png";

import "./RestaurantListItem.css";

const categoryIcons = {
  한식: categoryKorean,
  중식: categoryChinese,
  일식: categoryJapanese,
  양식: categoryWestern,
  아시안: categoryAsian,
  기타: categoryEtc,
};

export default function RestaurantListItem({ restaurant, onClickItem }) {
  const handleClick = () => onClickItem(restaurant);

  return (
    <li className="restaurant" onClick={handleClick}>
      <div className="restaurant__category">
        <img src={categoryIcons[restaurant.category]} alt={restaurant.category} className="category-icon" />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
        <p className="restaurant__description text-body">{restaurant.description}</p>
      </div>
    </li>
  );
}
