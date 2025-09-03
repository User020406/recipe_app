import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function RecipePost() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>レシピ投稿</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button>レシピ保存</button>
          <button>レシピ削除</button>
          <button>レシピ投稿</button>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ width: "200px", height: "150px", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            {image ? (
              <img
                src={image}
                alt="選択した写真"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span>料理の写真</span>
            )}
          </div>
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <input
              type="text"
              placeholder="レシピ名"
              style={{ display: "block", margin: "10px 0", width: "300px" }}
            />
            <textarea
              placeholder="レシピの説明"
              style={{ width: "300px", height: "100px" }}
            />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <textarea
            placeholder="作り方"
            style={{ width: "100%", height: "150px" }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <textarea
            placeholder="コツ・ポイント"
            style={{ width: "100%", height: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipePost;
