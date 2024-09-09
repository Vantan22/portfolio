const projectsData = [
  {
    id: 1,
    name: "Monoly",
    description: "projects.monoly.description",
    thumbnail: new URL("../assets/projects/monoly.png", import.meta.url).href,
    techStack: ["React.js", "Redux", "Material-UI", "Web Socket"]
  },
  {
    id: 2,
    name: "Sally",
    description: "projects.sally.description",
    thumbnail: new URL("../assets/projects/sally-project.png", import.meta.url).href,
    techStack: ["Java", "Spring Webflux", "MongoDB", "Vuejs"]
  },
  {
    id: 2,
    name: "Simple Task",
    description: "projects.simple-task.description",
    thumbnail: new URL("../assets/projects/simple-task.png", import.meta.url).href,
    techStack: ["ReactJS", "NodeJS", "MongoDB", "Vite", "FireStorage", "Antd"]
  }
];
export default projectsData;
