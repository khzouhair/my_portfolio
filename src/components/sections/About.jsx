import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingSkills = ["Python", "C", "Java", "PHP", "JavaScript", "Matlab"];
  const webDevSkills = ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "MySQL"];
  const dataScienceSkills = ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"];
  const biSkills = ["Qlik Sense", "Power BI"];
  const aiSkills = ["Machine Learning", "Deep Learning", "AI Concepts"];
  const bigDataSkills = ["SQL", "Power BI", "Hadoop", "ETL", "Data Cleaning", "Data Visualization"];
  const modelingSkills = ["UML", "Merise"];
  const osSkills = ["Windows", "Linux", "macOS"];

  const renderSkillGroup = (title, skills) => (
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/10">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((tech, key) => (
          <span
            key={key}
            className="text-sm text-blue-400 border border-blue-500/50 rounded-lg px-3 py-1 transition duration-200 hover:bg-blue-500/30 hover:text-white hover:shadow-lg cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all text-center">
            <p className="text-gray-300 mb-6">
              I’m a data engineering student passionate about Machine Learning, Data Science, and Artificial Intelligence.
              I love exploring data to uncover insights and build intelligent solutions.
              My goal is to contribute to innovative projects that combine performance, scalability, and real-world impact.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6 mt-8">Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderSkillGroup("Programming Languages", programmingSkills)}
              {renderSkillGroup("Web Development", webDevSkills)}
              {renderSkillGroup("Data Science & Machine Learning", dataScienceSkills)}
              {renderSkillGroup("Business Intelligence Tools", biSkills)}
              {renderSkillGroup("Artificial Intelligence", aiSkills)}
              {renderSkillGroup("Data Engineering & Big Data", bigDataSkills)}
              {renderSkillGroup("Modeling & Design", modelingSkills)}
              {renderSkillGroup("Operating Systems", osSkills)}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
