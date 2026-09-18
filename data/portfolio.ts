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
    "Computer Vision",
    "Deep Learning",
    "Artificial Intelligence",
    "AI Automation",
    "Data Analytics",
    
  
  ],
  email: "mdsohaghossain138643@gmail.com",
  location: "Dhaka, Bangladesh",
  phone: "+88 01640368708",
  resumeUrl:
    "https://drive.google.com/file/d/1gTgdPq5Tl0oj2bwoXY9P8vn6069wAeye/view?usp=sharing",
  cvUrl:
    "https://drive.google.com/file/d/125i8ZCEtk-GKROSoW5K52VFFAe7-7r1-/view?usp=sharing",
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
    "I am a Computer Science and Engineering student and AI/ML researcher working at the intersection of intelligent systems and real-world applications. My research focuses on developing trustworthy, explainable, and privacy-aware AI through Machine Learning, Deep Learning, Computer Vision, Federated Learning, and Multimodal AI. I am particularly interested in AI for healthcare and in translating research ideas into practical, impactful solutions.",
  image: "/assets/images/profile2.jpg",
};

export const skillsCategories = [
  {
  title: "Research & AI",
  icon: "microscope",
  iconColor: "#8b5cf6",
  highlightClass: "highlight-purple",
  tags: [
    "Deep Learning",
    "Explainable AI (XAI)",
    "Computer Vision",
    "Multimodal AI",
    "Federated Learning",
    "LaTeX",
    "Research Paper Writing",
    
  ],
},
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
      "Scikit-learn",
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
      "PyTorch",
    "TensorFlow",
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
    "Privacy-Preserving and Explainable Federated Learning for Brain Tumor MRI Classification Using LiteGAN-FedNet",
  status: "Under Peer Review",
  description:
    "Developing a decentralized, privacy-preserving AI pipeline (LiteGAN-FedNet) for brain tumor MRI classification. Features client-side feature augmentation via cGAN, PCA compression, and multi-perspective XAI (Grad-CAM, SHAP, LIME) for clinical interpretability.",
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
      "Abstract—Collaborative development of deep learning models for brain tumor diagnosis via Magnetic Resonance Imaging (MRI) is often restricted by decentralized data silos, institutional privacy regulations, and severe class imbalances. While federated learning (FL) allows multi-institutional training without direct data sharing, standard protocols struggle with high communication overhead, inter-client data heterogeneity, and a persistent lack of clinical interpretability. This paper introduces LiteGAN-FedNet, an optimization pipeline designed to address these core limitations simultaneously at the feature level. Each decentralized client fits a local conditional Generative Adversarial Network (cGAN) directly onto latent feature embeddings extracted via a ResNet-18 backbone. To minimize network bandwidth during federated aggregation, Principal Component Analysis (PCA) reduces these augmented embeddings from 512 to 100 orthogonal components, yielding an 80.5% reduction in the dominant transmitted-parameter dimension per round. Model decisions are further interpreted through a multi-perspective Explainable AI (XAI) module combining Grad-CAM, SHAP, and LIME. Evaluated on the public Figshare and Mendeley benchmark datasets under a single training run per dataset, LiteGAN-FedNet reports multi-class classification accuracies of 99.79% and 99.74%, respectively, while keeping raw patient data local to each client throughout training. Secure aggregation is used to mask individual client updates during federated averaging, while differential privacy is supported architecturally as an optional, separately tunable mechanism whose formal privacy budget was not evaluated in the reported results. A separately verified true federated-averaging implementation, evaluated over five independent seeds, further shows that PCA-based compression provides the largest and most consistent contribution to performance among the pipeline’s components, while the benefit of client-side generative augmentation over simpler baselines such as SMOTE or Mixup varies by dataset. LiteGAN-FedNet demonstrates that raw-data-local federated learning with client-side feature-level augmentation and PCA-based compression can achieve strong diagnostic performance across decentralized and heterogeneous medical imaging environments, while providing multi-perspective explainability to support clinical interpretability.",
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
      "MD Sohag Hossain1, Utpol Kanti Das1, MD Irfanul Kabir Hira1, MST Moriom Akter Bithee1, Anichur Rahman1, Fahmid Al Farid2, Hezerul Abdul Karim3,*, and Abu Saleh Musa Miah4",
    venue: "Scientific Reports, Springer Nature — Manuscript Under Review",
    abstract:
      "Abstract—Brain tumor classification from magnetic resonance imaging (MRI) plays an important role in computer-aided diagnosis and clinical decision support. Although deep learning models have achieved significant performance, many existing methods are still computationally expensive and provide limited information on prediction reliability. We propose LiteHybridNet-DPAM, a lightweight hybrid convolutional neural network with a novel Dual-Path Attention Module (DPAM). It is designed for the classification of four types of brain tumors, namely glioma, meningioma, pituitary tumor, and no tumor. Different from conventional sequential attention mechanisms, DPAM performs parallel channel and spatial feature recalibration, which improves discriminative feature learning while maintaining computational efficiency. In addition, the architecture incorporates a multi-scale feature extraction module for obtaining tumor features at different receptive field sizes. Experimental results obtained from publicly available Figshare and Mendeley MRI datasets demonstrate the effectiveness and robustness of the proposed framework. LiteHybridNet-DPAM achieved 99.01% accuracy and 99.00% weighted F1-score on the Figshare dataset, and 99.11% accuracy and 99.08% weighted F1-score on the Mendeley dataset. At the same time, the model required only 6.55M parameters and 0.509 GFLOPs. For estimating the uncertainty of predictions, Monte Carlo Dropout was used to assess prediction reliability, and the misclassified samples consistently showed significantly higher predictive entropy than the correctly classified ones. In addition, post-hoc temperature scaling significantly improved the calibration of the model, resulting in an Expected Calibration Error (ECE) of 0.0124 on the Figshare dataset and 0.0184 on the Mendeley dataset. Qualitative analysis using Grad-CAM and Integrated Gradients confirmed that the proposed model consistently focused on clinically relevant tumor regions. The results show that LiteHybridNet-DPAM provides an accurate, computationally efficient, uncertainty-aware, well-calibrated, and interpretable framework for MRI classification of brain tumors.",
    pdfUrl:
      "https://drive.google.com/file/d/1aLxux-8n2AjqLwIG2oPcxtH05xFNJP1T/view?usp=sharing",
    doiUrl: "#",
    citationsCount: 0,
  },
  {
    id: "paper-3",
    title:
      "Federated Explainable Learning for Privacy-Preserving Antenatal Care Quality Prediction in Bangladesh",
    authors:
      "Md Sohag Hossain1, MD. RAIHAN ALI1, Sagor Das1, Md Tanjum An Tashrif1",
    venue: "2026 IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)",
    abstract:
      "Abstract—Ensuring high quality antenatal care (ANC) is important for reducing maternal and neonatal mortality in Bangladesh. While most pregnant women attend at least one ANC service, considerable regional variation exists in the quality of the services. Conventional machine learning methods depend on aggregating data in one place, which raises privacy and data management concerns and restricts their applicability to distributed health systems. To address these issues, this paper proposes a federated learning framework for privacy-preserving and explainable ANC quality prediction on the BDHS 2022 dataset. Eight administrative divisions are modeled as simulated federated clients, enabling decentralized model training without sharing raw data. Two federated strategies, weighted Random Forest prediction aggregation and FedProx-inspired XGBoost, are evaluated and compared with five centralized machine learning baselines. Experimental results show that the weighted federated Random Forest achieves the best performance, with an accuracy of 0.849, AUC-ROC of 0.929, and F1-score of 0.806. In addition, the main determinants of ANC quality are identified using a three-level SHAP explainability framework covering global, local, and regional perspectives. The results indicate that provider type, ANC location, and birth order are the most influential factors, with significant regional variation among categories. The framework enables explainable collaborative maternal health analysis with reduced raw data exposure.",
    pdfUrl:
      "https://drive.google.com/file/d/1enXuXkS5k5V29aDyJwDztJ5dVlvGh9c2/view?usp=drive_link",
    doiUrl: "#",
    citationsCount: 0,
  },
  {
    id: "paper-4",
    title:
      "Explainable Multimodal Consistency Reasoning for Fake News Verification through Cross-Modal Alignment and Evidence Fusion",
    authors:
      "Md Sohag Hossain1, Mst Moriom Akter Bithee1, Md Irfanul Kabir Hira1, Anichur Rahman1*, Mariam Faruque Sharif2, Mohd Nizam Husen3, Abu Saleh Musa Miah4",
    venue: "Scientific Reports, Springer Nature — Manuscript Under Review",
    abstract:
      "Abstract—The rapid dissemination of multimodal news content through online platforms has significantly increased the complexity of verifying misinformation. Most existing multimodal fake-news detection methods treat this problem as a straightforward classification task, focusing primarily on label prediction. As a result, they provide limited insight into whether text, images, and image-embedded evidence corroborate one another and do not explicitly model cross-modal consistency, a key indicator of misinformation in real social media environments. To overcome these limitations, this paper proposes an Explainable Multimodal Consistency Reasoning (EMCR) framework for multimodal news verification. EMCR extends conventional multimodal misinformation detection by introducing a consistency-estimation stage that complements supervised prediction with explicit cross-modal reasoning. The framework jointly analyzes three complementary evidence streams: (i) text-image semantic consistency learned through a pretrained vision-language model, (ii) OCR-guided textual consistency between news titles and embedded text, and (iii) metadata-based structural evidence derived from image-level statistical characteristics. These modality-specific signals are integrated through a weighted fusion mechanism that yields a unified score quantifying agreement across information sources. EMCR further includes an explainable reasoning module revealing each modality’s contribution. This allows for a transparent interpretation of verification results and identifies whether inconsistencies arise from semantic mismatch, OCR-based contradiction, or insufficient structural support. Experimental evaluations on the Fakeddit benchmark dataset show that the supervised RoBERTa–ResNet50 baseline achieves 71.18% Accuracy and 70.77% Macro F1-score, while EMCR’s learned fusion classifier achieves 56.11% Accuracy and 55.72% Macro F1-score, accompanied by transparent modality-level reasoning and a confidence-aware verification score. Component-wise evaluations show the differing strengths of semantic, OCR-based, and structural evidence sources.",
    pdfUrl:
      "https://drive.google.com/file/d/1is8OwBypk3iBKXudvpMdcl9tMkk2FoB2/view?usp=drive_link",
    doiUrl: "#",
    citationsCount: 0,
  },
  {
    id: "paper-5",
    title:
      "FuzzyTriage-BD: Explainable Fuzzy Triage for Bangla Telemedicine Specialist Routing",
    authors:
      "MD. RAIHAN ALI1, Md Sohag Hossain1, Sagor Das1, Md Tanjum An Tashrif1",
    venue: "2026 IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)",
    abstract:
      "Abstract—Referring patients to the right specialist based on their symptoms in Bangla is still an unsolved challenge in the telemedicine sector in Bangladesh. Yet no existing system provides explainable and clinically rational specialist routing decisions. This paper presents a four-layer hybrid intelligent system for explainable Bangla telemedicine specialist routing. First, a token-level NER module trained on the Bangla-MedER corpus extracts medical entities from Bangla patient text, achieving a weighted NER F1 of 0.8616 and token accuracy of 88.40%. Second, a Mamdani fuzzy inference engine built using 30 expert rules from the Manchester Triage System and WHO protocols computes a numerical clinical risk score. Third, an XGBoost classifier combines TF-IDF text features, NER statistics, and the fuzzy risk score to predict the required specialist from nine classes. Finally, a two-part explainability module reveals triggered fuzzy rules and SHAP feature attributions. Evaluated on 658 real patient complaints, the proposed XGB Hybrid model achieves a test weighted F1 of 0.7800 (accuracy 78.03%) and a cross-validated weighted F1 of 0.7656 ± 0.0273, with a mean inference latency of 1.41 ms. Ablation confirms consistent fuzzy gains across tree-based classifiers, and the system outperforms a fine-tuned BanglaBERT baseline (W-F1 = 0.7312) by 4.88 percentage points while providing full algorithmic explainability absent in transformer-only approaches. To our knowledge, this is the first integrated pipeline combining NER, fuzzy risk scoring, XGBoost, and dual XAI for Bangla telemedicine triage.",
    pdfUrl:
      "https://drive.google.com/file/d/1xPR_SgKUyrrPlw6yt-AX2hbMy91hDRPu/view?usp=drive_lin",
    doiUrl: "#",
    citationsCount: 0,
  },
  {
    id: "paper-6",
    title:
      "Swin-TCN-XAI: A Hybrid End-to-End Framework for Explainable Multi-Class Brain Tumor MRI Classification",
    authors:
      "MST MORIOM AKTER BITHEE1†, MD IRFANUL KABIR HIRA1†, MD SOHAG HOSSAIN1†, Md. Kowsar Ahmed1†, Md Mamun Ur Rashid2†, Umme Sara1*†",
    venue: "Scientific Reports, Springer Nature — Manuscript Under Review",
    abstract:
      "Abstract—Brain tumor classification from Magnetic Resonance Imaging (MRI) is a clinically important yet challenging task due to substantial inter-patient variability, overlapping imaging characteristics among tumor subtypes, and the limited interpretability of deep learning models in safety-critical medical applications. This study proposes Swin-TCN-XAI, a hybrid end-to-end deep learning framework that integrates a Swin Transformer and a Temporal Convolutional Network (TCN) to jointly learn complementary spatial and sequential feature representations for multi-class brain tumor classification. The Swin Transformer captures hierarchical spatial information through shifted-window self-attention, while the TCN models inter-token dependencies using dilated causal convolutions. Both components are optimized simultaneously through end-to-end fine-tuning with differential learning rates to improve feature adaptation and classification performance. To enhance clinical transparency, the framework incorporates a multi-level explainability strategy combining Grad-CAM for lesion localization, SHAP for global and class-specific feature attribution, and LIME for patient-level decision interpretation. The proposed framework was evaluated on a four-class brain MRI dataset comprising glioma, meningioma, pituitary tumor, and no tumor using a strict patient-wise train-test split to eliminate data leakage. The model achieved 99.41% accuracy, with macro-averaged precision, recall, and F1-score of 0.9940, 0.9948, and 0.9944, respectively, outperforming state-of-the-art transformer, temporal, and hybrid baselines. Class-wise analysis demonstrated consistently high performance, including perfect precision and recall for the no-tumor class and an F1-score of 0.9925 for the clinically challenging glioma class. These results demonstrate that the proposed Swin-TCN-XAI framework provides an accurate, robust, and interpretable approach for automated brain tumor diagnosis, supporting trustworthy clinical decision-making in MRI-based neuro-oncology.",
    pdfUrl:
      "https://drive.google.com/file/d/1-oB_z14jzcfpssSIfuMdmjvDy-H9zCsi/view?usp=drive_link",
    doiUrl: "#",
    citationsCount: 0,
  },
  {
    id: "paper-7",
    title:
      " An Explainable Hybrid Ensemble Framework for Imbalanced Clinical Stroke Risk Prediction",
    authors:
      "MD IRFANUL KABIR HIRAa, Abdullah Al Towsifa, Utpol Kanti Dasa,*, MD SOHAG HOSSAINa, MST MORIOM AKTER BITHEEa",
    venue: "Elsevier — Journal Submission",
    abstract:
      "Abstract—Stroke remains a leading cause of mortality and long-term disability worldwide, highlighting the need for reliable and clinically interpretable risk prediction models. Despite significant progress in machine learning, stroke prediction from structured clinical data remains challenging due to severe class imbalance, heterogeneous risk factors, and limited transparency of predictive models. These challenges significantly limit the reliability and clinical adoption of automated stroke risk prediction systems, particularly in real-world screening scenarios where false negatives carry serious consequences. This study presents an imbalance-aware and clinically interpretable machine learning framework for stroke risk prediction. The framework is evaluated using a publicly available dataset from Mendeley Data. The proposed pipeline integrates exploratory data analysis, clinically guided feature handling, synthetic minority over-sampling (SMOTE), systematic comparative evaluation of multiple baseline classifiers, probability-level ensemble fusion, and explainable artificial intelligence (XAI). Ten machine learning models spanning linear, probabilistic, neural, and ensemble-based paradigms are systematically evaluated using recall- and F1-score-oriented metrics under stratified cross-validation. Experimental results demonstrate that tree-based ensemble methods consistently outperform traditional classifiers on imbalanced clinical data. Motivated by this observation, a soft-voting hybrid ensemble combining Random Forest and Extra Trees is employed to balance sensitivity and specificity. On an independent test set, the proposed framework achieves an accuracy of 97.78%, precision of 78.90%, recall of 62.9%, F1-score of 0.67, and ROC-AUC of 0.94, indicating improved minority-class discrimination without excessive false positives. In addition, the model achieves a PR-AUC score of 0.72, providing a more reliable assessment of minority-class detection performance under severe class imbalance. To enhance clinical transparency, model predictions are interpreted using SHAP for global feature attribution and LIME for instance-level explanations, consistently identifying age, glucose level, body mass index, and hypertension as dominant risk factors. Additional analyses on threshold sensitivity, cross-dataset generalization, and model stability further support the robustness of the proposed framework. Overall, the proposed framework provides an empirically evaluated and interpretable ensemble-based decision-support framework for stroke risk prediction, with potential relevance to real-world clinical screening scenarios.",
    pdfUrl:
      "https://drive.google.com/file/d/1mqi6d6fE0SV1Nk5fYpqWv7za9K88UEBF/view?usp=drive_link",
    doiUrl: "#",
    citationsCount: 0,
  },
  {
    id: "paper-8",
    title:
      "EMCR: Held-Out Validated Trust Scoring for Explainable and Calibrated Multimodal Fake News Verification",
    authors:
      "Md Sohag Hossain1, Md Irfanul Kabir Hira1, Mst Moriom Akter Bithee1, Umme Sara1",
    venue: "Manuscript / Journal Submission",
    abstract:
      "Abstract—Existing multimodal misinformation detection approaches mainly focus on classification accuracy, providing limited insight into prediction reliability, cross-model agreement, or decision confidence. In this paper, we propose an Explainable Multimodal Consistency Reasoning (EMCR) framework for assessing the reliability of multimodal misinformation verification. EMCR jointly analyzes text-image semantic consistency, OCR-guided textual consistency, and metadata-based structural evidence, fusing them into a final class prediction and a continuous consistency score. The framework is further extended with a reliability-aware decision layer combining MC-Dropout epistemic uncertainty, temperature-scaled calibration, and Jensen-Shannon cross-model disagreement into a single Trust Score. Fusion weights are selected via a held-out validation protocol, fitting weights on one half of the validation set and evaluating ranking improvement on the unseen other half across 20 splits, ensuring that weights are never tuned and evaluated on the same data. On the Fakeddit validation set, temperature scaling reduced Expected Calibration Error from 0.1174 to 0.0739. Held-out validation confirmed that multi-signal fusion improves ranking over confidence alone on 85% of splits, and the resulting Trust Score achieved an AURC of 0.0800, outperforming Max-Softmax (0.1380) and Deep Ensemble (0.0894) baselines at 74.02% accuracy. Percentile-based thresholds yield ACCEPT, FLAG-FOR-REVIEW, and ABSTAIN tiers with monotonically decreasing accuracy of 97.27%, 62.45%, and 39.13%, respectively, while retaining 89.96% coverage. Multi-seed resampling confirmed that these estimates are stable, with an accuracy of 75.07% ± 4.98% and AURC of 0.0704 ± 0.0184. Overall, EMCR moves beyond label prediction toward reliability-aware multimodal verification, with held-out-validated evidence of uncertainty, calibration, and trustworthiness.",
    pdfUrl:
      "https://drive.google.com/file/d/1y5xSCXj9qR1eVpbqxhcCWcDBRDVXvBsQ/view?usp=drive_link",
    doiUrl: "#",
    citationsCount: 0,
  },
  
];
