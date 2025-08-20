import Header from "./components/header";
import Poster from "./components/poster";
import Advantages from "./components/advantages";
import SearchBox from "./components/searchBox";
import Packages from "./components/packages";
import Cta from "./components/cta";
import BlogPosts from "./components/blogPosts";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Poster />
      <Advantages />
      <SearchBox />
      <Packages />
      <Cta />
      <BlogPosts />
      <Footer />
    </>
  );
}
