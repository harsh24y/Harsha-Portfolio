import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import inventory from '../../assets/inventory.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/harsh24y/React-AI-Trip-Planner"
          h3="AI Trip Planner"
          p="Travel App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/harsh24y/Chat-App"
          h3="Chat App"
          p="Real time web chat"
        />
        <ProjectCard
          src={hipsster}
          link="https://harsh24y.github.io/Todo-App/"
          h3="ToDo App"
          p="Responsive Todo app"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/harsh24y/Exploratory-Data-Analysis--EDA"
          h3="EDA"
          p="Exploratory-Data-Analysis"
          />
          <ProjectCard
            src={inventory}
            link="https://github.com/harsh24y/Inventory-Management-System.git"
            h3="Inventory-Management-System"
            p="DBMS project"
        />
      </div>
    </section>
  );
}

export default Projects;
