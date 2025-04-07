import "./categoryFilter.css";

export default function CategoryFilter({ category, onChangeCategory }) {
  const handleCategoryChange = (event) => {
    onChangeCategory(event.target.value === "전체" ? "" : event.target.value);
  };
  return (
    <section className="restaurant-filter-container">
      <select
        name="category"
        id="category-filter"
        className="restaurant-filter"
        aria-label="음식점 카테고리 필터"
        onChange={handleCategoryChange}
        value={category}
      >
        <option value="전체">전체</option>
        <option value="한식">한식</option>
        <option value="중식">중식</option>
        <option value="일식">일식</option>
        <option value="양식">양식</option>
        <option value="아시안">아시안</option>
        <option value="기타">기타</option>
      </select>
    </section>
  );
}
