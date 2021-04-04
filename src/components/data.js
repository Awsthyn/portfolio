const formalEducation = [
  {
    title: "Bioinformatics Specialist",
    periodo: "2021 - 2023",
    institution: "College Of Agricultural Sciences UNR",
    url: "https://fcagr.unr.edu.ar/?page_id=138",
  },
  {
    title: "Agricultural Engineer",
    periodo: "2012 - 2018",
    institution: "College Of Agricultural Sciences UNR",
    url: "https://fcagr.unr.edu.ar/?page_id=6361",
  },
  {
    title: "Agricultural Technician",
    periodo: "2002 - 2012",
    institution: "Regional Agrotechnical Center",
  },
];

const courses = [
  {
    title: "Data Analysis with Python",
    hours: 300,
    institution: "FreeCodeCamp",
    year: 2021,
    url:
      "https://www.freecodecamp.org/certification/agustin_wagner/data-analysis-with-python-v7",
  },
  {
    title: "Scientific Computing with Python",
    hours: 300,
    institution: "FreeCodeCamp",
    url:
      "https://www.freecodecamp.org/certification/agustin_wagner/scientific-computing-with-python-v7",
    year: 2020,
  },
  {
    title: "FullStack Web Development",
    hours: 1200,
    institution: "HENRY",
    year: 2020,
    url:
      "https://certificates.soyhenry.com/cert?id=b684fba7-61d8-4886-81f6-181088c3eb72",
  },
  {
    title: "Front End Libraries",
    hours: 300,
    institution: "FreeCodeCamp",
    year: 2020,
  },
  {
    title: "Javascript Algorithms and Data Structures",
    hours: 300,
    institution: "FreeCodeCamp",
    year: 2020,
    url:
      "https://www.freecodecamp.org/certification/agustin_wagner/javascript-algorithms-and-data-structures",
  },
  {
    title: "Responsive Web Design",
    hours: 300,
    institution: "FreeCodeCamp",
    year: 2020,
    url:
      "https://www.freecodecamp.org/certification/agustin_wagner/responsive-web-design",
  },
];

const javascriptProjects = [
  {
    id: 8,
    title: "Web Scrapping + Cron + MongoDB Challenge",
    description: "Interview Challenge",
    achievements: [
      "Web scrapping using NightmareJS and DOM knowledges.",
      "JWT Token Authentication.",
      "Simple MongoDB queries.",
    ],
    techs: ["MongoDB", "NightmareJS", "Node", "Express", "Passport", "Moment"],
    repo: "https://github.com/Awsthyn/lcfc",
  },
  {
    id: 1,
    title: "El Potrero",
    description: "Web App creada para la ONG El Potrero.",
    achievements: [
      "Desarrollo de modelos y consultas SQL usando Range Types de PostgreSQL y Promises (encadenadas y paralelas), evitando sobrecargar la base de datos con registros.",
      "Creación de componentes JSX de forma ágil con React y Bootstrap, permitiendo al equipo disponer de mayor cantidad de tiempo para desarrollar funcionalidades.",
      "Uso de métodos de ciclo de vida de React en clases y componentes funcionales (ComponentDidMount, useEffect).",
      "Uso de react-redux para simplificar la comunicación entre componentes React.",
    ],
    repo: "https://github.com/Awsthyn/potrero",
    techs: [
      "Node",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "React",
      "Redux",
      "Bootstrap",
      "Moment",
      "Github",
    ],
  },
  {
    id: 2,
    title: "E-commerce",
    description: "Web App creada como proyecto final.",
    achievements: [
      "Desarrollador del diagrama entidad-relación.",
      "Desarrollo de estrategias de autenticación (Google Auth0), utilizando Passport JS.",
      "Principal desarrollador del routing en Express (Node JS) y consultas SQL (mediante Sequelize y Promises encadenadas y paralelas).",
      "Uso de react-redux para simplificar la comunicación entre componentes React.",
      "Aplicación de estilo a los componentes mediante Bootstrap.",
    ],
    repo: "https://github.com/Awsthyn/e-commerce",
    techs: [
      "Node",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "Passport",
      "React",
      "Redux",
      "Bootstrap",
      "Moment",
      "Github",
    ],
  },
  {
    id: 3,
    title: "PERN ToDo",
    description: "App hecha con el stack PERN",
    achievements: [
      "Project developed to obtain FreeCodeCamp Front End Libraries Certification, using several technologies.",
      "Heroku deployment.",
    ],
    techs: [
      "Node",
      "Express",
      "PostgreSQL",
      "React",
      "Bootstrap",
      "Heroku",
      "Github",
    ],
    repo: "https://github.com/Awsthyn/pern-todo",
    deploy: "https://pern-todo-wagner.herokuapp.com/",
  },
  {
    id: 4,
    title: "Markdown Previewer",
    description: "Front End Libraries Certification",
    achievements: [
      "Project developed to obtain FreeCodeCamp Front End Libraries Certification, using several technologies.",
      "GitHub deployment.",
    ],
    techs: ["React", "Bootstrap", "Github", "Marked"],
    repo: "https://github.com/Awsthyn/markdown-previewer",
    deploy: "https://awsthyn.github.io/markdown-previewer/",
  },
  {
    id: 5,
    title: "Random Quote Machine",
    description: "Front End Libraries Certification",
    achievements: [
      "Project developed to obtain FreeCodeCamp Front End Libraries Certification, using several technologies.",
      "GitHub deployment.",
    ],
    techs: ["React", "Bootstrap", "Github"],
    repo: "https://github.com/Awsthyn/random-quote-machine",
    deploy: "https://awsthyn.github.io/random-quote-machine/",
  },
  {
    id: 6,
    title: "Minesweeper in Ruby on Rails",
    description: "Challenge from a company that needed Ruby Developers",
    achievements: [
      "Challenge solved in 2 days, with no knowledge of Ruby or Ruby on Rails.",
      "The app was very simple, the challenge was to solve it in a language I didn't know.",
      "Heroku deployment.",
    ],
    techs: ["Ruby", "Ruby on Rails", "Github", "Heroku"],
    repo: "https://github.com/Awsthyn/ruby_minesweeper",
    deploy: "https://lit-hamlet-49836.herokuapp.com/",
  },

];

