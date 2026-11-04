import React from 'react'
import { SiDevelopmentcontainers } from "react-icons/si";
import { CiMobile1 } from "react-icons/ci";
import { FaCodepen } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { LuDatabaseZap } from "react-icons/lu";
import { IoLogoFigma } from "react-icons/io5";
import { AiOutlineTool } from "react-icons/ai";
const Offer = () => {
  const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: "</>",
    description:
      "Designing and developing modern, visually appealing, and responsive user interfaces that deliver smooth and intuitive user experiences. I focus on clean component-based architecture, reusable UI elements, and cross-device compatibility using modern frontend technologies.",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: SiDevelopmentcontainers,
    description:
      "Building reliable and scalable server-side applications with well-structured business logic, secure data handling, and efficient request processing. Developing backend functionality using Node.js and Express.js to support dynamic and data-driven web applications.",
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    icon: FaCodepen,
    description:
      "Developing complete web applications by combining interactive frontend interfaces with robust backend functionality. From designing user interfaces to integrating APIs and databases, I focus on creating seamless, maintainable, and functional web solutions.",
  },
  {
    id: 4,
    title: "Mobile Application Development",
    icon: CiMobile1,
    description:
      "Creating mobile-friendly application interfaces with responsive layouts and intuitive navigation to deliver a consistent user experience across different screen sizes. Focusing on usability, performance, and modern interface design for mobile applications.",
  },
  {
    id: 5,
    title: "REST API Development & Integration",
    icon: AiOutlineApi,
    description:
      "Developing and integrating RESTful APIs to establish smooth communication between frontend applications and backend services. Working with data fetching, API requests, authentication workflows, and error handling to ensure reliable data exchange.",
  },
  {
    id: 6,
    title: "Database Design & Management",
    icon: LuDatabaseZap,
    description:
      "Designing and managing structured database systems to store, organize, retrieve, and maintain application data efficiently. Working with MongoDB and SQL-based databases while focusing on data consistency, proper relationships, and efficient queries.",
  },
  {
    id: 7,
    title: "UI Development & Figma Conversion",
    icon: IoLogoFigma,
    description:
      "Transforming UI/UX designs and Figma layouts into accurate, responsive, and interactive web interfaces. Paying attention to visual consistency, spacing, typography, reusable components, and responsive behavior across different devices.",
  },
  {
    id: 8,
    title: "Bug Fixing & Performance Optimization",
    icon: AiOutlineTool ,
    description:
      "Identifying and resolving technical issues that affect application functionality, responsiveness, and user experience. Improving code efficiency, fixing UI inconsistencies, and optimizing application performance to deliver smoother and more reliable web experiences.",
  },
];
  return (
    <div className='pt-20'>

<h1 className="mb-6 text-center font-Panchang text-2xl font-bold tracking-wide text-[#c4b5fd] drop-shadow-[0_0_14px_rgba(196,181,253,0.2)] transition-all duration-300 hover:scale-[1.03] hover:text-[#ddd6fe] hover:drop-shadow-[0_0_20px_rgba(196,181,253,0.45)] sm:text-3xl md:text-5xl">
  Services &  <span className="text-white/85">Solutions </span>
</h1>

<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 mt-11">
    {/*  */}
{services.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.id}
            className="group flex min-w-0 flex-col gap-5 rounded-2xl border border-purple-400/20 bg-linear-to-br from-purple-950/40 via-slate-900/90 to-slate-950 p-4 sm:p-6 text-purple-100 shadow-lg shadow-purple-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 font-mono text-lg font-bold text-sky-300 transition-all duration-300 group-hover:border-sky-300/60 group-hover:bg-sky-400/20 group-hover:text-sky-200">
                {typeof service.icon === "string" ? (
                  service.icon
                ) : (
                  <Icon size={23} />
                )}
              </div>

<h4 className="min-w-0 wrap-break-words font-ClashDisplay text-base sm:text-lg font-bold tracking-widest text-[#F5E6CC] transition-colors duration-300 group-hover:text-purple-200">
  {service.title}
</h4>
            </div>

            <p className="font-ClashDisplay text-sm font-medium leading-7 tracking-wide text-purple-100/65 transition-colors duration-300 group-hover:text-purple-100/90">
              {service.description}
            </p>
          </div>
        );
      })}
    {/*  */}


</div>

      
    </div>
  )
}

export default Offer
