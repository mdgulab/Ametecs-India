
 export const technologiesData = [
  {
    category: "Frontend Development",
    items: [
      {
        name: "React",
        logo: "/tech/react.png",
        desc: "Component-based UI development for scalable applications",
      },
      {
        name: "Next.js",
        logo: "/tech/nextjs.png",
        desc: "Server-side rendering and SEO-friendly web applications",
      },
      {
        name: "Vue.js",
        logo: "/tech/vue.png",
        desc: "Progressive framework for dynamic user interfaces",
      },
      {
        name: "Tailwind CSS",
        logo: "/tech/tailwind.png",
        desc: "Utility-first CSS framework for rapid UI development",
      },
    ],
  },

  {
    category: "Backend Development",
    items: [
      {
        name: "Node.js",
        logo: "/tech/node.png",
        desc: "High-performance backend services and APIs",
      },
      {
        name: "Java Spring Boot",
        logo: "/tech/spring.png",
        desc: "Enterprise-grade backend architecture",
      },
      {
        name: "PHP Laravel",
        logo: "/tech/laravel.png",
        desc: "Secure and scalable PHP applications",
      },
      {
        name: "Python Django",
        logo: "/tech/django.png",
        desc: "Robust backend for data-driven platforms",
      },
    ],
  },

  {
    category: "Mobile App Development",
    items: [
      {
        name: "React Native",
        logo: "/tech/react-native.png",
        desc: "Cross-platform mobile applications",
      },
      {
        name: "Flutter",
        logo: "/tech/flutter.png",
        desc: "High-performance apps with single codebase",
      },
      {
        name: "Swift",
        logo: "/tech/swift.png",
        desc: "Native iOS app development",
      },
      {
        name: "Kotlin",
        logo: "/tech/kotlin.png",
        desc: "Modern Android app development",
      },
    ],
  },

  {
    category: "Cloud & DevOps",
    items: [
      {
        name: "AWS",
        logo: "/tech/aws.png",
        desc: "Scalable and secure cloud infrastructure",
      },
      {
        name: "Azure",
        logo: "/tech/azure.png",
        desc: "Enterprise cloud and hybrid solutions",
      },
      {
        name: "Docker",
        logo: "/tech/docker.png",
        desc: "Containerized application deployment",
      },
      {
        name: "Kubernetes",
        logo: "/tech/kubernetes.png",
        desc: "Automated container orchestration",
      },
    ],
  },

  {
    category: "AI & Data Engineering",
    items: [
      {
        name: "Python",
        logo: "/tech/python.png",
        desc: "AI, ML and data processing foundation",
      },
      {
        name: "TensorFlow",
        logo: "/tech/tensorflow.png",
        desc: "Machine learning model development",
      },
      {
        name: "OpenAI API",
        logo: "/tech/openai.png",
        desc: "AI-powered automation and intelligence",
      },
      {
        name: "Data Analytics",
        logo: "/tech/analytics.png",
        desc: "Insights-driven business intelligence",
      },
    ],
  },
];

// 👇 NEW ADDITION (SERVICE → CATEGORY MAP)

export const serviceTechMap = {
  "web-development": [
    "Frontend Development",
    "Backend Development",
  ],

  "app-development": [
    "Mobile App Development",
    "Backend Development",
  ],

  "ai-solutions": [
    "AI & Data Engineering",
    "Backend Development",
  ],

  "cloud-solutions": [
    "Cloud & DevOps",
  ],
};
