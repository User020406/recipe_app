import React, { useState } from "react";

function SearchBar() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div style={styles.search}>
      <input type="text" placeholder="レシピを検索" style={styles.input} />
      <button
        style={{
          ...styles.button,
          backgroundColor: isPressed ? "#2e7d32" : "#4CAF50", // 押した時に色を変える
        }}
        onMouseDown={() => setIsPressed(true)}   // ボタン押下時
        onMouseUp={() => setIsPressed(false)}    // ボタン離した時
        onMouseLeave={() => setIsPressed(false)} // 外に出たら戻す
      >
        検索
      </button>
    </div>
  );
}

const styles = {
  search: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px 0 0 4px",
    outline: "none",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    color: "#fff",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};

export default SearchBar;
