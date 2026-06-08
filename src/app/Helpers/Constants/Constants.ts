import { AcheivementsInterface, ProjectInterface, SkillsInterface } from '../Interface/Interface';

export const skillsData: SkillsInterface[] = [
  {
    SkillName: 'Java',
    ImgPath: 'assets/skills/angular.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'React',
    ImgPath: 'assets/skills/react.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Stream Lit',
    ImgPath: 'assets/skills/dotnet.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Git',
    ImgPath: 'assets/skills/flutter.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'MySQL',
    ImgPath: 'assets/skills/MySQL.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Azure',
    ImgPath: 'assets/skills/azure.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Power BI',
    ImgPath: 'assets/skills/pbi.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'C',
    ImgPath: 'assets/skills/C.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Python 3',
    ImgPath: 'assets/skills/python.png',
    RedirectionUrl: 'https://angular.io/',
  },

  {
    SkillName: 'PostgresSQL',
    ImgPath: 'assets/skills/PostgresSQL.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'HTML',
    ImgPath: 'assets/skills/html.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'CSS',
    ImgPath: 'assets/skills/css.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Java Script',
    ImgPath: 'assets/skills/js.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Kaggle',
    ImgPath: 'assets/skills/Kaggle.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'PyTorch',
    ImgPath: 'assets/skills/PyTorch.png',
    RedirectionUrl: 'https://angular.io/',
  },
];


export const acheivementsData : AcheivementsInterface[]=[
  
  {
    Title: "Coding Competition Coordinator",
    Desc: "Conducted and coordinated a coding competition as part of the department symposium, managing event execution, participant engagement, and smooth competition operations.",
    ReadMoreLink: ""
  },
  {
    Title: "Smart India Hackathon 2024",
    Desc: "Selected for the Grand Finale Waiting List of Smart India Hackathon 2024, competing among thousands of student teams from across the country.",
    ReadMoreLink: ""
  },
  {
    Title: "First Prize in Coding Competition",
    Desc: "Secured First Prize in a college-level coding competition at TJS Engineering College, demonstrating strong programming, analytical, and problem-solving skills.",
    ReadMoreLink: ""
  },
  {
    Title: "Community Service Volunteer",
    Desc: "Actively participated in community service initiatives, contributing to social outreach programs and supporting local community development activities.",
    ReadMoreLink: ""
  },
  {
    Title: "Sports and Team Activities",
    Desc: "Engaged in volleyball and various sports activities, fostering teamwork, leadership, discipline, and physical fitness.",
    ReadMoreLink: ""
  },
  {
    Title: "Educational Outreach",
    Desc: "Conducted educational sessions for students in the local community, helping improve academic understanding and encouraging learning among young students.",
    ReadMoreLink: ""
  }

]

export const visitTaleData: string[] = [
  "In the end, that doesn't even matter.",
 "Its not about the destination but the journey",
 "The selfish intent of wanting to preserve peace, initiates war. and hatred is born in order to protect love.",
  "Sometimes the greatest adventure is simply a conversation.",
  "In the dance of life, the pauses are just as important as the moves.",
  "A single step can start a journey, but it's the choices along the way that define it.",
  "Stars can't shine without darkness, and people can't find their true strength without facing challenges.",
  "The magic is not in the destination, but in the discovery of the unknown on the way.",
  "In the symphony of existence, every being plays a unique and irreplaceable note.",
  "The pen has the power to rewrite the story, just as much as the heart has the power to rewrite its feelings.",
  "To understand the present, one must first explore the chapters of the past.",
  "Courage is not the absence of fear, but the triumph over it. Dare to embrace the unknown.",
  "The road less traveled may be more challenging, but it often leads to the most beautiful destinations.",
  "In the garden of memories, every flower tells a story.",
  "Through the lens of time, every setback is a setup for a comeback.",
  "The map of life is drawn with the ink of experience and the colors of emotions.",
  "Not all who wander are lost; sometimes, they are finding their way home.",
  "The echo of laughter and the shadow of tears both contribute to the masterpiece of a well-lived life.",
  "Destiny is not a matter of chance, but a matter of choice. Choose your path wisely.",
  "Sunsets are proof that no matter what happens, every day can end beautifully.",
  "Embrace the storms of life, for they are the prelude to a rainbow of resilience.",
  "Footprints on the sand of time may fade, but the impact we leave on others' hearts lasts forever.",
  "Life's greatest stories are often written in the ink of love and the parchment of shared moments.",
];

