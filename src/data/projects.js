const PROJECTS = [
  {
    id: "01",
    name: "Exam-Planner",
    tagline: "Automated exam seating arrangement system",
    description:
      "A desktop application that generates room-wise, roll-number-randomized seating charts for college exams. Pulls student and room data from MySQL, exports printable PDFs and slips, and handles real constraints like room capacity and block layout.",
    stack: ["Java", "JavaFX", "MySQL", "Maven", "Apache POI", "PDFBox"],
    role: "Co-built with a teammate — owns the database layer and seating logic",
    link: "https://github.com/MrShivaG/Exam-Planner.git",
    glow: "#5dcaa5",
  },
  {
    id: "02",
    name: "Secure Chat",
    tagline: "End-to-end encrypted desktop chat app",
    description:
      "A JavaFX chat application where every message is encrypted client-side using RSA for key exchange and AES for message payloads, so even the server never sees plaintext.",
    stack: ["Java", "JavaFX", "Client Server ", "Sockets"],
    role: "Solo project",
    link: "https://github.com/MrChaurasiaJi",
    glow: "#7f77dd",
  },
  {
  id: "03",
  name: "Bank Management System",
  tagline: "Desktop banking management application",
  description:
    "A JavaFX desktop application that simulates core banking operations with dedicated Customer, Admin, and Employee portals. It supports account creation, deposits, withdrawals, fund transfers, transaction history, and secure user authentication using file handling for persistent data storage.",
  stack: ["Java", "JavaFX", "File Handling"],
  role: "Solo Project",
  link: "https://github.com/MrChaurasiaJi/bankManagementSystem.git",
  glow: "#d85a30",
},
  {
    id: "04",
    name: "My Tech Syllabus",
    tagline: "Semester-wise syllabus and curated learning solutions",
    description:
      "A web application designed to help students streamline their academic prep. It provides structured, semester-wise syllabus tracking alongside quick solutions, reference materials, and key notes.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Solo project",
    link: "https://github.com/MrChaurasiaJi/my-website.git",
    glow: "#5DCAA5", 
  },
];

export default PROJECTS;
