import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

function HomePage() {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Navbar />
        <SearchBar />
        <RecipeList />
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex" },
  main: { flex: 1, padding: "20px" }
};

export default HomePage;