const pythonProjects = [  {
    id: 7,
    title: "Bioinformatics Algorithms",
    description: "Rosalind Practices",
    achievements: [
      "Exercises from rosalind.info, a platform for learning bioinformatics through problem solving.",
    ],
    techs: ["Python"],
    repo: "https://github.com/Awsthyn/bioinformatics",
  },
  {
    id: 9,
    title: "Sea Level Predictor",
    description: "Data Analysis with Python Certification",
    achievements: [
      "Dataset analisys of the global average sea level change since 1880.",
      "Use of the data to predict the sea level change through year 2050.",
      'Project developed to obtain "Data Analysis with Python Certification", using several technologies.',
    ],
    techs: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    repo: "https://github.com/Awsthyn/Sea-Level-Predictor",
  },
  {
    id: 10,
    title: "Page View Time Series Visualizer",
    description: "Data Analysis with Python Certification",
    achievements: [
      "Time series data's visualization using a line chart, bar chart, and box plots.",
      "The data visualizations helps to understand the patterns in visits and identify yearly and monthly growth.",
      'Project developed to obtain "Data Analysis with Python Certification", using several technologies.',
    ],
    techs: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    repo: "https://github.com/Awsthyn/Page-View-Time-Series-Visualizer",
  },
  {
    id: 11,
    title: "Medical Data Visualizer",
    description: "Data Analysis with Python Certification",
    achievements: [
      "Visualization and calculations from medical examination data.",
      'Project developed to obtain "Data Analysis with Python Certification", using several technologies.',
    ],
    techs: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    repo: "https://github.com/Awsthyn/Medical-Data-Visualizer",
  },
  {
    id: 12,
    title: "Demographic Data Analyzer",
    description: "Data Analysis with Python Certification",
    achievements: [
      "Demographic data analysis.",
      'Project developed to obtain "Data Analysis with Python Certification", using several technologies.',
    ],
    techs: ["Python", "Pandas"],
    repo: "https://github.com/Awsthyn/Demographic-Data-Analyzer",
  },
  {
    id: 13,
    title: "Mean-Variance-Standard Deviation Calculator",
    description: "Data Analysis with Python Certification",
    achievements: [
      "Function that uses Numpy to output the mean, variance, and standard deviation of the rows, columns, and elements in a 3 x 3 matrix.",
      'Project developed to obtain "Data Analysis with Python Certification", using several technologies.',
    ],
    techs: ["Python", "Numpy"],
    repo: "https://github.com/Awsthyn/Mean-Variance-Standard-Deviation-Calculator",
  },]

module.exports = { javascriptProjects, pythonProjects, formalEducation, courses };
