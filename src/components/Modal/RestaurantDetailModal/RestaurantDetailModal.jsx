import './RestaurantDetailModal.css';

function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title text-title">{restaurant.name}</h2>
        <div className="restaurant-info">
          <p className="restaurant-info__description text-body">{restaurant.description}</p>
        </div>
        {/* 닫기 버튼 */}
        <div className="button-container">
          <button className="button button--primary text-caption" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailModal;
