import '../css/Header.css';

function Header() {
    return (
        <>
            <header className='gnb'>
                <h1 className='gnb__title text-title'>점심 뭐 먹지</h1>
                <button type='button' className='gnb__button' aria-label='음식점 추가'>
                    <img src='./add-button.png' alt='음식점 추가' />
                </button>
            </header>
        </>
    );
}

export default Header;
