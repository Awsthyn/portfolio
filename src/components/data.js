const formalEducation = [
	{title: "Bioinformatics Specialist",
	periodo: "2021 - 2023",
	institution: "College Of Agricultural Sciences UNR",
	url: "https://fcagr.unr.edu.ar/?page_id=138"
	},
	{title: "Agricultural Engineer",
	periodo: "2012 - 2018",
	institution: "College Of Agricultural Sciences UNR",
	url: "https://fcagr.unr.edu.ar/?page_id=6361"
	},
	{title: "Agricultural Technician",
	periodo: "2002 - 2012",
	institution: "Regional Agrotechnical Center"
	}
]

const courses = [
	{title: "Data Analysis with Python",
	hours: 300,
	institution: "FreeCodeCamp",
	year: 2021,
	url: "https://www.freecodecamp.org/certification/agustin_wagner/data-analysis-with-python-v7"
	},
	{title: "Scientific Computing with Python",
	hours: 300,
	institution: "FreeCodeCamp",
	url: "https://www.freecodecamp.org/certification/agustin_wagner/scientific-computing-with-python-v7",
	year: 2020},
	{title: "FullStack Web Development",
	hours: 1200,
	institution: "HENRY",
	year: 2020,
	url: "https://certificates.soyhenry.com/cert?id=b684fba7-61d8-4886-81f6-181088c3eb72"
	},
	{title: "Front End Libraries",
	hours: 300,
	institution: "FreeCodeCamp",
	year: 2020
	},
	{title: "Javascript Algorithms and Data Structures",
	hours: 300,
	institution: "FreeCodeCamp",
	year: 2020,
	url: "https://www.freecodecamp.org/certification/agustin_wagner/javascript-algorithms-and-data-structures"
	},
	{title: "Responsive Web Design",
	hours: 300,
	institution: "FreeCodeCamp",
	year: 2020,
	url: "https://www.freecodecamp.org/certification/agustin_wagner/responsive-web-design"
	},]




const projects = [
	{
		id: 1,
		title: 'El Potrero',
		description: 'Web App creada para la ONG El Potrero.',
		achievements: [
			'Desarrollo de modelos y consultas SQL usando Range Types de PostgreSQL y Promises (encadenadas y paralelas), evitando sobrecargar la base de datos con registros.',
			'Creación de componentes JSX de forma ágil con React y Bootstrap, permitiendo al equipo disponer de mayor cantidad de tiempo para desarrollar funcionalidades.',
			'Uso de métodos de ciclo de vida de React en clases y componentes funcionales (ComponentDidMount, useEffect).',
			'Uso de react-redux para simplificar la comunicación entre componentes React.',
		],
		repo: "https://github.com/Awsthyn/potrero",
		techs: ['Node', 'Express', 'Sequelize', 'PostgreSQL', 'React', 'Redux', 'Bootstrap', 'Moment', 'Github'],
	},
	{
		id: 2,
		title: 'E-commerce',
		description: 'Web App creada como proyecto final.',
		achievements: [
			'Desarrollador del diagrama entidad-relación.',
			'Desarrollo de estrategias de autenticación (Google Auth0), utilizando Passport JS.',
			'Principal desarrollador del routing en Express (Node JS) y consultas SQL (mediante Sequelize y Promises encadenadas y paralelas).',
			'Uso de react-redux para simplificar la comunicación entre componentes React.',
			'Aplicación de estilo a los componentes mediante Bootstrap.',
        ],
        repo: "https://github.com/Awsthyn/e-commerce",
		techs: [
			'Node',
			'Express',
			'Sequelize',
			'PostgreSQL',
			'Passport',
			'React',
			'Redux',
			'Bootstrap',
			'Moment',
			'Github',
		],
    },
    {
        id: 3,
        title: "PERN ToDo",
        description: "App hecha con el stack PERN",
        achievements: ["Proyecto realizado en FreeCodeCamp, utilizando varias tecnologías.", "Deployada en Heroku.",],
        techs: ["Node", "Express", "PostgreSQL", "React", "Bootstrap", "Heroku", "Github"],
        repo: "https://github.com/Awsthyn/pern-todo",
        deploy: "https://pern-todo-wagner.herokuapp.com/"
	},
	{
        id: 4,
        title: "Markdown Previewer",
        description: "Front End Libraries Certification",
        achievements: ["Proyecto realizado en FreeCodeCamp, utilizando varias tecnologías.", "Deployada en Github.",],
        techs: ["React", "Bootstrap", "Github", "Marked"],
        repo: "https://github.com/Awsthyn/markdown-previewer",
        deploy: "https://awsthyn.github.io/markdown-previewer/"
	},
	{
        id: 5,
        title: "Random Quote Machine",
        description: "Front End Libraries Certification",
        achievements: ["Proyecto realizado en FreeCodeCamp, utilizando varias tecnologías.", "Deployada en Github.",],
        techs: ["React", "Bootstrap", "Github"],
        repo: "https://github.com/Awsthyn/random-quote-machine",
        deploy: "https://awsthyn.github.io/random-quote-machine/"
	},
	{
        id: 6,
        title: "Minesweeper in Ruby on Rails",
        description: "Challenge de una empresa que necesitaba Ruby Developers",
		achievements: ["Challenge resuelto en 2 días, sin tener conocimientos de Ruby ni Ruby on Rails.",
		"La app era muy simple, el reto era resolverlo en un lenguaje que no conocía.",
		 "Deployada en Heroku.",],
        techs: ["Ruby", "Ruby on Rails", "Github", "Heroku"],
        repo: "https://github.com/Awsthyn/ruby_minesweeper",
        deploy: "https://lit-hamlet-49836.herokuapp.com/"
    }
];


module.exports = { projects, formalEducation, courses };
