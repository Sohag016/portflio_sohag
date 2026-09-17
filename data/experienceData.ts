export type ExperienceLink = {
  label: string;
  url: string;
  secondary?: boolean;
};

export type ExperienceItem = {
  id: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  company: string;
  role: string;
  period: string;
  description: string;
  links: ExperienceLink[];
  side: "left" | "right";
};

export type ExperienceCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  accent: string;
  links: ExperienceLink[];
};

export const allExperiences: ExperienceItem[] = [
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
      { label: "View Certificate", url: "/assets/certificates/codealpha Cirtificate.jpg" },
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
      { label: "View Certificate", url: "/assets/certificates/aspire_certificate.jpg" },
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
    links: [{ label: "View Official Certificate", url: "/assets/certificates/solvio_ai_hackathon_top100.jpg" }],
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
    links: [{ label: "View Participation Certificate", url: "/assets/certificates/CUET_Datathon_Certificate.jpg" }],
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
    links: [{ label: "View Official Certificate", url: "/assets/certificates/IGSO_volunteer_certificate.jpg" }],
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
      { label: "View Certificate", url: "/assets/certificates/Shikkhar Alo Certificate.jpg" },
      { label: "Recognition Letter", url: "/assets/certificates/Shikkhar Alo.jpg", secondary: true },
    ],
    side: "right",
  },
];

export const workExperiences: ExperienceItem[] = [allExperiences[0]];

export const extracurricularCards: ExperienceCard[] = [
  {
    id: "aspire",
    title: "Aspire Leaders Program",
    subtitle: "Aspire Institute | October 2025",
    description:
      "Completed modules mentored by Harvard faculty, focusing on critical thinking, leadership, and global social impact.",
    image: "/assets/certificates/aspire_certificate.jpg",
    alt: "Aspire Leadership Certificate",
    accent: "#a51c30",
    links: [
      { label: "View Certificate", url: "/assets/certificates/aspire_certificate.jpg" },
      { label: "Recognition Letter", url: "/assets/certificates/aspire_letter.jpg" },
    ],
  },
  {
    id: "solvio",
    title: "Certificate of Excellence",
    subtitle: "Top 100 Teams (ByteCivic)",
    description:
      "Led Team ByteCivic to a Top 100 finish in one of Bangladesh's premier AI hackathons, demonstrating AI innovation.",
    image: "/assets/certificates/solvio_ai_hackathon_top100.jpg",
    alt: "Solvio AI Hackathon Certificate",
    accent: "#4b2c85",
    links: [{ label: "View Certificate", url: "/assets/certificates/solvio_ai_hackathon_top100.jpg" }],
  },
  {
    id: "leadership",
    title: "The Leadership Blueprint",
    subtitle: "Udemy | February 2025",
    description:
      "Mastered essential strategic leadership principles, team communication, and organizational dynamics.",
    image: "/assets/certificates/udemy_leadership_certificate.jpg",
    alt: "Udemy Leadership Certificate",
    accent: "#a435f0",
    links: [{ label: "View Certificate", url: "/assets/certificates/udemy_leadership_certificate.jpg" }],
  },
  {
    id: "cuet",
    title: "CUET CSE Fest 2025",
    subtitle: "Datathon Participant",
    description:
      "Demonstrated advanced data analysis and analytical problem-solving in the high-stakes competitive Datathon.",
    image: "/assets/certificates/CUET_Datathon_Certificate.jpg",
    alt: "CUET Datathon Certificate",
    accent: "#00695c",
    links: [{ label: "View Certificate", url: "/assets/certificates/CUET_Datathon_Certificate.jpg" }],
  },
  {
    id: "nasa",
    title: "NASA Space Apps",
    subtitle: "Galactic Problem-Solver",
    description:
      "Recognized as a Galactic Problem-Solver in the global space hackathon, solving real-world space challenges.",
    image: "/assets/certificates/Certifiicate Nasa.jpg",
    alt: "NASA Certificate",
    accent: "#1a73e8",
    links: [{ label: "View Certificate", url: "/assets/certificates/Certifiicate Nasa.jpg" }],
  },
  {
    id: "igso",
    title: "2nd International General Science Olympiad",
    subtitle: "Volunteer",
    description:
      "Contributed as a dedicated volunteer for ScienceBaze, assisting in the organization of the 2nd IGSO Event in Dhaka.",
    image: "/assets/certificates/IGSO_volunteer_certificate.jpg",
    alt: "IGSO Volunteer ID",
    accent: "#00acc1",
    links: [{ label: "View Certificate", url: "/assets/certificates/IGSO_volunteer_certificate.jpg" }],
  },
  {
    id: "shikkhar",
    title: "Shikkhar Alo",
    subtitle: "Volunteer & Mentor",
    description:
      "Recognized for exceptional dedication in empowering youth through education, mentorship, and social impact.",
    image: "/assets/certificates/Shikkhar Alo Certificate.jpg",
    alt: "Shikkhar Alo Certificate",
    accent: "#5a2d82",
    links: [
      { label: "View Certificate", url: "/assets/certificates/Shikkhar Alo Certificate.jpg" },
      { label: "Recognition Letter", url: "/assets/certificates/Shikkhar Alo.jpg" },
    ],
  },
];

