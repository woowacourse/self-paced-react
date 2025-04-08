import { useState } from 'react';
import './AddRestaurantModal.css';
import Modal from '../Modal';

function AddRestaurantModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      id: Date.now().toString(),
      ...formData,
    };
    onSubmit(newRestaurant);
    onClose();
  };

  return (
    <Modal title="새로운 음식점" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">카테고리</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} required>
            {/* ...options... */}
          </select>
        </div>
        {/* ...other form fields... */}
        <button type="submit" className="modal__button">
          추가하기
        </button>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
