import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projectList = [
    {
      title: "IT Services Management Website",
      description:
        "Developed a web platform allowing users to create and showcase portfolios and client projects.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "PHP", "MySQL"],
      githubLink: "https://github.com/khzouhair/Web_project_Creative_Thinking",
      demoLink: "#",
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Machine Learning Model Design (Random Forest) for Predicting Customer Churn from Telecom Data",
      technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest"],
      githubLink: "https://github.com/khzouhair/Customer-Churn-Analysis-and-Prediction",
      demoLink: "#",
    },
    {
      title: "Web Chatbot",
      description:
        "Simple client-side chatbot with keyword detection, dynamic JavaScript responses, and learning capability by memorizing user-provided answers.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/khzouhair/Web_Chatbot",
      demoLink: "#",
    },
    {
      title: "Geometric Shape Recognition",
      description:
        "Web app with Flask interface for recognizing geometric shapes using machine learning models (SVM, KNN, Random Forest).",
      technologies: ["Python", "Flask", "scikit-learn", "HTML", "CSS"],
      githubLink: "https://github.com/khzouhair/shape-recognition-app",
      demoLink: "#",
    },
    {
  title: "Bleu Céleste Blog",
  description:
    "Personal blog website built with HTML and CSS, featuring a clean layout to display articles, images, and contact information.",
  technologies: ["HTML", "CSS"],
  githubLink: "https://github.com/khzouhair/Project_1",
  demoLink: "#",
},
{
  title: "T-Shirt Showcase Website",
  description:
    "A simple HTML and CSS-based website designed to showcase T-shirts.",
  technologies: ["HTML", "CSS"],
  githubLink: "https://github.com/khzouhair/Project_3",
  demoLink: "#",
},
{
  title: "42cursus - Core Projects",
  description:
    "Selection of foundational projects completed during the 42 Network curriculum at 1337 School.",
  technologies: ["C", "Makefile", "Algorithms", "Linux"],
  githubLink: "https://github.com/khzouhair/1337/tree/main/42cursus",
  demoLink: "#",
},
{
  title: "CRUD JavaScript Project",
  description:
    "Web app demonstrating basic CRUD operations with JavaScript, HTML, and CSS in a simple and interactive interface.",
  technologies: ["JavaScript", "HTML", "CSS"],
  githubLink: "https://github.com/khzouhair/CRUD-JavaScript-project",
  demoLink: "https://khzouhair.github.io/CRUD-JavaScript-project/",
},
];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Mes Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    GitHub Repo →
                  </a>
                  {/*<a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Live Demo →
                  </a>*/}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
