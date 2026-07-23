import Biotech from "../Assets/Images/Biotech.png";
import CSE from "../Assets/Images/cse.png";
import Civil from "../Assets/Images/civil.png";
import ECE from "../Assets/Images/ece.png";
import IT from "../Assets/Images/it.png";
import Mech from "../Assets/Images/mech.png";

const courses = [
  {
    id: "biotechnology",
    title: "B.Tech Biotechnology",
    image: Biotech,
    overview: "A multidisciplinary programme that combines biology, chemistry, and engineering to develop solutions for healthcare, agriculture, food, and sustainability.",
    skills: ["Molecular biology", "Bioprocess engineering", "Laboratory practice", "Research methods"],
    careers: ["Biotechnologist", "Research Associate", "Quality Analyst", "Clinical Research Coordinator"],
  },
  {
    id: "computer-science",
    title: "B.E Computer Science and Engineering",
    image: CSE,
    overview: "A technology-focused programme that prepares students to design reliable software, solve complex problems, and build intelligent digital products.",
    skills: ["Programming", "Data structures", "Cloud computing", "Artificial intelligence"],
    careers: ["Software Engineer", "Data Analyst", "Cloud Engineer", "Full-stack Developer"],
  },
  {
    id: "civil-engineering",
    title: "B.E Civil Engineering",
    image: Civil,
    overview: "A practice-led programme covering the planning, design, construction, and maintenance of safe and sustainable built environments.",
    skills: ["Structural design", "Surveying", "Construction planning", "Sustainable infrastructure"],
    careers: ["Site Engineer", "Structural Designer", "Quantity Surveyor", "Project Engineer"],
  },
  {
    id: "electronics-communication",
    title: "B.E Electronics & Communication Engineering",
    image: ECE,
    overview: "A programme that explores electronic systems, communication networks, embedded devices, and the technologies behind connected products.",
    skills: ["Embedded systems", "Digital electronics", "Communication networks", "VLSI basics"],
    careers: ["Embedded Engineer", "Network Engineer", "Electronics Designer", "Test Engineer"],
  },
  {
    id: "information-technology",
    title: "B.E Information Technology",
    image: IT,
    overview: "A career-ready programme for building, managing, and securing the information systems that power modern organisations.",
    skills: ["Web development", "Database systems", "Cybersecurity", "IT service management"],
    careers: ["IT Consultant", "Systems Analyst", "Cybersecurity Associate", "Database Developer"],
  },
  {
    id: "mechanical-engineering",
    title: "B.E Mechanical Engineering",
    image: Mech,
    overview: "A broad engineering programme focused on the design, manufacturing, automation, and optimisation of machines and mechanical systems.",
    skills: ["CAD modelling", "Manufacturing", "Thermal systems", "Automation basics"],
    careers: ["Design Engineer", "Production Engineer", "Automotive Engineer", "Quality Engineer"],
  },
];

export default courses;