export const certificationCards: ExperienceCard[] = [
  {
    id: "ai-quest",
    title: "AI Quest Intelligence Program",
    subtitle: "Data Science & ML with Python",
    description:
      "Mastering Python, Statistics, EDA, and Neural Networks in a 50-hour intensive program.",
    image: "/assets/images/educat/ai-quest.jpg",
    alt: "AI Quest Certificate",
    accent: "#004aad",
    links: [{ label: "View Certificate", url: "/assets/images/educat/ai-quest.jpg" }],
  },
  {
    id: "simplilearn",
    title: "Introduction to Data Analytics",
    subtitle: "Simplilearn SkillUp",
    description:
      "Successfully completed the Introduction to Data Analytics course, gaining key insights into analytics.",
    image: "/assets/certificates/introduction-data-analytics.jpg",
    alt: "Data Analytics Certificate",
    accent: "#004aad",
    links: [{ label: "View Certificate", url: "/assets/certificates/introduction-data-analytics.jpg" }],
  },
  {
    id: "uniathena",
    title: "Basics of Data Science",
    subtitle: "UniAthena",
    description:
      "Awarded for exceptional mastery in Data Science foundations, achieving a perfect score of 100/100.",
    image: "/assets/certificates/Uniathena Certificate.jpg",
    alt: "UniAthena Certificate",
    accent: "#a51c30",
    links: [{ label: "View Certificate", url: "/assets/certificates/Uniathena Certificate.jpg" }],
  },
  {
    id: "ibm-ml-level1",
    title: "Machine Learning with Python - Level 1",
    subtitle: "IBM Skills Network | 2025",
    description:
      "Earned official IBM credential for demonstrated proficiency in supervised learning & ML algorithms.",
    image: "/assets/certificates/ml-python-level-1.jpg",
    alt: "IBM Machine Learning Level 1",
    accent: "#006699",
    links: [{ label: "View Certificate", url: "/assets/certificates/ml-python-level-1.jpg" }],
  },
  {
    id: "power-bi",
    title: "Power BI for Beginners",
    subtitle: "Simplilearn | Oct 2025",
    description:
      "Successfully mastered interactive data visualization, dashboard creation, and Business Intelligence.",
    image: "/assets/certificates/power-bi-beginners.jpg",
    alt: "Power BI for Beginners",
    accent: "#115c9b",
    links: [{ label: "View Certificate", url: "/assets/certificates/power-bi-beginners.jpg" }],
  },
  {
    id: "python-101",
    title: "Python 101 for Data Science",
    subtitle: "IBM SkillsBuild | 2025",
    description:
      "Python programming fundamentals for Data Science, powered by IBM Developer Skills Network.",
    image: "/assets/images/educat/python-101-data-science.jpg",
    alt: "IBM Python Certificate",
    accent: "#006699",
    links: [{ label: "View Certificate", url: "/assets/images/educat/python-101-data-science.jpg" }],
  },
  {
    id: "itronix",
    title: "Data Science Professional",
    subtitle: "ITronix Solutions",
    description:
      "Earned the Associate Level professional credential in Data Science, mastering ML algorithms.",
    image: "/assets/images/educat/data-science.jpg",
    alt: "Data Science Professional Certification",
    accent: "#0056b3",
    links: [{ label: "View Certificate", url: "/assets/images/educat/data-science.jpg" }],
  },
  {
    id: "ostad-ai-agent",
    title: "Build Your First AI Agent",
    subtitle: "Ostad",
    description:
      "Mastered building autonomous AI agents and workflow automations using cutting-edge no-code tools.",
    image: "/assets/images/educat/md-sohag-hossain-ai-agent.jpg",
    alt: "AI Agent Course Certificate",
    accent: "#1a1a1a",
    links: [{ label: "View Certificate", url: "/assets/images/educat/md-sohag-hossain-ai-agent.jpg" }],
  },
  {
    id: "ibm-ml-python",
    title: "Machine Learning with Python",
    subtitle: "IBM SkillsBuild | 2025",
    description:
      "Completed comprehensive IBM hands-on coursework in data preprocessing, model tuning, and AI application.",
    image: "/assets/certificates/ml-with-python-ibm.jpg",
    alt: "IBM Machine Learning Certificate",
    accent: "#006699",
    links: [{ label: "View Certificate", url: "/assets/certificates/ml-with-python-ibm.jpg" }],
  },
  {
    id: "python-ai",
    title: "Python for AI",
    subtitle: "AIXX | Feb 2026",
    description:
      "Earned professional certification covering core Python AI libraries, machine learning logic, and neural network fundamentals.",
    image: "/assets/certificates/python-for-ai.jpg",
    alt: "Python for AI Certificate",
    accent: "#064e3b",
    links: [{ label: "View Full Certificate", url: "/assets/certificates/python-for-ai.jpg" }],
  },
];
