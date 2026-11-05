import React from 'react'
import {
  FaCode,
  FaBrain,
  FaGaugeHigh,
  FaLayerGroup,
  FaCubes,
  FaAward,
  FaRocket,
} from "react-icons/fa6";

const Workme = () => {
    const strengths = [
  {
    id: 1,
    title: "Modern Technology Stack",
    icon: FaCode,
    description:
      "Leveraging modern frameworks, libraries, and development tools to build reliable, efficient, and future-ready web applications.",
  },
  {
    id: 2,
    title: "Strong Problem-Solving Skills",
    icon: FaBrain,
    description:
      "Approaching technical challenges with logical thinking, breaking down complex problems, and delivering practical solutions.",
  },
  {
    id: 3,
    title: "Performance-Driven Development",
    icon: FaGaugeHigh,
    description:
      "Focusing on optimized rendering, efficient code execution, and faster load times to deliver smooth and responsive applications.",
  },
  {
    id: 4,
    title: "Scalable Development Approach",
    icon: FaLayerGroup,
    description:
      "Building flexible application architectures that support future enhancements, growing requirements, and long-term maintainability.",
  },
  {
    id: 5,
    title: "Clean Code & Architecture",
    icon: FaCubes,
    description:
      "Following structured coding practices, reusable components, and maintainable architecture to keep projects organized and easy to extend.",
  },
  {
    id: 6,
    title: "Quality-Focused Execution",
    icon: FaAward,
    description:
      "Paying attention to functionality, consistency, reliability, and detail to deliver polished results rather than just working features.",
  },
  {
    id: 7,
    title: "Adaptability & Continuous Improvement",
    icon: FaRocket,
    description:
      "Quickly adapting to new technologies, project requirements, and development practices while continuously improving technical skills.",
  },
];
  return (
    <div className='pt-20'>
                
        <h1 className="mb-6 text-center font-Panchang text-2xl font-bold tracking-wide text-[#c4b5fd] drop-shadow-[0_0_14px_rgba(196,181,253,0.2)] transition-all duration-300 hover:scale-[1.03] hover:text-[#ddd6fe] hover:drop-shadow-[0_0_20px_rgba(196,181,253,0.45)] sm:text-3xl md:text-5xl" id='journey'>
  The Value I  <span className="text-white/85">Bring </span>
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 mt-11">
      {strengths.map((strength) => {
        const Icon = strength.icon;

        return (
          <div
            key={strength.id}
            className="group flex min-w-0 flex-col items-start gap-5 rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-5 shadow-lg shadow-black/10 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-cyan-500/10 sm:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:border-blue-300/50 group-hover:bg-blue-400/20 group-hover:text-blue-200">
              <Icon size={23} />
            </div>

            <h4 className="min-w-0 wrap-break-words font-ClashDisplay text-lg font-bold tracking-wider text-[#F5E6CC] transition-colors duration-300 group-hover:text-cyan-200">
              {strength.title}
            </h4>

            <p className="font-ClashDisplay text-sm font-medium leading-7 tracking-wide text-slate-300/70 transition-colors duration-300 group-hover:text-slate-200">
              {strength.description}
            </p>

            <div className="mt-auto h-px w-10 bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-20" />
          </div>
        );
      })}
    </div>
      
    </div>
  )
}

export default Workme
