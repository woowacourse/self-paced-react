import { useState } from "react";
import "./AddRestaurantModal.css";

function AddRestaurantModal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    const newRestaurant = {
      id: Date.now(),
      name,
      description,
      category,
    };

    onAdd(newRestaurant);
    onClose();
  };

  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">새로운 음식점</h2>

        <form onSubmit={handleAdd}>
          <div className="form-item form-item--required">
            <label htmlFor="category" className="text-caption">
              카테고리
            </label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">선택해 주세요</option>
              <option value="한식">한식</option>
              <option value="중식">중식</option>
              <option value="일식">일식</option>
              <option value="양식">양식</option>
              <option value="아시안">아시안</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <div className="form-item form-item--required">
            <label htmlFor="name" className="text-caption">
              이름
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="description" className="text-caption">
              설명
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="help-text text-caption">
              메뉴 등 추가 정보를 입력해 주세요.
            </span>
          </div>

          <div className="button-container">
            <button
              type="submit"
              className="button button--primary text-caption"
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRestaurantModal;
