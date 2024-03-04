import "./App.css";
import About from "./components/About/About";
import Name from "./components/Name/Name";
import Navigation from "./components/Navigation/Navigation";
import Project from "./components/Project/Project";
import ScrollToTopButton from "./components/ScrollBtn/ScrollBtn";
import Skills from "./components/Skills/Skills";
import Type from "./components/Type/Type";

function App() {
  return (
    <>
      <div className="appContainer">
        {/* <ScrollToTopButton/> */}
        <Navigation />
        <Name />
        <Type />
        <About />
        <Skills />
        <p className="projects">Projects</p>
        <Project
          name="Icons 8 Clone"
          date="December 2023"
          description="A clone of the index page of icons 8 home page using HTML and CSS."
          skills={["HTML", "CSS", "GitHub"]}
          link="https://icons-8-zeta.vercel.app/"
          gitlink="https://github.com/elisha-et/Icons-8"
        />
        <Project
          name="Fashion"
          date="February 2024"
          description="An E-Commerce website which made use of local storage to store product's data.
           An admin dashboard is created to add, edit, and delete products which are updated on the home page."
          skills={["HTML", "CSS", "JavaScript", "GitHub"]}
          link="https://github.com/elisha-et/E-Commerce"
          gitlink="https://github.com/elisha-et/E-Commerce"
        />
      </div>
    </>
  );
}

export default App;
