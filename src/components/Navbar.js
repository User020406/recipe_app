import React from "react";

function Navbar() {
  return (
    <div style={styles.nav}>
      <button style={styles.button}>マイページ</button>
      <button style={styles.button}>レシピ投稿</button>
    </div>
  );
}

const styles = {
  nav: { display: "flex", justifyContent: "flex-end", marginBottom: "20px" },
  button: { marginLeft: "10px", padding: "10px", background: "#ddd", border: "none" }
};

export default Navbar;
