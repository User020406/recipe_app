import React from "react";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3>メニュー</h3>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>さがす</li>
        <li style={styles.menuItem}>レシピ</li>
        <li style={styles.menuItem}>きろく</li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#eee",
    padding: "20px",
    minHeight: "100vh",
    boxSizing: "border-box"
  },
  menu: {
    listStyleType: "none",
    padding: 0,
    marginTop: "20px"
  },
  menuItem: {
    padding: "10px 0",
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background 0.3s",
  }
};

// ホバー効果を追加
styles.menuItem["&:hover"] = {
  background: "#ddd"
};

export default Sidebar;
