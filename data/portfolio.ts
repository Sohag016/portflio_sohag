export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  statusBadge: string;
  heroHeading: string;
  heroName: string;
  typingTexts: string[];
  email: string;
  location: string;
  phone: string;
  resumeUrl: string;
  cvUrl?: string;
  heroBadges: {
    title: string;
    subtitle: string;
    extra?: string;
    color: string;
  }[];
  socials: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeMax: string;
  gradeLabel: string;
  badge: string;
  badgeColor: string;
  specializationLabel: string;
  specializations: string[];
  thesis?: {
    title: string;
    status: string;
    description: string;
  };
  achievement?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export interface TimelineExperience {
  id: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  links: {
    label: string;
    url: string;
    secondary?: boolean;
  }[];
  side: "left" | "right";
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  subIssuer?: string;
  date: string;
  description: string;
  image: string;
  badge?: string;
  verificationCode?: string;
  links: {
    label: string;
    url: string;
    primary?: boolean;
  }[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  venue: string;
  abstract: string;
  pdfUrl?: string;
  doiUrl?: string;
  citationsCount?: number;
}

export const personalInfo: PersonalInfo = {
  name: "Sohag Hossain",
  title: "Machine Learning Engineer",
  tagline: "Research & Engineering",
  statusBadge: "Available for Projects",
  heroHeading: "Hi, I'm",
  heroName: "Sohag Hossain",
  typingTexts: [
    "Machine Learning",
    "AI Automation",
    "Data Analytics",
    "Artificial Intelligence",
    "Generative AI",
    "Computer Vision",
  ],
  email: "mdsohaghossain138643@gmail.com",
  location: "Dhaka, Bangladesh",
  phone: "+88 01640368708",
  resumeUrl:
    "https://drive.google.com/file/d/1gTgdPq5Tl0oj2bwoXY9P8vn6069wAeye/view?usp=sharing",
  cvUrl:
    "https://drive.google.com/file/d/1cugLOnoLJaAz0-_s2mG8KrjCw54pFMKA/view",
  heroBadges: [
    {
      title: "NASA Space Apps",
      subtitle: "Global Participant",
      color: "#60a5fa",
    },
    {
      title: "Aspire Leaders",
      subtitle: "★ Global Leadership Fellow",
      extra: "mentored by Harvard University faculty",
      color: "#a855f7",
    },
  ],
  socials: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/sohag-a5550a374/",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Sohag016",
      icon: "github",
    },
    {
      platform: "Twitter",
      url: "https://x.com/Sohag_H75",
      icon: "twitter",
    },
    {
      platform: "ORCID",
      url: "https://orcid.org/0009-0003-8398-071X",
      icon: "orcid",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/8801640368708",
      icon: "whatsapp",
    },
    {
      platform: "Telegram",
      url: "https://t.me/Sohag138643",
      icon: "send",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/mdsohag.hosen.96558?igsh=MWFjcWV3ZnpnbXh0OA==",
      icon: "instagram",
    },
  ],
};

export const aboutData = {
  tag: "The Story",
  heading: "Architecting the future with",
  headingAccent: "Code & Data.",
  description:
    "I am a Computer Science professional dedicated to the art of Machine Learning and Data Engineering. With a focus on scalability and real-world impact, I specialize in building intelligent ecosystems like AgroMind AI and AutoSmart AI. I believe in the power of data to solve the world's most complex problems.",
  image: "/assets/images/profile2.jpg",
};

