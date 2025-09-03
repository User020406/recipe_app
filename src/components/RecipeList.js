import React from "react";
import "./RecipeList.css";

function RecipeList() {
  const recipes = [
    { id: 1, title: "スパイシーでおいしいカレー", image: "/curry.jpg" },
    { id: 2, title: "ふわふわ卵と鶏肉の丼ぶり", image: "/oyakodonn.jpg" },
    { id: 3, title: "具だくさんで健康的な味噌汁", image: "/misosoup.jpg" },
    { id: 4, title: "ジューシーな手作りハンバーグ", image: "/Hamburg.jpg" },
  ];

  return (
    <div className="container">
      <h3>おすすめレシピ一覧</h3>
      <div className="grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <img src={recipe.image} alt={recipe.title} className="image" />
            <h4>{recipe.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
