import React from "react";
import Cards from "./Card";
import Footer from "./Footer";
import Header from "./Header";

function Blog() {
  return (
    <div>
      <Header></Header>
      <h1>BLOG</h1>
      <p className="mess">
        Retrouvez ici quelques articles sur le développement web.
      </p>
      <hr className="hr1"></hr>
      <Cards />
      <Footer></Footer>
    </div>
  );
}
export default Blog;