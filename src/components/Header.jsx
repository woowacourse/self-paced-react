import addButton from "../assets/add-button.png";

import "./Header.css";

export default function Header() {
  return (
    <header className="gnb">
      <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
      <button type="button" className="gnb__button" aria-label="음식점 추가">
        <img src={addButton} alt="음식점 추가" />
      </button>
    </header>
  );
}
