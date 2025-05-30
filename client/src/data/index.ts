export const profileData = {
  blogPosts: [
    {
      id: "apex-crypto-arbitrage-detection",
      title: "Introducing APEX: A Real-time Crypto Arbitrage Detection System",
      excerpt: "APEX is a sophisticated Go-based system designed to detect arbitrage opportunities across cryptocurrency exchanges in real-time. Learn how it identifies profitable trading opportunities across multiple platforms.",
      date: "April 15, 2024",
      readTime: "5 min read",
      tags: ["Go", "Cryptocurrency", "WebSocket", "Real-time Analysis"],
      imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000&auto=format&fit=crop",
      content: `
# Introducing APEX: A Real-time Crypto Arbitrage Detection System

## What is APEX?

APEX is a sophisticated Go-based system designed to detect arbitrage opportunities across cryptocurrency exchanges in real-time. It's a comprehensive solution for monitoring price differences and identifying profitable trading opportunities across multiple exchanges.

## Key Features

- **Real-time Market Data**: Connects to multiple exchanges via WebSockets for instant price updates
- **Cross-Exchange Arbitrage Detection**: Scans for price discrepancies between exchanges
- **Triangular Arbitrage Detection**: Identifies profitable trading loops within a single exchange
- **Web Interface**: User-friendly dashboard for monitoring arbitrage opportunities
- **Alert System**: Notifies users of high-confidence arbitrage opportunities
- **Backtesting Module**: Test strategies against historical data

## Technical Architecture

APEX is built with Go, chosen for its performance characteristics, especially concurrency handling which is critical for processing multiple exchange data streams simultaneously. The system architecture consists of:

1. **Data Collection Layer**: Uses WebSocket connections to subscribe to live order book updates from exchanges
2. **Analysis Engine**: Processes and analyzes incoming data to detect arbitrage patterns
3. **Alert System**: Evaluates opportunities against risk parameters and triggers notifications
4. **Web Dashboard**: Visualizes opportunities and provides a configuration interface

## How APEX Works

APEX continuously monitors cryptocurrency prices across different exchanges. When it detects a price difference exceeding a specified threshold (accounting for fees), it calculates the potential profit and presents the opportunity to the user.

For example, if Bitcoin is trading at $50,000 on Exchange A and $50,500 on Exchange B, APEX would identify this as a potential 1% arbitrage opportunity (minus fees).

The system also identifies triangular arbitrage opportunities within a single exchange. For instance, it might detect a profitable trading loop: BTC → ETH → LTC → BTC.

## Development Challenges

Building APEX presented several interesting challenges:

1. **Exchange API Variability**: Each exchange has unique API specifications and rate limits
2. **Latency Management**: Ensuring opportunity detection was fast enough to be actionable
3. **Fee Optimization**: Accounting for various fee structures across exchanges
4. **Reliability**: Building a system that could operate continuously without interruption

## Future Development

APEX continues to evolve with planned enhancements:

- Machine learning models to predict arbitrage opportunities
- Automated execution capabilities for verified opportunities
- Additional exchanges and cryptocurrency pairs
- Mobile application for on-the-go monitoring

## Conclusion

APEX represents a powerful tool for cryptocurrency traders looking to capitalize on market inefficiencies. By leveraging Go's performance capabilities and a well-designed architecture, it provides real-time insights that would be impossible to identify manually.

Check out the [full documentation](https://apex-docs.readthedocs.io/en/latest/) or visit the [GitHub repository](https://github.com/VrushankPatel/apex) to learn more.
      `
    },
    {
      id: "building-distributed-systems-go",
      title: "Building Distributed Systems with Go: Lessons from Open Source Projects",
      excerpt: "Insights and best practices gleaned from developing distributed systems in Go, with real-world examples from my projects APEX and Bluelink.",
      date: "March 28, 2024",
      readTime: "7 min read",
      tags: ["Go", "Distributed Systems", "Microservices", "Architecture"],
      imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=1000&auto=format&fit=crop",
      content: ""
    },
    {
      id: "real-time-trading-systems",
      title: "Architecting Real-time Trading Systems: Performance and Reliability",
      excerpt: "A deep dive into the architectural considerations for building high-performance trading systems that can handle millions of transactions per day.",
      date: "February 15, 2024",
      readTime: "10 min read",
      tags: ["Java", "Trading", "Performance", "Architecture"],
      imageUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1000&auto=format&fit=crop",
      content: ""
    }
  ],
  name: "Vrushank Patel",
  title: "Senior Software Developer",
  company: "NASDAQ",
  profilePic: "/img/profile-pic.jpg",
  cspoBadge: "/img/sa-cspo-600.png",
  tagline: "Architecting the backbone of modern trading — low latency, high throughput, always agile.",
  summary: "Hi! I'm a passionate Software developer with 5+ years of experience, specialized in high performance trading systems, capital markets, and payment platforms. Skilled in Java, Python, Apache Kafka, Reactive programming, and cloud-native technologies. Certified Scrum Product Owner (CSPO), focusing on agile development and modernization.",

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/vrushank-patel-69b682180/",
    github: "https://github.com/VrushankPatel",
    email: "vrushankpatel5@gmail.com",
    codersrank: "https://profile.codersrank.io/user/vrushankpatel"
  },

  professionalContributions: [
    {
      title: "MME",
      description: "A lightning fast and automatic orders matching and trade execution engine.",
      link: "https://www.nasdaq.com/solutions/fintech/marketplace-technology/exchange-matching"
    },
    {
      title: "Zeus-GPI",
      description: "Middleware for seamless message brokering (Swift MX, ISO 20022)",
      link: "https://www.capsys.hu/Zeus_GPI"
    },
    {
      title: "CMS",
      description: "Modernizing of the legacy card management systems from ACI",
      link: "https://capsys-europe.com/Card_Management_System"
    }
  ],

  resumeSkills: [
    { "Programming Languages": "Java, Python, SQL" },
    { "Frameworks": "Spring Boot (Web, JPA, Security), Flask, Apache Camel, JUnit" },
    { "Cloud / DevOps and CI/CD": "Docker, Kubernetes (Amazon EKS), GitLab CI/CD, AWS (S3, EC2, RDS, Lambda, IAM)" },
    { "Distributed Systems": "Apache Kafka, REST/gRPC APIs, Project Reactor, WebFlux (Reactive Microservices)" },
    { "AI for productivity": "GitHub Copilot, Diffblue Cover, Cursor"},
  ],

  professionalExperience: [
    {
      company: "NASDAQ",
      title: "Senior Software Developer",
      period: "Nov 2022 – Present | Bangalore - IN",
      responsibilities: [
        "<strong>High Performance Trading Systems:</strong> Developed and optimized customer tailored solutions for the Multi Matching Engine (MME) - a lightning fast orders matching and execution engine) using Java, Spring framework, and reactive patterns, to enable automatic trade execution for 10M+ daily transactions across forex, equities, and crypto markets.",
        "<strong>Cloud-Native Deployment:</strong> Containerized services with Docker and orchestrated deployments on Kubernetes/Amazon EKS, reducing infrastructure costs and improving system uptime.",
        "<strong>CI/CD Automation:</strong> Contributed to migration from Teamcity and wrote GitLab CI/CD pipelines for artifact publishing, vulnerability scanning (Prisma, SonarQube, Sonatype), and deployment, reducing build time.",
        "<strong>Infrastructure-as-Code:</strong> Customized the Operations framework called MOE (MME Operating Environments) to streamline Amazon EKS and EKS Anywhere deployments, designing partitioned Helm layouts resulting in a significant reduction in deployment setup time for a LATAM customer.",
        "<strong>Customer Adaptations:</strong> Delivered 15+ product adaptations and customizations for 3+ customers across LATAM, US and EU to deliver tailored solutions addressing unique requirements, including leading onsite acceptance testing from dev side in Colombia for a equity trading platform handling $500M+ daily volume.",
        "<strong>Security &amp; Testing:</strong><ul>Patched 50+ vulnerabilities in dependencies, reducing Sonatype threat score from 9→1.5, enhancing supply chain security.</li>Identified and resolved compatibility issues in unit testing frameworks that revamped 2500+ JUnit/Mockito test cases, achieving 90%+ code coverage.</li>Designed checkstyles and established coding conventions to ensure high-quality code standards.</li></ul>",
        "<strong>AI-Driven Efficiency:</strong> Utilized GitHub Copilot to draft technical documentation (Javadocs, Confluence pages) and boilerplate code (DTOs, repetitive logic), and conducted a proof of concept (PoC) on Diffblue to automate generating unit tests, increasing code coverage significantly and enhancing code reliability.",
        "<strong>Streamline workflows:</strong> Administered tools like TaskTop integration, repository access management, and CI/CD pipeline automation for seamless builds and deployments.</li>"
      ]
    },
    {
      company: "Capsystematic Technologies Pvt Ltd.",
      title: "Software Engineer",
      period: "Dec 2019 – Nov 2022 | Bangalore - IN",
      responsibilities: [
        "<strong>Core Development:</strong> Engineered and modernized capital markets and payment software for banks and financial institutions by leveraging a comprehensive technology stack—Java, Spring Boot, Python Flask, Docker, Apache Camel, CXF, Informix, Orika, and MapStruct—to deliver scalable, secure, and high-performance solutions.",
        "<strong>Zeus-GPI (General process interface):</strong> A business integration middleware to connect front office with core system, typically processes ISO 20022 message by SOAP and REST APIs and services for seamless integration across different channels.",
        "Developed SOAP and REST APIs using Java, Spring Boot, and Apache Camel to route Interbank financial telecommunication (e.g., Swift MT/MX, ISO 20022) between diverse endpoints like databases, message queues, HTTP, SOAP, and SMB filesystems that enabled seamless integration for investment banking customers to significantly reduce message delivery latency.",
        "<strong>CMS (Card Management System):</strong> A payment technology built on the BASE24 engine to acquire, authenticate, route, switch, and authorize credit, debit, and forex transactions.",
        "Migrated legacy Pro*C (circa 1993) code to a modern Java-based architecture using Spring Boot, JPA and Security, improving scalability and maintainability.",
        "Developed RESTful APIs enabling transaction reconciliation, settlement, dispute management, and corporate card services for acquirers and issuers.",
        "<strong>CapSuite:</strong> Designed and implemented an automation tool that generates code for entities and mappings based on SQL procedures and Swift MT/MX message definitions, significantly improving developer efficiency."
      ]
    },
    {
      company: "Capsystematic Technologies Pvt Ltd.",
      title: "SDE Intern",
      period: "Sept 2019 – Dec 2019 | Bangalore - IN",
      responsibilities: [
        "Developed Apache Camel message routes, gained investment banking exposure."
      ]
    }
  ],

  education: [
    {
      degree: "B.E. – Information Technology (CGPA = 8.24)",
      institution: "Apollo Institute of Engineering (Gujarat technological university)",
      year: "Jul 2015- May 2019 | Ahmedabad - IN"
    }
  ],

  resumeCertifications: [
    {
      title: "Scrum Alliance CSPO",
      link: "https://bcert.me/sefawhitn"
    },
    {
      title: "IBM Blockchain",
      link: "https://courses.cognitiveclass.ai/certificates/e73685d94f344d92b329712d7dceac5c"
    },
    {
      title: "Nutanix Hybrid Cloud",
      link: "https://drive.google.com/file/d/1rgkx3sx-quvh7SUVxVdWT5iELAWM5b4y/view?usp=sharing"
    },
    {
      title: "AWS Data Analytics",
      link: "https://drive.google.com/file/d/1-ory7-vSeIpgnFXzP_oDQGzHQf8yJiV5/view?usp=sharing"
    },
    {
      title: "Deep Learning Nanodegree",
      link: "https://graduation.udacity.com/confirm/EL966DFN"
    },
    {
      title: "Intel AI Edge",
      link: "https://drive.google.com/file/d/1r7c2GWMveQTFBI2w0Vbt-LC2LRHth3o6/view?usp=sharing"
    }
  ],

  projects: [
    {
      id: "APEX",
      title: "APEX",
      shortDescription: "A sophisticated system for detecting arbitrage opportunities across cryptocurrency exchanges in real-time.",
      description: "APEX is a sophisticated Go-based system for detecting arbitrage opportunities across cryptocurrency exchanges in real-time. It provides a comprehensive solution for monitoring price differences and identifying profitable trading opportunities across multiple exchanges.",
      primaryTech: "Go",
      techColor: "blue",
      technologies: ["WebSocket", "Cryptocurrency", "Real-time Analysis", "Web Interface"],
      links: {
        docs: "https://apex-docs.readthedocs.io/en/latest/",
        github: "https://github.com/VrushankPatel/apex"
      }
    },
    {
      id: "Bluelink",
      title: "Bluelink",
      shortDescription: "A secure terminal-based chat application with real-time communication and cross-platform support.",
      description: "Bluelink is a secure terminal-based chat application built with Go and Firebase Realtime Database. It provides a clean, intuitive terminal interface for real-time communication across different platforms.",
      primaryTech: "Go",
      techColor: "blue",
      technologies: ["Firebase", "Terminal UI", "Real-time Communication", "Cross-platform"],
      links: {
        docs: "https://bluelink.readthedocs.io/",
        github: "https://github.com/VrushankPatel/bluelink"
      }
    },
    {
      id: "Marketron",
      title: "Marketron",
      shortDescription: "A trading simulator designed to onboard non-trading individuals with hands-on trading experience.",
      description: "Marketron is a trading simulator designed to onboard non-trading individuals by providing hands-on experience with trading concepts and tools. It offers a risk-free environment to practice trading strategies and understand market dynamics.",
      primaryTech: "React",
      techColor: "orange",
      technologies: ["Firebase", "JavaScript", "Trading APIs", "Data Visualization"],
      links: {
        demo: "https://marketron-x.web.app/",
        github: "https://github.com/VrushankPatel/marketron"
      }
    },
    {
      id: "iBoard",
      title: "iBoard",
      shortDescription: "A collaborative editor platform that enables real-time collaboration for code interviews and document sharing.",
      description: "iBoard is a collaborative editor platform that enables real-time collaboration for code interviews, document sharing, and team collaboration. It leverages Firebase and P2P networks to provide seamless communication between users.",
      primaryTech: "JavaScript",
      techColor: "yellow",
      technologies: ["Firebase", "P2P Networking", "Real-time Collaboration", "Encryption"],
      links: {
        demo: "https://iboard-x.web.app/"
      }
    },
    {
      id: "Maxine",
      title: "Maxine",
      shortDescription: "A Service Registry and Discovery (SRD) server that automatically detects and registers network services.",
      description: "Maxine is a Service Registry and Discovery (SRD) server that automatically detects and registers each service and device in a network, functioning as a reverse proxy to make services available by their names rather than hardcoded URLs.",
      primaryTech: "Java",
      techColor: "red",
      technologies: ["Microservices", "Service Discovery", "REST APIs", "Network Automation"],
      links: {
        docs: "https://github.com/VrushankPatel/Maxine-SRD",
        github: "https://github.com/VrushankPatel/Maxine-SRD"
      }
    },
    {
      id: "Complexica",
      title: "Complexica",
      shortDescription: "An application that transforms black-and-white images into fully colored versions using machine learning.",
      description: "Complexica-Server is a Flask-based application that utilizes machine learning models for image colorization. Leveraging Intel OpenVINO for optimized inference, the server takes grayscale images as input and outputs fully colorized images.",
      primaryTech: "Python",
      techColor: "green",
      technologies: ["Flask", "Machine Learning", "Intel OpenVINO", "Docker"],
      links: {
        github: "https://github.com/VrushankPatel/Complexica-Server",
        dockerhub: "https://hub.docker.com/r/vrushankpatel/complexica-server"
      }
    },
    {
      id: "Weathermon",
      title: "Weathermon",
      shortDescription: "A comprehensive weather monitoring application providing detailed weather information for locations worldwide.",
      description: "Weathermon is a comprehensive weather monitoring application that provides detailed weather information for locations worldwide. The application offers current conditions, forecasts, and historical weather data in a user-friendly interface.",
      primaryTech: "JavaScript",
      techColor: "yellow",
      technologies: ["Weather APIs", "Responsive Design", "Firebase Hosting"],
      links: {
        demo: "https://openweathers.web.app/",
        github: "https://github.com/VrushankPatel/weathermon"
      }
    }
  ],

  skills: [
    {
      category: "Languages",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      bgColor: "bg-primary-100 dark:bg-primary-900/30",
      textColor: "text-primary-600 dark:text-primary-400",
      items: [
        { name: "Java", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "Python", bgColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
        // { name: "Go", bgColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300" },
        // { name: "JavaScript", bgColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
        { name: "SQL", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      bgColor: "bg-secondary-100 dark:bg-secondary-900/30",
      textColor: "text-secondary-600 dark:text-secondary-400",
      items: [
        { name: "Spring Boot (Web, JPA, Security)", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "Flask", bgColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
        { name: "Apache Camel", bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
        { name: "JUnit", bgColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-4.5-8.5M13 8.5a4 4 0 114 0M4.5 12.5a4 4 0 110-8 4 4 0 010 8z",
      bgColor: "bg-accent-100 dark:bg-accent-900/30",
      textColor: "text-accent-600 dark:text-accent-400",
      items: [
        { name: "Docker", bgColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
        { name: "Kubernetes (Amazon EKS)", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "AWS (S3, EC2, RDS, Lambda, IAM)", bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
        { name: "GitLab CI/CD", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
        { name: "Firebase", bgColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" }
      ]
    },
    {
      category: "Databases",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400",
      items: [
        { name: "PostgreSQL", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        // { name: "MongoDB", bgColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
        // { name: "Redis", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
        { name: "MySQL", bgColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" }
      ]
    },
    {
      category: "Methodologies",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      textColor: "text-indigo-600 dark:text-indigo-400",
      items: [
        { name: "Agile/Scrum", bgColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" },
        { name: "Microservices", bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
        { name: "TDD", bgColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300" },
        { name: "CI/CD", bgColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
        { name: "DevOps", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" }
      ]
    },
    {
      category: "Other Skills",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400",
      items: [
        { name: "Reactive Programming", bgColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        // { name: "Machine Learning", bgColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
        // { name: "UI/UX Design", bgColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
        { name: "Distributed Systems", bgColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" }
      ]
    }
  ],

  certifications: [
    {
      title: "Scrum Alliance CSPO",
      description: "Certified Scrum Product Owner with focus on agile product development.",
      icon: "fas fa-tasks",
      link: "https://bcert.me/sefawhitn",
      color: "primary"
    },
    {
      title: "IBM Blockchain",
      description: "IBM Blockchain Essentials certification covering distributed ledger technology.",
      icon: "fa-brands fa-btc",
      link: "https://courses.cognitiveclass.ai/certificates/e73685d94f344d92b329712d7dceac5c",
      color: "blue"
    },
    {
      title: "Nutanix Hybrid Cloud",
      description: "Cloud infrastructure management and virtualization on Nutanix platform.",
      icon: "fas fa-cloud",
      link: "https://drive.google.com/file/d/1rgkx3sx-quvh7SUVxVdWT5iELAWM5b4y/view?usp=sharing",
      color: "purple"
    },
    {
      title: "AWS Data Analytics",
      description: "Amazon Web Services data analytics tools and methodologies.",
      icon: "fab fa-aws",
      link: "https://drive.google.com/file/d/1-ory7-vSeIpgnFXzP_oDQGzHQf8yJiV5/view?usp=sharing",
      color: "orange"
    },
    {
      title: "Deep Learning Nanodegree",
      description: "Advanced neural networks and deep learning architectures from Udacity.",
      icon: "fas fa-robot",
      link: "https://graduation.udacity.com/confirm/EL966DFN",
      color: "red"
    },
    {
      title: "Intel AI Edge",
      description: "Edge computing AI solutions using Intel hardware and software.",
      icon: "fas fa-microchip",
      link: "https://drive.google.com/file/d/1r7c2GWMveQTFBI2w0Vbt-LC2LRHth3o6/view?usp=sharing",
      color: "blue"
    },
    {
      title: "DataCamp SQL",
      description: "Advanced SQL programming and database management techniques.",
      icon: "fas fa-database",
      link: "https://drive.google.com/file/d/1TzKFISnjLmGeKfQdo9sHVjuA41PDmwNk/view?usp=sharing",
      color: "green"
    },
    {
      title: "IBM Python for Data Science",
      description: "Python programming for data analysis and scientific computing.",
      icon: "fab fa-python",
      link: "https://www.coursera.org/account/accomplishments/certificate/2BDBFSVA8APC",
      color: "blue"
    }
  ]
};