export const skillsCategories = [
  {
    title: "Programming",
    icon: "code",
    iconColor: "#3b82f6",
    highlightClass: "highlight-blue",
    tags: ["Python", "C", "C++ (DSA)", "SQL"],
  },
  {
    title: "ML Algorithms",
    icon: "brain",
    iconColor: "#10b981",
    subtitle: "Supervised & Unsupervised",
    highlightClass: "highlight-green",
    tags: [
      "Regression",
      "Decision Tree",
      "KNN",
      "SVM",
      "Clustering",
      "PCA",
    ],
  },
  {
    title: "Deep Learning & AI",
    icon: "network",
    iconColor: "#a855f7",
    highlightClass: "highlight-purple",
    tags: [
      "ANN",
      "CNN",
      "RNN",
      "LSTM",
      "LangChain",
      "Hugging Face",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    title: "Evaluation & Analysis",
    icon: "pie-chart",
    iconColor: "#f59e0b",
    highlightClass: "highlight-orange",
    tags: [
      "Confusion Matrix",
      "EDA",
      "Statistical Analysis",
      "F1 Score",
      "Cross-Validation",
      "Accuracy",
      "Precision",
      "Recall",
    ],
  },
  {
    title: "Deployment",
    icon: "rocket",
    iconColor: "#06b6d4",
    highlightClass: "highlight-cyan",
    tags: [
      "Flask",
      "AI Automation (n8n)",
      "Integration",
      "Workflow Engineering",
    ],
  },
  {
    title: "Professional Skills",
    icon: "user-check",
    iconColor: "#f43f5e",
    highlightClass: "highlight-red",
    tags: [
      "Git/GitHub",
      "Leadership",
      "Team Collaboration",
      "Communication",
      "Problem Solving",
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    id: "bsc-cse",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "NITER | University of Dhaka Affiliated",
    period: "2021 - 2026",
    grade: "3.60",
    gradeMax: "/ 4.00",
    gradeLabel: "Cumulative CGPA",
    badge: "Candidate for Global Research",
    badgeColor: "#38bdf8",
    specializationLabel: "Primary Research Specialization",
    specializations: ["Data Science", "Machine Learning", "Computer Vision"],
    thesis: {
      title:
        "Autonomous Brain Tumor Classification using Advanced Deep Learning Architectures",
      status: "In Progress",
      description:
        "Exploring high-precision MRI diagnostics through custom CNN models to enhance early-stage medical imaging accuracy.",
    },
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shahid Bulbul Govt. College, Pabna Sadar, Pabna",
    period: "2018 - 2020",
    grade: "5.00",
    gradeMax: "/ 5.00",
    gradeLabel: "Final Grade Point",
    badge: "Top Tier Academic Record",
    badgeColor: "#4ade80",
    specializationLabel: "Concentration: Science",
    specializations: ["Mathematics", "Physics", "Chemistry"],
    achievement:
      "Achieved Perfect GPA (5.00) in the Science stream, demonstrating exceptional analytical and scientific aptitude.",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Shaheed Smaranika High School, Gayeshpur, Pabna",
    period: "2017 - 2018",
    grade: "5.00",
    gradeMax: "/ 5.00",
    gradeLabel: "Final Grade Point",
    badge: "Early Academic Foundation",
    badgeColor: "#4ade80",
    specializationLabel: "Stream: Science",
    specializations: ["General Science", "Higher Mathematics", "Physics & Chemistry"],
    achievement:
      "Maintained a Top-Tier GPA throughout secondary education, establishing a solid foundation for advanced scientific studies.",
  },
];

export const timelineExperiences: TimelineExperience[] = [
  {
    id: "codealpha",
    tag: "★ ML Internship Program",
    tagBg: "#003366",
    tagColor: "#ffffff",
    company: "CodeAlpha",
    role: "Machine Learning Virtual Internship",
    period: "2025",
    description:
      "Successfully completed a comprehensive Machine Learning program. Gained hands-on expertise in data preprocessing, feature engineering, and ML model development, showcasing a strong foundation in modern AI technologies.",
    links: [
      {
        label: "View Certificate",
        url: "/assets/certificates/codealpha Cirtificate.jpg",
      },
      {
        label: "Recommendation",
        url: "/assets/certificates/codealpha recomendation.jpg",
        secondary: true,
      },
    ],
    side: "left",
  },
  {
    id: "aspire-fellow",
    tag: "★ Global Leadership Fellow",
    tagBg: "#a51c30",
    tagColor: "#ffffff",
    company: "Aspire Leaders Program",
    role: "Leadership & Social Impact",
    period: "October 2025",
    description:
      "Successfully completed this elite global initiative, mentored by Harvard University faculty. Focused on developing critical thinking, high-level communication, and actionable social impact strategies within a global community of change-makers.",
    links: [
      {
        label: "View Certificate",
        url: "/assets/certificates/aspire_certificate.jpg",
      },
      {
        label: "Recognition Letter",
        url: "/assets/certificates/aspire_letter.jpg",
        secondary: true,
      },
    ],
    side: "right",
  },
  {
    id: "solvio-hackathon",
    tag: "Leadership Recognition",
    tagBg: "#2e1a47",
    tagColor: "#ffffff",
    company: "SOLVIO AI Hackathon 2025",
    role: "Team Lead: ByteCivic (Team ID: 604)",
    period: "2025",
    description:
      "As the Team Leader of ByteCivic, I successfully spearheaded our efforts to secure a position among the Top 100 Teams. This achievement highlights my ability to drive innovation, manage collaborative problem-solving, and deliver excellence in one of Bangladesh's largest AI hackathons.",
    links: [
      {
        label: "View Official Certificate",
        url: "/assets/certificates/solvio_ai_hackathon_top100.jpg",
      },
    ],
    side: "left",
  },
  {
    id: "cuet-datathon",
    tag: "★ CUET CSE FEST 2025",
    tagBg: "#00695c",
    tagColor: "#ffffff",
    company: "Datathon Excellence",
    role: "Team: 4_Brain_Hackers",
    period: "2025",
    description:
      "Participated in the competitive Datathon hosted by the Department of CSE, CUET. Contributed to data-driven solution development, showcasing proficiency in real-world problem-solving and analytical thinking within a high-stakes team environment.",
    links: [
      {
        label: "View Participation Certificate",
        url: "/assets/certificates/CUET_Datathon_Certificate.jpg",
      },
    ],
    side: "right",
  },
  {
    id: "igso-volunteer",
    tag: "★ Volunteer Leadership",
    tagBg: "#00838f",
    tagColor: "#ffffff",
    company: "2nd International General Science Olympiad",
    role: "Event Coordination & Operations",
    period: "2025",
    description:
      "Contributed as a core volunteer for the 2nd International General Science Olympiad. Played a pivotal role in streamlining event logistics, participant management, and ensuring the seamless execution of this high-profile international scientific event.",
    links: [
      {
        label: "View Official Certificate",
        url: "/assets/certificates/IGSO_volunteer_certificate.jpg",
      },
    ],
    side: "left",
  },
  {
    id: "shikkhar-alo",
    tag: "★ Community Leadership",
    tagBg: "#4a148c",
    tagColor: "#ffffff",
    company: "Shikkhar Alo Foundation",
    role: "Volunteer & Mentor",
    period: "2022 - 2025",
    description:
      "Dedicated to empowering underprivileged youth through education and mentorship. Led community initiatives in Gazipur, fostering skill development and driving peer-led social change to create lasting impact.",
    links: [
      {
        label: "View Certificate",
        url: "/assets/certificates/Shikkhar Alo Certificate.jpg",
      },
      {
        label: "Recognition Letter",
        url: "/assets/certificates/Shikkhar Alo.jpg",
        secondary: true,
      },
    ],
    side: "right",
  },
];

export const certificateList: CertificateItem[] = [
  {
    id: "aspire-cert",
    title: "Aspire Leaders Program",
    issuer: "Aspire Institute",
    date: "October 2025",
    description:
      "Completed rigorous modules mentored by Harvard University faculty, focusing on critical thinking, communication, and global social impact.",
    image: "/assets/certificates/aspire_certificate.jpg",
    links: [
      {
        label: "View Full Certificate",
        url: "/assets/certificates/aspire_certificate.jpg",
        primary: true,
      },
      {
        label: "View Recognition Letter",
        url: "/assets/certificates/aspire_letter.jpg",
      },
    ],
  },
  {
    id: "uniathena-cert",
    title: "Basics of Data Science",
    issuer: "UniAthena",
    subIssuer: "In Partnership with Cambridge Intl. Qualifications (CIQ), UK",
    date: "June 2025",
    description:
      "Awarded to Md. Sohag Hossain for exceptional mastery in Data Science foundations, achieving a perfect score of 100/100.",
    image: "/assets/certificates/Uniathena Certificate.jpg",
    badge: "Verified Grade 100/100",
    links: [
      {
        label: "View Full Certificate",
        url: "/assets/certificates/Uniathena Certificate.jpg",
        primary: true,
      },
      {
        label: "View Transcript",
        url: "/assets/certificates/Uniathena Transcript.jpg",
      },
    ],
  },
  {
    id: "ai-quest-cert",
    title: "Data Science & Machine Learning with Python",
    issuer: "AI Quest Intelligence",
    date: "February 18, 2025",
    description:
      "Awarded to Md. Sohag Hossain for mastering Python, Statistics, EDA, and Neural Networks in a 50-hour intensive program.",
    image: "/assets/images/educat/ai-quest.jpg",
    verificationCode: "db58c78",
    links: [
      {
        label: "View Full Certificate",
        url: "/assets/images/educat/ai-quest.jpg",
        primary: true,
      },
      {
        label: "Verify Credential",
        url: "https://www.aiquest.org/verification",
      },
    ],
  },
  {
    id: "simplilearn-data-analytics",
    title: "Introduction to Data Analytics",
    issuer: "SimpliLearn SkillUp",
    date: "June 28, 2026",
    description:
      "Awarded to Md. Sohag Hossain for successfully completing the Introduction to Data Analytics course.",
    image: "/assets/certificates/introduction-data-analytics.jpg",
    verificationCode: "10403702",
    links: [
      {
        label: "View Full Certificate",
        url: "/assets/certificates/introduction-data-analytics.jpg",
        primary: true,
      },
      {
        label: "Verify Credential",
        url: "https://simpli-web.app.link/e/FGPkW4TNk6b",
      },
    ],
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    id: "paper-1",
    title:
      "Privacy-Preserving and Explainable Federated Learning for Brain Tumor MRI Classification Using LiteGAN FedNet",
    authors:
      "MD IRFANUL KABIR HIRA†, Mst Moriom Akter Bithee†, Md Sohag Hossain†, Md. Kowsar Ahmed†, Md. Mamun Ur Rashid†, Umme Sara*, Mohammad Shorif Uddin†",
    venue: "Discover Artificial Intelligence (Springer Nature) — Under Peer Review",
    abstract:
      "LiteGAN-FedNet is a privacy-preserving federated learning framework for brain tumor MRI classification that uses GAN-based feature augmentation and PCA compression to reduce communication cost. It achieves over 99% accuracy on Figshare and Mendeley datasets while using Grad-CAM, SHAP, and LIME for explainability.",
    pdfUrl:
      "https://drive.google.com/file/d/13XLEjT5eIM6eeh94qiNAJ-xomDcZQN2N/view?usp=drive_link",
    doiUrl: "#",
    citationsCount: 0,
  },
  {
    id: "paper-2",
    title:
      "LiteHybridNet-DPAM: A Lightweight Hybrid Network with Dual-Path Attention and Uncertainty Awareness for Brain Tumor MRI Classification",
    authors:
      "MD Sohag Hossain, Utpol Kanti Das, MD Irfanul Kabir Hira, MST Moriom Akter Bithee, Anichur Rahman, Fahmid Al Farid, Hezerul Abdul Karim*, Abu Saleh Musa Miah",
    venue: "Scientific Reports, Springer Nature — Manuscript Under Review",
    abstract:
      "Proposes a lightweight hybrid architecture integrating dual-path attention mechanisms (DPAM) and Bayesian uncertainty estimation for reliable, computationally efficient brain tumor classification from MRI diagnostics.",
    pdfUrl: "#",
    doiUrl: "#",
    citationsCount: 0,
  },
];
