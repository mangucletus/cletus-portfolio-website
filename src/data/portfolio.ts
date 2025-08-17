export const personalInfo = {
  name: "Cletus Mangu",
  fullName: "Mangu Nehinlalei Cletus",
  title: "DevOps Engineer | AWS Certified Solutions Architect",
  subtitle: "Computer Networking | MCFSP-KNUST Alumni | Youth Activist",
  location: "Kumasi, Ashanti Region, Ghana",
  email: "mangucletus@gmail.com",
  // phone: "+233549654997",
  summary: "DevOps engineer and AWS Certified Solutions Architect with 2+ years of experience in cloud infrastructure. Designed and deployed scalable AWS solutions that reduced deployment time by 60% and improved system reliability by 40%. Skilled in infrastructure as code (Terraform), CI/CD automation, and cloud-native architectures. Focused on delivering practical, secure, and cost-efficient solutions that support digital growth in emerging communities.",
  links: {
    linkedin: "https://www.linkedin.com/in/cletus-mangu-09b7941a9",
    github: "https://github.com/mangucletus",
    githubPortfolio: "https://mangucletus.github.io/Portfolio/",
    companyWebsite: "https://mangucletus.github.io/BRM-Website/",
    ngoFacebook: "https://facebook.com/BasicResilienceMentorshipProgram"
  }
};

export const experience = [
  {
    title: "DevOps Engineer",
    company: "AmaliTech Gh",
    period: "April 2025 – Present",
    achievements: [
      "Built CI/CD pipelines with GitHub Actions, cutting deployment time by 60%",
      "Deployed Docker-based apps and provisioned infrastructure using Terraform on AWS (EC2, S3, IAM)",
      "Collaborated in Agile team to apply monitoring/logging practices, boosting system uptime to 99.5%"
    ]
  },
  {
    title: "AWS Cloud Intensive – Solutions Architect",
    company: "Azubi Africa",
    period: "February 2025 – June 2025",
    achievements: [
      "Completed 20+ labs across EC2, Lambda, RDS, VPC, IAM, and CloudFormation",
      "Designed scalable AWS architectures using the Well-Architected Framework, reducing costs by 30%",
      "Delivered secure, high-availability environments using Terraform and CloudFormation"
    ]
  },
  {
    title: "National Service – Teaching/Research Assistant",
    company: "KNUST Computer Engineering Dept",
    period: "November 2023 – September 2024",
    achievements: [
      "Supported 8 faculty in instructing 200+ students across lectures and assessments",
      "Guided 25 students on research projects, achieving 95% completion rate",
      "Created tutorials and study guides, improving student performance by 25%"
    ]
  },
  {
    title: "NGO Founder and Lead",
    company: "Basic Resilience Mentorship Program",
    period: "July 2020 – Present",
    achievements: [
      "Launched community programs reaching 500+ individuals across rural areas",
      "Led 15+ resilience workshops with 85% participant retention",
      "Built partnerships with schools and 2 NGOs, increasing outreach by 50%"
    ]
  }
];

export const skills = {
  technical: [
    { name: "AWS", level: 95, category: "Cloud" },
    { name: "Terraform", level: 90, category: "IaC" },
    { name: "Docker", level: 88, category: "DevOps" },
    { name: "Python", level: 85, category: "Programming" },
    { name: "GitHub Actions", level: 92, category: "CI/CD" },
    { name: "Kubernetes", level: 80, category: "DevOps" },
    { name: "Bash", level: 88, category: "Scripting" },
    // { name: "JavaScript", level: 82, category: "Programming" }
  ],
  soft: [
    "Effective Communication",
    "Critical Thinking",
    "Problem-solving",
    "Leadership and Teamwork",
    "Solution Architecture",
    "Project Management"
  ]
};

export const projects = [
  {
    title: "Task Management System",
    description: "Built serverless app for 500+ users with 99.9% uptime. Integrated Cognito-based MFA and JWT login, cutting auth delays by 50%.",
    technologies: ["React", "AWS Lambda", "DynamoDB", "GraphQL", "Terraform"],
    github: "https://github.com/mangucletus/aws-serverless-task-management-system.git",
    highlights: [
      "500+ users with 99.9% uptime",
      "50% reduction in auth delays",
      "Real-time task updates with GraphQL"
    ]
  },
  {
    title: "ShopEase LTD Cloud Migration",
    description: "Deployed scalable AWS infra across 3 AZs, sustaining 99.95% uptime. Secured traffic with IAM, security groups, and bastion architecture.",
    technologies: ["Terraform", "AWS VPC", "EC2", "RDS", "ALB", "Auto Scaling"],
    github: "https://github.com/mangucletus/ShopEase-LTD-cloud-migration.git",
    highlights: [
      "99.95% uptime across 3 AZs",
      "0 security breaches",
      "500% traffic burst handling under 2s"
    ]
  },
  {
    title: "AWS Translate Serverless Application",
    description: "Processed 1000+ documents/day via fully serverless translation flow. Built Cognito-authenticated React frontend for 200+ concurrent users.",
    technologies: ["React", "AWS Lambda", "S3", "API Gateway", "Cognito", "Terraform"],
    github: "https://github.com/mangucletus/lambda-legends_aws-serverless-translation-service.git",
    highlights: [
      "1000+ documents processed daily",
      "200+ concurrent users",
      "80% reduction in setup time"
    ]
  },
  {
    title: "Catalog Server – Complete E-commerce Solution",
    description: "Developed platform supporting 100+ products with dynamic filtering/search. Optimized AWS infrastructure with Terraform, saving 25% in resource costs.",
    technologies: ["React", "Flask", "PostgreSQL", "AWS", "Terraform"],
    github: "https://github.com/mangucletus/catalog-server.git",
    highlights: [
      "100+ products with dynamic search",
      "25% savings in resource costs",
      "60% faster API response times"
    ]
  }
];

export const certifications = [
  { name: "AWS Solutions Architect", issuer: "AWS", featured: true },
  { name: "AWS Cloud Practitioner", issuer: "AWS", featured: true },
  { name: "AWS Re/Start", issuer: "AmaliTech GH", featured: false },
  { name: "Systems and Networking", issuer: "UITS-KNUST", featured: false },
  { name: "Transforming Leadership and Governance", issuer: "International Leadership Foundation (ILF)-GH", featured: false }
];

export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  institution: "Kwame Nkrumah University of Science and Technology (KNUST)",
  location: "Kumasi, Ghana",
  duration: "September 2019 - August 2023"
};

export const references = [
  {
    name: "Professor Emmanuel Kofi Akowuah",
    position: "HOD, Department of Computer Engineering",
    institution: "Kwame Nkrumah University of Science and Technology",
    email: "ekakowuah.coe@knust.edu.gh",
    phone: "+233209965679"
  },
  {
    name: "Dr. Bright Yeboah-Akowuah",
    position: "Senior Lecturer",
    institution: "Kwame Nkrumah University of Science and Technology",
    email: "b.yeboahakowuah@knust.edu.gh",
    phone: "+233240728535"
  }
];