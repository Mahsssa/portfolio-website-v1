import {
  portfolio1,
  portfolio2,
  portfoliosite,
  javascript,
  jquery,
  react,
  redux,
  tailwind,
  bootstrap,
  three,
  leaflet,
  python,
  django,
  postgres,
  postgis,
  geoserver,
  gdal,
  git,
  numpy,
  pandas,
  geopandas,
  folium,
  seaborn,
  matplotlib,
  scikitlearn,
  tensorflow,
} from "../assets";

export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Experience",
    title: "Experience",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

const techs = [
  {
    title: "Front-end",
    skills: [
      {
        name: "JavaScript",
        image: javascript,
      },

      {
        name: "jQuery",
        image: jquery,
      },
      {
        name: "React",
        image: react,
      },
      {
        name: "Redux",
        image: redux,
      },
      {
        name: "Bootstrap",
        image: bootstrap,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },

      {
        name: "Three",
        image: three,
      },
      {
        name: "Leaflet",
        image: leaflet,
      },
    ],
  },
  {
    title: "Back-end",
    skills: [
      {
        name: "Python",
        image: python,
      },
      {
        name: "Django",
        image: django,
      },

      {
        name: "PostgreSQL",
        image: postgres,
      },
      {
        name: "PostGIS",
        image: postgis,
      },
      {
        name: "GeoServer",
        image: geoserver,
      },
      {
        name: "GDAL",
        image: gdal,
      },
      {
        name: "Git",
        image: git,
      },
    ],
  },
  {
    title: "Data Analysis",
    skills: [
      {
        name: "NumPy",
        image: numpy,
      },
      {
        name: "Pandas",
        image: pandas,
      },
      {
        name: "GeoPandas",
        image: geopandas,
      },
      {
        name: "Folium",
        image: folium,
      },
      {
        name: "Seaborn",
        image: seaborn,
      },
      {
        name: "Matplotlib",
        image: matplotlib,
      },
      {
        name: "Scikit-learn",
        image: scikitlearn,
      },
      {
        name: "TensorFlow",
        image: tensorflow,
      },
    ],
  },
];

const experiences = [
  {
    title: "Geospatial Data Analyst",
    company_name: "Freelancer",
    date: "Jan 2023 - Present",
    location: "Mashhad, Iran",
    points: [
      "Geospatial data processing, visualization, and modeling using QGIS, ArcGIS, and geospatial libraries.",
      "Spatio-temporal analysis of environmental and public health issues: air pollution, pandemics, and etc.",
      "Working with clients to understand their problems, and offer solutions and insights.",
      "Informing clients about geospatial concepts so they can make better decisions based on them.",
    ],
  },
  {
    title: "Research Assistent",
    company_name: "University of Tehran",
    date: "Sep 2019 - Dec 2022",
    location: "Tehran, Iran",
    points: [
      "Designing and implementing an algorithm for geocoding Persian textual addresses.",
      "Analyzing the spatio-temporal features of respiratory and cardiovascular hospital visits in study area.",
      "Modeling hospital visits for respiratory and cardiovascular conditions using deep learning.",
      "Building a Web GIS application to communicate information to decision-makers.",
    ],
  },
  {
    title: "Landscape Architect",
    company_name: "Self-employed",
    date: "Mar 2018 - Aug 2019",
    location: "Mashhad, Iran",
    points: [
      "Meeting with clients to discuss their needs, preferences and budget for their landscape project.",
      "Incorporating client preferences, site conditions, and sustainable principles into the design, and prepairing detailed plans and renderings.",
      "Coordinating with other professionals on the project, and managing landscape construction work.",
    ],
  },
  {
    title: "Landscape Architect",
    company_name: "Mashhad Miniature Park",
    date: "May 2017 - Mar 2018",
    location: "Mashhad, Iran",
    points: [
      "Maintaining the park’s landscape design to accommodate seasonal changes and incorporating new features and renovations to existing areas.",
      "Planning and managing landscape projects within budget and identifying cost-saving opportunities.",
      "Working in close collaboration with other departments to ensure projects success.",
    ],
  },
];

const projects = [
  {
    name: "Power Plants Atlas",
    description:
      "Web application designed to provide information about power plants worldwide, making it a valuable tool for understanding power generation infrastructure around the world.",
    tags: [
      {
        name: "Django",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "jQuey",
      },
      {
        name: "REST API",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Leaflet",
      },
    ],
    image: portfolio1,
    source_code_link: "https://github.com/Mahsssa/power-plants-atlas",
    demo_link: "https://github.com/",
  },

  {
    name: "Pandemic Pulse",
    description:
      "Web-based dashboard designed to assist public health managers in monitoring key indicators and trends associated with the influenza pandemic.",
    tags: [
      {
        name: "React",
      },
      {
        name: "MaterialUI",
      },
      {
        name: "Leaflet",
      },
      {
        name: "Nivo",
      },
    ],
    image: portfolio2,
    source_code_link: "https://github.com/Mahsssa/pandemic-pulse",
    demo_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "The website was designed to embody simplicity and minimalism. I have also incorporated 3D elements to keep up with the latest trends in web development.",
    tags: [
      {
        name: "React",
      },
      {
        name: "React-three-fiber",
      },
      {
        name: "TailwindCSS",
      },
    ],
    image: portfoliosite,
    source_code_link: "https://github.com/Mahsssa/portfolio-website-v1",
    demo_link: "",
  },
];

export { techs, experiences, projects };
