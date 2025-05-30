import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Users,
  TrendingUp,
  Award,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Trophy,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "education",
        "certifications",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Academic Programs International",
      location: "Austin, Texas",
      period: "January 2023 - Present",
      highlights: [
        "Led product strategy for study abroad platform serving 10,000+ students, resulting in 40% increase in user engagement",
        "Drove AI product integration with course recommendation engine, increasing enrollment by 25%",
        "Orchestrated microservices architecture redesign, reducing latency by 60%",
        "Increased test coverage from 10% to 90%, reducing production bugs by 75%",
        "Led product customization strategy resulting in 30% increase in B2B client acquisition",
      ],
    },
    {
      title: "Full Stack JavaScript Developer",
      company: "Empyrean Medical Systems",
      location: "Boca Raton, Florida",
      period: "April 2022 - April 2023",
      highlights: [
        "Built and launched medical platform improving user satisfaction scores by 45%",
        "Integrated AI capabilities improving diagnostic efficiency by 30%",
        "Developed internal tools reducing time-to-result by 40%",
        "Achieved 80% test coverage ensuring HIPAA compliance and 99.9% uptime",
        "Managed serverless architecture migration, reducing costs by 35%",
      ],
    },
    {
      title: "Software Application Developer",
      company: "STRATACACHE",
      location: "Dayton, Ohio",
      period: "January 2022 - April 2022",
      highlights: [
        "Led digital product modernization for Tim Hortons Canada's menu board system across 500+ locations",
        "Managed product upgrade initiative improving performance by 50%",
        "Facilitated stakeholder alignment through weekly product reviews",
      ],
    },
    {
      title: "Web Accessibility Expert",
      company: "accessiBe",
      location: "Tel-Aviv, Israel",
      period: "January 2021 - January 2022",
      highlights: [
        "Drove 25% revenue increase through strategic product positioning",
        "Led automation initiatives reducing manual work by 60%",
        "Built revenue-generating web scraping solutions",
      ],
    },
  ];

  const skills = {
    "Product Strategy": [
      "Product Roadmapping",
      "Market Research",
      "Competitive Analysis",
      "Feature Prioritization",
      "Go-to-Market Strategy",
    ],
    Technical: [
      "JavaScript",
      "Python",
      "Node.js",
      "Typescript",
      "GraphQL",
      "React",
      "API Development",
      "Microservices",
      "AWS",
      "GCP",
      "Docker",
      "AI/ML Integration",
    ],
    Leadership: [
      "Cross-functional Teams",
      "Stakeholder Management",
      "Agile/Scrum",
      "Military Leadership",
    ],
    Analytics: [
      "Product Metrics",
      "KPI Development",
      "User Behavior Analysis",
      "Performance Optimization",
    ],
  };

  const stats = [
    { value: "40%", label: "User Engagement Increase", icon: <TrendingUp /> },
    { value: "10K+", label: "Users Served", icon: <Users /> },
    { value: "75%", label: "Bug Reduction", icon: <Code /> },
    { value: "4+", label: "Years Experience", icon: <Briefcase /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-lg">
                GC
              </div>
              <span className="hidden sm:block font-semibold">
                Gavin Coulson
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Skills",
                "Education",
                "Certifications",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => smoothScroll(item.toLowerCase())}
                  className={`relative text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></span>
                  )}
                </button>
              ))}

              <a
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105 whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/gavin-coulson/"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden bg-slate-900/95 backdrop-blur-md`}
        >
          <div className="px-4 py-2 space-y-1">
            {[
              "Home",
              "About",
              "Experience",
              "Skills",
              "Education",
              "Certifications",
            ].map((item) => (
              <button
                key={item}
                onClick={() => smoothScroll(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 rounded-lg text-gray-300 hover:text-purple-400 hover:bg-slate-800 transition-all"
              >
                {item}
              </button>
            ))}

            <a
              className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gavin-coulson/"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10 pt-16"
      >
        <div className="text-center px-4 max-w-5xl mx-auto">
          {/* Photo Placeholder */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full p-1">
              <img
                src="images/profile.jpeg"
                alt="Gavin Coulson"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-50 animate-pulse"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Gavin Coulson
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4">
            Product Professional, Data & Full Stack Engineer
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Building and scaling digital products that drive measurable business
            growth through technical innovation and strategic leadership
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 border border-slate-700"
              >
                <div className="text-purple-400 mb-1 sm:mb-2 flex justify-center">
                  {React.cloneElement(stat.icon, { size: 20 })}
                </div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JetimLee"
              className="group flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-slate-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-slate-700 transition-all transform hover:scale-105 border border-slate-700"
            >
              <Github
                size={16}
                className="group-hover:text-purple-400 transition-colors"
              />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gavin-coulson/"
              className="group flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-slate-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-slate-700 transition-all transform hover:scale-105 border border-slate-700"
            >
              <Linkedin
                size={16}
                className="group-hover:text-purple-400 transition-colors"
              />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
          </div>

          <button
            onClick={() => smoothScroll("about")}
            className="animate-bounce"
          >
            <ChevronDown
              size={28}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-purple-500/50 transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-purple-500/20 rounded-lg sm:rounded-xl inline-block group-hover:scale-110 transition-transform">
                <Code className="text-purple-400" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Technical Excellence
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                4+ years building scalable products with modern tech stacks
                including React, Node.js, and cloud platforms
              </p>
            </div>

            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-blue-500/20 rounded-lg sm:rounded-xl inline-block group-hover:scale-110 transition-transform">
                <Users className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Leadership
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Military leadership experience combined with cross-functional
                team management in tech environments
              </p>
            </div>

            <div className="group bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-pink-500/50 transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-pink-500/20 rounded-lg sm:rounded-xl inline-block group-hover:scale-110 transition-transform">
                <TrendingUp className="text-pink-400" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Business Impact
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Proven track record of driving 25-40% growth in user engagement
                and revenue through strategic product initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-16 sm:py-20 px-4 bg-slate-800/20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-300">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 flex items-center gap-2 mt-1 sm:mt-2 text-sm sm:text-base">
                      <MapPin size={14} />
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-gray-400 text-xs sm:text-sm bg-slate-700/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 sm:space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 sm:mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-300 text-sm sm:text-base">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Core Competencies
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-purple-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-700/50 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-slate-600/50 hover:text-white transition-all hover:scale-105 transform cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-16 sm:py-20 px-4 bg-slate-800/20 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                degree: "BS Computer Science, Minor in Applied Mathematics",
                school: "Southern New Hampshire University",
                date: "Expected August 2025",
                icon: <GraduationCap className="text-purple-400" />,
              },
              {
                degree: "Full Stack Web Development Program",
                school: "Developer's Institute, Tel-Aviv",
                date: "2021",
                icon: <Code className="text-blue-400" />,
              },
              {
                degree: "BA Japanese Language and Culture, Jewish Studies",
                school: "University of Colorado, Boulder",
                date: "2016",
                icon: <GraduationCap className="text-pink-400" />,
              },
            ].map((edu, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700 hover:border-purple-500/50 transition-all flex items-start gap-3 sm:gap-4"
              >
                <div className="p-2 sm:p-3 bg-slate-700/50 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform">
                  {React.cloneElement(edu.icon, { size: 20 })}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-400">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {edu.school}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-16 sm:py-20 px-4 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Certifications & Recognition
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: "AWS Cloud Practitioner",
                year: "2024",
                icon: "☁️",
                color: "from-orange-400 to-yellow-400",
              },
              {
                title: "Apollo GraphQL Associate Developer",
                year: "2023",
                icon: "🚀",
                color: "from-purple-400 to-pink-400",
              },
              {
                title: "SNHU Honor Roll",
                year: "2024",
                icon: "🏆",
                color: "from-blue-400 to-cyan-400",
              },
              {
                title: "Honor Graduate Developer's Institute",
                year: "2021",
                icon: "🎓",
                color: "from-green-400 to-teal-400",
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700 hover:border-purple-500/50 transition-all transform hover:scale-[1.03] flex items-center gap-3 sm:gap-4"
              >
                <div
                  className={`text-3xl sm:text-4xl group-hover:scale-110 transition-transform`}
                >
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {cert.year}
                  </p>
                </div>
                <Trophy
                  className="text-gray-600 group-hover:text-purple-400 transition-colors"
                  size={18}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 border-t border-slate-800 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            I'm always open to discussing new opportunities and interesting
            projects
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a
              href="https://github.com/JetimLee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-slate-800 rounded-lg sm:rounded-xl hover:bg-slate-700 hover:text-purple-400 transition-all transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gavin-coulson/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-slate-800 rounded-lg sm:rounded-xl hover:bg-slate-700 hover:text-purple-400 transition-all transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} Gavin Coulson. Crafted with passion and React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