export const visitTaleDataNew : string[]=[
  "In the end, that doesn't even matter.",
  "Its not about the destination but the journey",
  "The selfish intent of wanting to preserve peace, initiates war. and hatred is born in order to protect love.",
]

export const projectData : ProjectInterface[]=[
  {
    ImgPath:"assets/projects/connecting.jpg",
    ProjectDisplayName: "TumorApp",
    ProjectDesc: "Developed an AI-powered brain tumor classification system using DenseNet121 to analyze MRI images and classify them into four categories: Glioma, Meningioma, Pituitary Tumor, and No Tumor. Implemented role-based access control with separate Doctor and Patient dashboards, where doctors can manage multiple patients, upload MRI scans, and generate reports, while patients can securely view their diagnostic results. Achieved approximately 91% prediction accuracy and deployed the solution using cloud-based services for scalability and accessibility.",
    ProjectTitle: "Brain Tumor Detection and Classification System",
    TechStack: ["React", "Python", "FastAPI", "DenseNet121", "Supabase", "Hugging Face", "Azure Web Static Apps", "GitHub Pages"]
  },
  {
    ImgPath:"assets/projects/ai.jpg", 
    ProjectDisplayName: "Document Sharing System",
    ProjectDesc: "Developed a cloud-based document sharing platform that enables users to share documents, images, and text through unique browser-accessible links without requiring authentication. Implemented real-time collaboration features allowing multiple users to join shared communication rooms, exchange files, and share content simultaneously. Utilized Supabase for data storage and real-time synchronization, with images encoded for efficient database persistence. Designed the system to support concurrent users while providing a seamless and accessible file-sharing experience.",
    ProjectTitle: "Real-Time Document and Media Sharing Platform",
    TechStack: ["React", "JavaScript", "Supabase", "GitHub Pages"]
  },
  {
    ImgPath:"assets/projects/devtools.webp",
    ProjectDisplayName: "Online Compiler",
    ProjectDesc: "Developed a web-based multi-language code editor and compiler that enables users to write, execute, and test programs in languages such as C, C++, Java, JavaScript, TypeScript, PHP, and more. Integrated the Piston API for remote code compilation and execution, while leveraging browser-based execution for JavaScript to provide faster results. Implemented features including real-time output generation, custom input support, multi-file management, file download functionality, and an interactive coding environment designed to assist students and developers in programming practice and learning.",
    ProjectTitle: "Multi-Language Online Compiler and Code Editor",
    TechStack: ["React", "JavaScript", "Piston API", "HTML", "CSS"]
  },
  {
    ImgPath:"assets/projects/password.jpg",
    ProjectDisplayName: "Enterprise Knowledge Chatbot",
    ProjectDesc: "Developed an AI-powered chatbot that enables employees to retrieve information from organizational documents using natural language queries. Implemented a Retrieval-Augmented Generation (RAG) architecture with LangChain, Hugging Face models, and vector databases to provide accurate, context-aware responses grounded in company documents. Integrated semantic search, secure authentication, document ingestion pipelines, and inappropriate language filtering to enhance knowledge accessibility, reduce document search time, and improve employee productivity.",
    ProjectTitle: "RAG-Based Enterprise Document Intelligence System",
    TechStack: ["Python", "Streamlit", "LangChain", "Hugging Face", "ChromaDB", "FAISS", "PostgreSQL", "GitHub", "Hugging Face Spaces"]
  },
  {
    ImgPath:"assets/projects/bank.jpg",
    ProjectDisplayName: "Breast Cancer Prediction System",
    ProjectDesc: "Developed a machine learning model to predict whether a breast tumor is Benign (non-cancerous) or Malignant (cancerous) using the Breast Cancer Wisconsin Diagnostic Dataset. Implemented a Support Vector Machine (SVM) with a linear kernel to classify tumors based on diagnostic features such as radius, texture, perimeter, area, smoothness, compactness, and concavity. Evaluated model performance using accuracy score, classification report, and confusion matrix, achieving approximately 95% prediction accuracy.",
    ProjectTitle: "Breast Cancer Classification using Support Vector Machine",
    TechStack: ["Python", "Scikit-learn", "SVM", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  }
  
  
]