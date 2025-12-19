import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaPython,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiFlutter,
  SiFirebase,
  SiKubernetes,
  SiSpringboot,
  SiLaravel,
  SiDjango,
  SiTensorflow,
  SiOpenai,
} from "react-icons/si";

import { technologiesData, serviceTechMap } from "./techData";

/* ================= ICON MAP ================= */
const techIconMap = {
  React: <FaReact className="text-sky-500 text-3xl" />,
  "Next.js": <SiNextdotjs className="text-black text-3xl" />,
  "Vue.js": <SiVuedotjs className="text-green-500 text-3xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-3xl" />,

  "Node.js": <FaNodeJs className="text-green-600 text-3xl" />,
  "Java Spring Boot": <SiSpringboot className="text-green-700 text-3xl" />,
  "PHP Laravel": <SiLaravel className="text-red-500 text-3xl" />,
  "Python Django": <SiDjango className="text-green-800 text-3xl" />,

  "React Native": <FaReact className="text-sky-500 text-3xl" />,
  Flutter: <SiFlutter className="text-sky-400 text-3xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-3xl" />,
  Swift: <FaReact className="text-orange-500 text-3xl" />, // fallback
  Kotlin: <FaJava className="text-purple-600 text-3xl" />,

  AWS: <FaAws className="text-orange-400 text-3xl" />,
  Azure: <FaMicrosoft className="text-blue-500 text-3xl" />, // ✅ FIXED
  Docker: <FaDocker className="text-sky-500 text-3xl" />,
  Kubernetes: <SiKubernetes className="text-blue-600 text-3xl" />,

  Python: <FaPython className="text-yellow-500 text-3xl" />,
  TensorFlow: <SiTensorflow className="text-orange-500 text-3xl" />,
  "OpenAI API": <SiOpenai className="text-black text-3xl" />,
};

/* ================= COMPONENT ================= */
export default function TechnologiesSection({ serviceId }) {
  const allowedCategories = serviceTechMap[serviceId];

  if (!allowedCategories) return null;

  const filteredGroups = technologiesData.filter(group =>
    allowedCategories.includes(group.category)
  );

  return (
    <section className="bg-white py-24 border-t">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-3">
            Technologies We Use
          </h2>
          <p className="text-slate-600">
            Enterprise-grade technologies selected for this service.
          </p>
        </div>

        <div className="space-y-20">
          {filteredGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-[#006699] mb-8">
                {group.category}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {group.items.map((tech, i) => (
                  <div
                    key={i}
                    className="border border-[#D9EAF0] rounded-lg p-6
                               hover:border-[#006699] transition bg-white"
                  >
                    <div className="mb-4">
                      {techIconMap[tech.name] || (
                        <div className="w-8 h-8 bg-[#006699]/10 rounded-full" />
                      )}
                    </div>

                    <h4 className="font-medium text-[#0A2540] mb-1">
                      {tech.name}
                    </h4>

                    <p className="text-sm text-slate-600">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
