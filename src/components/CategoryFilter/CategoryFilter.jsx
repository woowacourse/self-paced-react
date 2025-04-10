import "./CategoryFilter.css";

const categories = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];
function CategoryFilter({ category, onChangeCategory }) {
  return (
    <section className="restaurant-filter-container">
      <select
        className="restaurant-filter"
        value={category}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  );
}

export default CategoryFilter;
