import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import BlogSection from "./components/sections/BlogSection";
import SignupSection from "./components/sections/SignupSection";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="h-screen overflow-y-auto flex flex-col ">
      <Navbar />
      <BlogPost
        imgSrc="/blogpost/appleSearch.jpg"
        type="Latest Post"
        title="A Practical Guide to Apple Search Ads"
        description="Why it's a channel worth exploring to grow your app"
        avatarImg="/avatar/Ellipse.png"
        name="Thomas Petit"
        created_at="June 07, 2022"
      />
      <BlogSection />
      <SignupSection />
      <Footer />
    </div>
  );
}

export default App;
