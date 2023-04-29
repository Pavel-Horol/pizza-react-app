import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  const categories = ["All", "Meat", "Vegeterian", "Gril", "Spicy", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                onChangeCategory(index);
              }}
              className={value === index ? "active" : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
