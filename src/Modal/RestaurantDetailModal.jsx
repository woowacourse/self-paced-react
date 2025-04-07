import "./modal.css";

export default function RestaurantDetailModal({
  isModalOpen,
  onCloseEvent,
  selectedRestaurant,
}) {
  const handleCloseModal = () => {
    onCloseEvent();
  };

  if (!selectedRestaurant) return null;

  return (
    <div className={`modal ${isModalOpen ? "modal--open" : ""}`}>
      <div className="modal-backdrop"></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">{selectedRestaurant.name}</h2>
        <div className="restaurant-info">
          <p className="restaurant-info__description text-body">
            {selectedRestaurant.description}
          </p>
        </div>
        <div className="button-container">
          <button
            className="button button--primary text-caption"
            onClick={handleCloseModal}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
