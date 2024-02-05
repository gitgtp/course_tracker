 const coursedata = {
  javascriptTopics: [
    {
      category: "JavaScript Basics",
      topics: [
        "Introduction to JavaScript",
        "JavaScript Variables",
        "JavaScript Data Types",
        "JavaScript Operators",
        "JavaScript Control Flow (if, else, switch)",
        "JavaScript Loops (for, while, do-while)",
      ],
    },
    {
      category: "JavaScript Functions",
      topics: [
        "JavaScript Functions",
        "Function Declarations vs Expressions",
        "JavaScript Arrow Functions",
        "JavaScript Closures",
        "JavaScript Callback Functions",
      ],
    },
    {
      category: "JavaScript Objects",
      topics: [
        "Introduction to JavaScript Objects",
        "JavaScript Object Properties",
        "JavaScript Object Methods",
        "JavaScript Prototypes and Inheritance",
        "JavaScript ES6 Classes",
      ],
    },
    {
      category: "JavaScript Arrays",
      topics: [
        "Introduction to JavaScript Arrays",
        "JavaScript Array Methods",
        "JavaScript Iterating Arrays",
        "JavaScript Array Map, Filter, and Reduce",
      ],
    },
    {
      category: "Asynchronous JavaScript",
      topics: [
        "Introduction to Asynchronous JavaScript",
        "JavaScript Callbacks",
        "JavaScript Promises",
        "JavaScript Async/Await",
      ],
    },
    {
      category: "Modern JavaScript (ES6+)",
      topics: [
        "Introduction to ES6+ Features",
        "JavaScript let, const",
        "JavaScript Template Literals",
        "JavaScript Destructuring",
        "JavaScript Spread and Rest",
      ],
    },
  ],

  HTMLTopics: [
    {
      category: "HTML Basics",
      topics: [
        "Introduction to HTML",
        "HTML Document Structure",
        "HTML Headings and Paragraphs",
        "HTML Links",
        "HTML Images",
        "HTML Lists",
        "HTML Forms",
        "HTML Tables",
      ],
    },
    {
      category: "HTML Semantic Elements",
      topics: [
        "HTML Semantic Elements Overview",
        "HTML Header and Footer",
        "HTML Nav and Article",
        "HTML Section and Aside",
        "HTML Figure and Figcaption",
      ],
    },
    {
      category: "HTML Multimedia",
      topics: ["HTML Audio", "HTML Video", "HTML Canvas"],
    },
    {
      category: "HTML Advanced Topics",
      topics: [
        "HTML SVG",
        "HTML Drag and Drop",
        "HTML Geolocation",
        "HTML Web Storage (localStorage, sessionStorage)",
        "HTML Web Workers",
      ],
    },
    {
      category: "HTML5 APIs",
      topics: [
        "Introduction to HTML5 APIs",
        "HTML5 Geolocation API",
        "HTML5 Web Storage API",
        "HTML5 Web Workers API",
        "HTML5 Drag and Drop API",
      ],
    },
  ],

  cssTopics: [
    {
      category: "CSS Basics",
      topics: [
        "Introduction to CSS",
        "CSS Selectors",
        "CSS Box Model",
        "CSS Display Property",
        "CSS Positioning",
        "CSS Float",
        "CSS Flexbox",
        "CSS Grid",
      ],
    },
    {
      category: "CSS Typography",
      topics: [
        "CSS Fonts",
        "CSS Text Properties",
        "CSS Colors",
        "CSS Backgrounds",
      ],
    },
    {
      category: "CSS Layout",
      topics: [
        "CSS Margins and Padding",
        "CSS Borders",
        "CSS Outline",
        "CSS Overflow",
        "CSS Positioning",
        "CSS Float",
        "CSS Flexbox",
        "CSS Grid",
      ],
    },
    {
      category: "CSS Advanced Topics",
      topics: [
        "CSS Transitions",
        "CSS Animations",
        "CSS Transformations",
        "CSS Variables",
        "CSS Media Queries",
      ],
    },
    {
      category: "CSS Preprocessors",
      topics: [
        "Introduction to CSS Preprocessors",
        "Sass Basics",
        "Less Basics",
        "Stylus Basics",
      ],
    },
  ],

  nodeJsTopics: [
    {
      category: "Node.js Basics",
      topics: [
        "Introduction to Node.js",
        "Node.js Architecture",
        "Node.js Modules",
        "npm Package Manager",
        "Node.js File System",
        "Node.js Events",
        "Node.js Streams",
        "Node.js Buffers",
      ],
    },
    {
      category: "Express.js",
      topics: [
        "Introduction to Express.js",
        "Express.js Middleware",
        "Express.js Routing",
        "Express.js Templates",
        "Express.js Error Handling",
      ],
    },
    {
      category: "Database Connectivity",
      topics: [
        "Connecting to MongoDB",
        "Mongoose ODM",
        "MySQL with Node.js",
        "SQLite with Node.js",
        "Firebase with Node.js",
      ],
    },
    {
      category: "Authentication and Authorization",
      topics: [
        "User Authentication",
        "Passport.js",
        "JWT Authentication",
        "OAuth with Node.js",
      ],
    },
    {
      category: "RESTful APIs",
      topics: [
        "Building RESTful APIs",
        "REST API Design Best Practices",
        "Consuming REST APIs",
      ],
    },
    {
      category: "Real-time Applications",
      topics: [
        "WebSockets with Node.js",
        "Socket.io",
        "Building a Chat Application",
      ],
    },
    {
      category: "Testing in Node.js",
      topics: [
        "Unit Testing with Mocha",
        "Assertion Libraries",
        "End-to-End Testing",
      ],
    },
    {
      category: "Deployment",
      topics: [
        "Deploying Node.js Applications",
        "Docker and Node.js",
        "Continuous Integration and Deployment",
      ],
    },
  ],

  mongoDBTopics: [
    {
      category: "Introduction to MongoDB",
      topics: [
        "What is MongoDB?",
        "Advantages of MongoDB",
        "MongoDB Data Model",
        "MongoDB BSON Format",
      ],
    },
    {
      category: "MongoDB CRUD Operations",
      topics: [
        "Insert Document",
        "Query Document",
        "Update Document",
        "Delete Document",
      ],
    },
    {
      category: "MongoDB Indexing",
      topics: [
        "Introduction to Indexing",
        "Types of Indexes",
        "Indexing Strategies",
        "Text Indexes",
      ],
    },
    {
      category: "Data Modeling in MongoDB",
      topics: [
        "Schema Design",
        "Embedding vs Referencing",
        "Normalization and Denormalization",
      ],
    },
    {
      category: "Aggregation Framework",
      topics: [
        "Introduction to Aggregation",
        "Aggregation Pipeline",
        "Aggregation Operators",
      ],
    },
    {
      category: "MongoDB Atlas",
      topics: [
        "Introduction to MongoDB Atlas",
        "Setting Up MongoDB Atlas",
        "Managing MongoDB Atlas Clusters",
      ],
    },
    {
      category: "Security in MongoDB",
      topics: [
        "Authentication and Authorization",
        "SSL/TLS in MongoDB",
        "Database Auditing",
      ],
    },
    {
      category: "MongoDB Performance Optimization",
      topics: [
        "Index Optimization",
        "Query Optimization",
        "Caching Strategies",
      ],
    },
    {
      category: "Backup and Recovery",
      topics: [
        "Backup Strategies",
        "Point-in-Time Recovery",
        "Restoring Data",
      ],
    },
  ],

  reactTopics: [
    {
      category: "React Fundamentals",
      topics: [
        "React JSX",
        "ReactJS Babel Introduction",
        "ReactJS Virtual DOM",
        "React JS ReactDOM",
        "ReactJS Lists",
        "ReactJS Forms",
        "ReactJS Keys",
        "ReactJS Refs",
        "ReactJS Rendering Elements",
        "ReactJS Conditional Rendering",
      ],
    },
    {
      category: "React Components",
      topics: [
        "Code Splitting in React",
        "ReactJS Components",
        "ReactJS | Components - Set 2",
        "ReactJS Pure Components",
        "ReactJS Functional Components",
        "ReactJS Lifecycle of Components",
        "Differences between Functional Components and Class Components",
        "ReactJS Container and Presentational Pattern in Components",
      ],
    },
    {
      category: "React Props & States",
      topics: [
        "ReactJS Methods as Props",
        "ReactJS PropTypes",
        "ReactJS Props - Set 1",
        "ReactJS Props - Set 2",
        "ReactJS Unidirectional Data Flow",
        "ReactJS State",
        "ReactJS State vs Props",
        "ReactJS Lifecycle of Components",
      ],
    },
    {
      category: "React Hooks",
      topics: [
        "ReactJS Hooks",
        "ReactJS useState Hook",
        "ReactJS useEffect Hook",
        "Context in React",
        "ReactJS Router",
        "React JS Types of Routers",
        "ReactJS Fragments",
      ],
    },
    {
      category: "React Connection & Deployment",
      topics: [
        "How to Deploy Your React Websites on GitHub?",
        "How to Deploy React project on Firebase?",
        "How to deploy React app to Heroku?",
        "How to deploy React app to Surge?",
        "How to deploy simple frontend server-less (static) React applications on Netlify",
      ],
    },
  ],
};
export default coursedata