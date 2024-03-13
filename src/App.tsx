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
          name="MiDOK"
          date="November 2023"
          description="MiDOK is an AI-powered diagnostic co-pilot application aimed at addressing the challenges present in today's healthcare landscape, including the nursing shortage and professional burnout. It assists healthcare professionals by providing targeted lists of potential diagnoses through a unique AI-prompting mechanism, enhancing diagnostic precision without replacing medical expertise."
          skills={["HTML", "CSS", "TypeScript","GitHub"]}
          link="https://github.com/emmanuel-et/MiDOK_Co-Pilot_App-web"
          gitlink="https://github.com/emmanuel-et/MiDOK_Co-Pilot_App-web"
        />
        <Project
          name="Portfolio"
          date="March 2024"
          description="Here, I showcase my skills, projects, and passion for Computer Science. Explore a diverse range of projects reflecting my expertise and dedication. From coding challenges to practical applications, each project highlights my commitment to innovation and excellence in the field."
          skills={["HTML", "CSS", "TypeScript", "React", "GitHub"]}
          link="https://portfolio-phi-nine-66.vercel.app/"
          gitlink="https://github.com/elisha-et/portfolio"
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
        <Project
          name="DashboardHub"
          date="February 2024"
          description="Dive into a collection of visually engaging and insightful dashboards, each meticulously crafted to analyze various datasets. From sports statistics to employee reports, explore the power of data visualization and analytics. This compilation showcases my proficiency in data analysis and dashboard development, offering a glimpse into my passion for leveraging data to drive informed decisions and uncover meaningful insights."
          skills={["Microsoft Excel", "Power BI", "GitHub"]}
          link="https://github.com/elisha-et/DashboardHub"
          gitlink="https://github.com/elisha-et/DashboardHub"
        />
      </div>
    </>
  );
}

export default App;
