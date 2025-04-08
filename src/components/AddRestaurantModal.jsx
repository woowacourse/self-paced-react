import '../css/Modal.css';
import { useState } from 'react';

function AddRestaurantModal({ onChangeModal, handleRestaurant }) {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleFomSubmit = (e) => {
        e.preventDefault();

        const addRestaurant = async () => {
            try {
                const newRestaurant = {
                    id: Date.now(),
                    category,
                    name,
                    description,
                };

                await fetch('http://localhost:3000/restaurants', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newRestaurant),
                });

                const response = await fetch('http://localhost:3000/restaurants');
                const updatedRestaurants = await response.json();
                handleRestaurant(updatedRestaurants);
            } catch (error) {
                console.error('레스토랑 추가 중 오류 발생:', error.message);
            }
        };
        addRestaurant();
        onChangeModal(false);
    };
    return (
        <>
            <h2 className='modal-title text-title'>새로운 음식점</h2>
            <form>
                <div className='form-item form-item--required'>
                    <label htmlFor='category text-caption'>카테고리</label>
                    <select name='category' id='category' required onChange={(e) => setCategory(e.target.value)}>
                        <option value=''>선택해 주세요</option>
                        <option value='한식'>한식</option>
                        <option value='중식'>중식</option>
                        <option value='일식'>일식</option>
                        <option value='양식'>양식</option>
                        <option value='아시안'>아시안</option>
                        <option value='기타'>기타</option>
                    </select>
                </div>

                <div className='form-item form-item--required'>
                    <label htmlFor='name text-caption'>이름</label>
                    <input type='text' name='name' id='name' required onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='form-item'>
                    <label htmlFor='description text-caption'>설명</label>
                    <textarea name='description' id='description' cols='30' rows='5' onChange={(e) => setDescription(e.target.value)}></textarea>
                    <span className='help-text text-caption'>메뉴 등 추가 정보를 입력해 주세요.</span>
                </div>

                <div className='button-container'>
                    <button className='button button--primary text-caption' onClick={handleFomSubmit}>
                        추가하기
                    </button>
                </div>
            </form>
        </>
    );
}

export default AddRestaurantModal;
