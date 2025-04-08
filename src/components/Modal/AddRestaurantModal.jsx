import "./Modal.css";
import Modal from "./Modal";

import { useState } from "react";
function AddRestaurantModal({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    id: "",
    category: "",
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      id: Date.now(),
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="modal-title text-title">새로운 음식점</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item form-item--required">
          <label htmlFor="category text-caption">카테고리</label>
          <select
            name="category"
            id="category"
            required
            onChange={handleChange}
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
          <label htmlFor="name text-caption">이름</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label htmlFor="description text-caption">설명</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <span className="help-text text-caption">
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </div>

        <div className="button-container">
          <button className="button button--primary text-caption">
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
