import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <Link to="/">
        <button style={styles.button}>マイページ</button>
      </Link>
      <Link to="/post">
        <button style={styles.button}>レシピ投稿</button>
      </Link>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "flex-end", 
    gap: "10px",
    padding: "10px",
  },
  button: { padding: "8px 12px", cursor: "pointer" }
};

export default Navbar;
