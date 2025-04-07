import './CategoryFilter.css';

function CategoryFilter({ category, onChangeCategory }) {
  const categories = ['전체', '한식', '중식', '일식', '양식', '아시안', '기타'];

  return (
    <section className="restaurant-filter-container">
      <select
        value={category}
        onChange={(e) => onChangeCategory(e.target.value)}
        className="restaurant-filter"
        aria-label="음식점 카테고리 필터"
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </section>
  );
}

export default CategoryFilter;
