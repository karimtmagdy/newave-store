import { useCategory } from "@/context/CategoryContext";

const CategoriesList = () => {
  const { categories } = useCategory();

  return (
    <div>
      <h1>CategoriesList</h1>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <div>{category._id}</div>
            <div>{category.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
