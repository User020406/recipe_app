import React from "react";

function SearchBar() {
  return (
    <div style={styles.search}>
      <input type="text" placeholder="レシピを検索" style={styles.input} />
      <button style={styles.button}>検索</button>
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
    backgroundColor: "#4CAF50",
    color: "#fff",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};


export default SearchBar;
