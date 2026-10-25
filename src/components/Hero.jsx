import React from 'react'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/manrope'
import { useState, useEffect } from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";


const Hero = () => {
const titles = [
  "MERN Stack Web Developer",
  "Modern Frontend Experiences",
  "AI-Powered Applications",
  "Scalable Backend Systems",
];
    const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentTitle.substring(0, text.length + 1));

        if (text.length === currentTitle.length) {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        setText(currentTitle.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, deleting ? 60 : 120);

    return () => clearTimeout(timer);
  }, [text, deleting, titleIndex]);
  return (


<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

  {/* Left side: Hero content */}
  <div className="flex w-full flex-col gap-4">
    <div className="flex items-center justify-center gap-2 lg:justify-start">
  <div className="h-3 w-3 rounded-full bg-blue-400 animate-pulse"></div>
  <p className="font-stardom font-bold sm:text-sm text-cyan-300 md:text-lg">
    Available for Work
  </p>
</div>

    <h6 className="pl-4 font-stardom text-lg font-extrabold text-center text-sky-300 md:pl-0 lg:text-left md:text-3xl">
      Hello, I'm
    </h6>


<h1 className="font-ClashDisplay text-center text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-left">
  Muhammad <span className="text-sky-400">Daniyal</span>
</h1>
    <h2 className="font-ClashDisplay text-center text-2xl font-bold text-sky-400 lg:text-left md:text-4xl ">
      Full Stack Developer
      
    </h2>
    <div className="flex items-center justify-center gap-2 lg:justify-start mt-3">
      <h6 className='text-sm md:text-lg font-bold font-stardom text-gray-500'>Specialized</h6>
    <h2 className="font-ClashDisplay text-center text-sm font-bold text-sky-400 md:text-left md:text-lg ">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
    </div>
    {/* link of cv and project */}
    <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-5 md:gap-9">

<a
  href="#projects"
  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan-400/50 bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:border-cyan-200 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
>
  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  <span className="relative sm:text-sm">Explore Projects</span>
  <span className="relative transition-transform duration-300 group-hover:translate-x-1">↗</span>
</a>

    
<a
  href="/Daniyal-CV.pdf"
  download="Muhammad-Daniyal-CV.pdf"
  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-sky-400/40 bg-slate-950 px-6 py-3 font-semibold text-white shadow-[0_0_15px_rgba(56,189,248,0.08)] transition-all duration-300 hover:border-sky-300 hover:shadow-[0_0_12px_rgba(56,189,248,0.45),0_0_30px_rgba(56,189,248,0.2)]"
>
  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-sky-300/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  <span className="relative">Download CV</span>
  <span className="relative">↓</span>
</a>
    </div>
    {/* socila media links */}
    <div className="flex gap-5 items-center">
      
<a
  href="https://github.com/Daniyalqureshi3"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
  className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-gray-300 shadow-md transition-all duration-300 hover:scale-110 hover:border-sky-400 hover:bg-sky-400/10 hover:text-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
>
  <IoLogoGithub className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
</a>

      <a href="" className='h-12 w-12 rounded-full border-2 border-[#000f22] flex justify-center items-center bg-gray-900'><FaInstagramSquare className='h-7 w-7 rounded-full border-2 border-[#000f22]' /></a>
    </div>

  </div>

  {/* Right side: Image */}
  <div className="w-full">
    <h1>Picture abhi baki hai</h1>
  </div>

</div>


  )
}

export default Hero
