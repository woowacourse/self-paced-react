import '../css/Modal.css';

function RestaurantDetailModal({ onChangeModal, selectedRestaurant }) {
    const { name, description } = selectedRestaurant;
    return (
        <>
            <h2 className='modal-title text-title'>{name}</h2>
            <div className='restaurant-info'>
                <p className='restaurant-info__description text-body'>{description}</p>
            </div>
            <div className='button-container'>
                <button className='button button--primary text-caption' onClick={() => onChangeModal(false)}>
                    닫기
                </button>
            </div>
        </>
    );
}

export default RestaurantDetailModal;
