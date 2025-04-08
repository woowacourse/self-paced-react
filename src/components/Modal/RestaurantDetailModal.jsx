import "./Modal.css";

function RestaurantList() {
  return (
    <div className="modal">
      <div className="modal-backdrop"></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">음식점 이름</h2>
        <div className="restaurant-info">
          <p className="restaurant-info__description text-body">
            음식점 소개 문구
          </p>
        </div>
        <div className="button-container">
          <button className="button button--primary text-caption">닫기</button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;
