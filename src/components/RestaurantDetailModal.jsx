import "./RestaurantDetailModal.css";

export default function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">{restaurant.name}</h2>
        <div className="restaurant-info">
          <p className="restaurant-info__description text-body">{restaurant.description}</p>
        </div>
        <div className="button-container">
          <button className="button button--primary text-caption" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
