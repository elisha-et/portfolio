import "./App.css";
import About from "./components/About/About";
import Name from "./components/Name/Name";
import Navigation from "./components/Navigation/Navigation";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Type from "./components/Type/Type";

function App() {
  return (
    <>
      <div className="appContainer">
        <Navigation />
        <Name />
        <Type />
        <About />
        <Skills />
        <p className="projects">Projects</p>
        <Project
          name="PlanetHunters"
          date="August 2023"
          description="Python-powered AI model designed to detect Milky Way galactic exoplanets. Utilizing light-brightness data from NASA's Kepler space telescope, this project aims to uncover celestial wonders beyond our solar system. Join the hunt for new worlds and explore the universe with PlanetHunters."
          skills={["Python", "Jupyter Notebook", "GitHub"]}
          link="https://github.com/elisha-et/PlanetHunters"
          gitlink="https://github.com/elisha-et/PlanetHunters"
        />
        <Project
          name="IconicClone"
          date="December 2023"
          description="A replica of the Icons8 website created using HTML and CSS. Explore this project to learn how to replicate the design and functionality of Icons8, a popular platform for free icons, illustrations, and design resources."
          skills={["HTML", "CSS", "GitHub"]}
          link="https://icons-8-zeta.vercel.app/"
          gitlink="https://github.com/elisha-et/IconicClone"
        />
        <Project
          name="LocalMallGenius"
          date="February 2024"
          description="An e-commerce website built with HTML, CSS, and JavaScript, featuring a local storage-based product management system and cart functionality. Explore the admin dashboard to seamlessly add, edit, and delete products, all of which dynamically update on the home page. The cart utilizes local storage to provide a smooth and persistent shopping experience. Dive into this project to learn how to implement local storage in web development and create a robust e-commerce platform."
          skills={["HTML", "CSS", "JavaScript", "GitHub"]}
          link="https://github.com/elisha-et/LocalMallGenius"
          gitlink="https://github.com/elisha-et/LocalMallGenius"
        />
      </div>
    </>
  );
}

export default App;
