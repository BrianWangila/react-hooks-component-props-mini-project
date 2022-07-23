import React from "react";
import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";


function App() {
  return (
    <div className="App">
      <Header/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList/>
    </div>
  );
}

export default App;
