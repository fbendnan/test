import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-500" />, name: "React" },
    { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
    { icon: <FaGithub className="text-black" />, name: "GitHub" },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">My Skills</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition transform hover:-translate-y-3"
            >
              <div className="text-6xl">{skill.icon}</div>
              <p className="mt-3 text-sm text-black/50 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
