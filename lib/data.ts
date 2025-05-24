export interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}

// Sample project data
export const pinnedProjects: Project[] = [
  {
    id: "gis-1",
    title: "Urban Growth Prediction",
    description: "GIS-based model to predict urban expansion patterns using historical data.",
    category: "GIS",
    image: "/images/projects/gis-1.jpg",
    tags: ["Spatial Analysis", "Remote Sensing", "Urban Planning"],
    technologies: ["Python", "QGIS", "PostgreSQL", "PostGIS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ml-1",
    title: "Climate Change Prediction",
    description: "Machine learning model to predict climate patterns based on historical data.",
    category: "Machine Learning",
    image: "/images/projects/ml-1.jpg",
    tags: ["Regression", "Time Series", "Data Visualization"],
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "nn-1",
    title: "Crop Classification System",
    description: "Neural network for classifying satellite imagery for land use analysis.",
    category: "Neural Network",
    image: "/images/projects/nn-1.jpg",
    tags: ["CNN", "Computer Vision", "Satellite Imagery"],
    technologies: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, showcasing projects in GIS, Machine Learning, and AI. Features a clean design with dynamic project cards and automated deployment.",
    category: "Other",
    image: "/images/projects/portfolio.jpg",
    tags: ["Web Development", "UI/UX Design", "Responsive Design"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "HTML", "GitHub Actions"],
    demoUrl: "https://y8o.github.io/oscar.portfolio",
    githubUrl: "https://github.com/y8o/oscar.portfolio",
  }
]

// Extended project list for portfolio page
export const allProjects: Project[] = [
  ...pinnedProjects,
  {
    id: "gis-2",
    title: "Flood Risk Assessment",
    description: "GIS analysis to identify areas at risk of flooding based on topography and rainfall data.",
    category: "GIS",
    image: "/images/projects/gis-2.jpg",
    tags: ["Hydrological Modeling", "Risk Assessment", "Spatial Analysis"],
    technologies: ["Python", "ArcGIS", "GDAL", "NumPy"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "gis-3",
    title: "Transportation Network Analysis",
    description: "Analysis of urban transportation networks to optimize routes and reduce congestion.",
    category: "GIS",
    image: "/images/projects/gis-3.jpg",
    tags: ["Network Analysis", "Urban Planning", "Optimization"],
    technologies: ["Python", "NetworkX", "PostgreSQL", "GeoPandas"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ml-2",
    title: "Crop Yield Prediction",
    description: "Machine learning model to predict agricultural yields based on environmental factors.",
    category: "Machine Learning",
    image: "/images/projects/ml-2.jpg",
    tags: ["Random Forest", "Agricultural Data", "Predictive Modeling"],
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ml-3",
    title: "Customer Segmentation",
    description: "Clustering algorithm to segment customers based on purchasing behavior.",
    category: "Machine Learning",
    image: "/images/projects/ml-3.jpg",
    tags: ["Clustering", "K-Means", "Market Analysis"],
    technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ai-2",
    title: "Recommendation System",
    description: "AI-powered recommendation system for personalized content delivery.",
    category: "Other",
    image: "/images/projects/ai-2.jpg",
    tags: ["Collaborative Filtering", "Content-Based Filtering", "User Modeling"],
    technologies: ["Python", "TensorFlow", "Pandas", "FastAPI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ai-3",
    title: "Chatbot Assistant",
    description: "Intelligent chatbot for customer service and information retrieval.",
    category: "Other",
    image: "/images/projects/ai-3.jpg",
    tags: ["Natural Language Processing", "Dialog Systems", "Intent Recognition"],
    technologies: ["Python", "PyTorch", "Hugging Face", "FastAPI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "nn-2",
    title: "Object Detection System",
    description: "Neural network for detecting and classifying objects in images and video.",
    category: "Neural Network",
    image: "/images/projects/nn-2.jpg",
    tags: ["YOLO", "Computer Vision", "Real-time Detection"],
    technologies: ["Python", "PyTorch", "OpenCV", "CUDA"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "nn-3",
    title: "Time Series Forecasting",
    description: "Neural network for predicting future values in time series data.",
    category: "Neural Network",
    image: "/images/projects/nn-3.jpg",
    tags: ["LSTM", "RNN", "Forecasting"],
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
    demoUrl: "#",
    githubUrl: "#",
  },
]
