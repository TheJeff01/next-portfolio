"use client";

import { useState } from "react";
import "./page.css";
import { Images } from "@/components/assets/images/Images";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

function About() {
  const [activeTab, setActiveTab] = useState("experience");

  const skills = {
    frontend: [
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "React", level: 85, icon: "⚛️" },
      { name: "Next.js", level: 80, icon: "🔷" },
      { name: "CSS/SCSS", level: 88, icon: "🎨" },
      { name: "HTML5", level: 92, icon: "🌐" },
    ],
    backend: [
      { name: "Node.js", level: 10, icon: "🟢" },
      { name: "Express.js", level: 10, icon: "🚂" },
    ],
    tools: [
      { name: "Git/GitHub", level: 88, icon: "🐱" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "Postman", level: 85, icon: "📮" },
    ],
  };

  const experience = [
    {
      role: "Junior Frontend Developer",
      company: "InstinctHub",
      period: "2024 - Present",
      location: "Hybrid",
      responsibilities: [
        "Carry out sections of frontend projects",
        "Mentor Students and conduct code reviews",
        "Collaborate with UX/UI designers to implement pixel-perfect designs",
        "Optimize application performance resulting in 40% faster load times",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      role: "SIWES intern (Frontend)",
      company: "InstinctHub",
      period: "2023 - 2023",
      location: "Ikoyi, Lagos",
      responsibilities: [
        "Mentor Students and conduct code reviews",
        "Implemented responsive designs across various devices and browsers",
      ],
      technologies: ["HTML", "CSS", "Javascript"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Coal City University, Enugu",
      period: "2020 - 2024",
      location: "Enugu, Nigeria",
      achievements: [
        "Second class Honours (Upper Division)",
        "Vice President of National Association of Computing Students Coal City University Chapter",
      ],
    },
  ];
  const interests = [
    {
      name: "Open Source",
      icon: "💻",
      description: "Contributing to community projects",
    },
    {
      name: "Anime",
      icon: "💫",
      description: "Binge Watching anime",
    },
    {
      name: "Basketball",
      icon: "🏀",
      description: "Playing basketball",
    },
    {
      name: "Logical Reasoning",
      icon: "🧠",
      description:
        "Solving Mathematics problems, Sudoku and I play chess aswell",
    },
    {
      name: "Music",
      icon: "🎵",
      description:
        "Listening to afrobeat, pop or rap and also discovering new artists",
    },
    {
      name: "Reading",
      icon: "📚",
      description: "Tech blogs, sci-fi novels, and biographies",
    },
  ];

  return (
    <div className="about-page">
      <NavBar />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1>About Me</h1>
              <p className="lead">
                I'm a passionate Frontend developer with over 2 years of
                experience creating digital experiences that make a difference.
                I love turning complex problems into simple, beautiful, and
                intuitive solutions.
              </p>
              <div className="quick-stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">7+</span>
                  <span className="stat-label">Technologies Mastered</span>
                </div>
              </div>
            </div>
            <div className="about-hero-image">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>
                    <img src={Images.jeff} alt="" />
                  </span>
                </div>
                <div className="floating-elements">
                  <div className="floating-item">⚛️</div>
                  <div className="floating-item">🚀</div>
                  <div className="floating-item">💡</div>
                  <div className="floating-item">🎨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          {/* Navigation Tabs */}
          <div className="content-tabs">
            <button
              className={`tab ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
            <button
              className={`tab ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={`tab ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={`tab ${activeTab === "personal" ? "active" : ""}`}
              onClick={() => setActiveTab("personal")}
            >
              Personal
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="experience-content">
                <h2>Professional Experience</h2>
                <div className="timeline">
                  {experience.map((job, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="job-header">
                          <h3>{job.role}</h3>
                          <span className="company">{job.company}</span>
                          <div className="job-meta">
                            <span className="period">{job.period}</span>
                            <span className="location">{job.location}</span>
                          </div>
                        </div>
                        <ul className="responsibilities">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                        <div className="tech-stack">
                          {job.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="skills-content">
                <h2>Technical Skills</h2>
                <div className="skills-categories">
                  <div className="skill-category">
                    <h3>Frontend Development</h3>
                    <div className="skills-grid">
                      {skills.frontend.map((skill, index) => (
                        <div key={index} className="skill-item">
                          <div className="skill-header">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-progress"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3>Backend Development</h3>
                    <div className="skills-grid">
                      {skills.backend.map((skill, index) => (
                        <div key={index} className="skill-item">
                          <div className="skill-header">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-progress"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3>Tools & Technologies</h3>
                    <div className="skills-grid">
                      {skills.tools.map((skill, index) => (
                        <div key={index} className="skill-item">
                          <div className="skill-header">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-progress"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <div className="education-content">
                <h2>Education & Certifications</h2>

                <div className="education-section">
                  <h3>Education</h3>
                  <div className="education-grid">
                    {education.map((edu, index) => (
                      <div key={index} className="education-card">
                        <h4>{edu.degree}</h4>
                        <div className="edu-meta">
                          <span className="school">{edu.school}</span>
                          <span className="period">{edu.period}</span>
                          <span className="location">{edu.location}</span>
                        </div>
                        <ul className="achievements">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Personal Tab */}
            {activeTab === "personal" && (
              <div className="personal-content">
                <h2>Beyond Coding</h2>

                <div className="personal-story">
                  <h3>My Journey</h3>
                  <p>
                    My passion for technology began in my second year at
                    university when I was introduced to Python as part of a
                    course. That initial exposure sparked a deep interest in
                    programming and problem-solving. What started as a classroom
                    assignment quickly grew into a genuine curiosity about how
                    software is built and how it can be used to create real
                    impact.
                  </p>
                  <p>
                    I took things further during my SIWES (Student Industrial
                    Work Experience Scheme) with InstinctHub, where I gained
                    practical experience working on real-world projects,
                    collaborating with teams, and learning best practices in
                    software development. That period was pivotal in shaping my
                    skills and fueling my drive to pursue a career in tech.
                  </p>
                  <p>
                    When I'm not coding, I'm either listening to music, playing
                    basketball, or watching anime. I'm always eager to learn new
                    technologies and collaborate with like-minded individuals
                    who share the same passion for innovation.
                  </p>
                </div>

                <div className="interests-section">
                  <h3>Interests & Hobbies</h3>
                  <div className="interests-grid">
                    {interests.map((interest, index) => (
                      <div key={index} className="interest-card">
                        <div className="interest-icon">{interest.icon}</div>
                        <h4>{interest.name}</h4>
                        <p>{interest.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="values-section">
                  <h3>Core Values</h3>
                  <div className="values-grid">
                    <div className="value-card">
                      <h4>🎯 Quality First</h4>
                      <p>
                        I believe in writing clean, maintainable code that
                        stands the test of time.
                      </p>
                    </div>
                    <div className="value-card">
                      <h4>🤝 Collaboration</h4>
                      <p>
                        Great products are built by great teams working together
                        towards a common goal.
                      </p>
                    </div>
                    <div className="value-card">
                      <h4>📚 Continuous Learning</h4>
                      <p>
                        Technology evolves rapidly, and I'm committed to growing
                        with it.
                      </p>
                    </div>
                    <div className="value-card">
                      <h4>💡 Innovation</h4>
                      <p>
                        I strive to find creative solutions to complex problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
