import { FaCode, FaPalette, FaRobot } from "react-icons/fa";
import styles from "./AboutStyles.module.css";

const features = [
  {
    icon: <FaCode className={styles.icon} />,
    title: "Web Development",
    desc: "Building modern websites and apps using React, Next.js, and Node.js.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    icon: <FaPalette className={styles.icon} />,
    title: "UI/UX Design",
    desc: "Designing intuitive, responsive interfaces using Figma and Tailwind CSS.",
    tags: ["Figma", "Tailwind", "Responsive"],
  },
  {
    icon: <FaRobot className={styles.icon} />,
    title: "AI Integration & Tools",
    desc: "Integrating ChatGPT and OpenAI APIs with prompt engineering.",
    tags: ["ChatGPT", "Prompt Engineering", "OpenAI API", "AI Integration"],
  },
];

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Left Section */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            About <span className={styles.headingGradient}>Me</span>
          </h2>
          <p className={styles.paragraph}>
            Passionate Full Stack Web Developer exploring the frontier of GenAI.
          </p>
          <p className={styles.paragraph}>
            I build responsive and modern web apps and explore how GenAI can solve real-world problems.
          </p>
          <p className={styles.paragraph}>
            I'm constantly learning, building, and adapting to evolving tech.
          </p>
          <div className={styles.buttonRow}>
            <a href="#contact" className={styles.resumeBtn}>Get In Touch</a>
          </div>
        </div>
        {/* Right Section */}
        <div className={styles.right}>
          {features.map((feature) => (
            <div className={`${styles.card} glassCard`} key={feature.title}>
              <div className={styles.cardIconTitle}>
                {feature.icon}
                <h3 className={styles.cardTitle}>{feature.title}</h3>
              </div>
              <p className={styles.cardDesc}>{feature.desc}</p>
              <div className={styles.tagRow}>
                {feature.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
