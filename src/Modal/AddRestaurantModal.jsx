import { useState } from "react";
import "./modal.css";

export default function AddRestaurantModal({
  isAddModalOpen,
  onAddRestaurant,
}) {
  const [form, setForm] = useState({
    category: "",
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRestaurant = {
      id: Date.now(),
      ...form,
    };

    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant),
      });

      if (!response.ok) throw new Error("음식점을 추가하지 못했습니다.");

      onAddRestaurant((prevRestaurants) => [...prevRestaurants, newRestaurant]);
      setForm({ category: "", name: "", description: "" });
    } catch (error) {
      console.error(error);
      alert("음식점을 추가하지 못했습니다.");
    }
  };

  return (
    <div className={`modal ${isAddModalOpen ? "modal--open" : ""}`}>
      <div className="modal-backdrop"></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">새로운 음식점</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-item form-item--required">
            <label htmlFor="category" className="text-caption">
              카테고리
            </label>
            <select
              name="category"
              id="category"
              required
              autoComplete="off"
              value={form.category}
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
            <label htmlFor="name" className="text-caption">
              이름
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              autoComplete="organization"
              value={form.name}
              onChange={handleChange}
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
              autoComplete="off"
              value={form.description}
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
      </div>
    </div>
  );
}
