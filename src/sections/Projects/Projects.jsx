import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import inventory from '../../assets/inventory.png';
import ProjectCard from '../../common/ProjectCard';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      id="projects"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className={styles.projectsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[  // List of project data
          {
            src: viberr,
            link: "https://github.com/harsh24y/React-AI-Trip-Planner",
            h3: "AI Trip Planner",
            p: "Travel App",
          },
          {
            src: freshBurger,
            link: "https://github.com/harsh24y/Chat-App",
            h3: "Chat App",
            p: "Real time web chat",
          },
          {
            src: hipsster,
            link: "https://harsh24y.github.io/Todo-App/",
            h3: "ToDo App",
            p: "Responsive Todo app",
          },
          {
            src: fitLift,
            link: "https://github.com/harsh24y/Exploratory-Data-Analysis--EDA",
            h3: "EDA",
            p: "Exploratory-Data-Analysis",
          },
          {
            src: inventory,
            link: "https://github.com/harsh24y/Inventory-Management-System.git",
            h3: "Inventory-Management-System",
            p: "DBMS project",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
