import React from 'react'

const About = () => {
  return (

<div className="pt-10 flex flex-col gap-4">


<h1 className="mb-6 text-center font-Panchang text-2xl font-bold tracking-wide text-[#c4b5fd] drop-shadow-[0_0_14px_rgba(196,181,253,0.2)] transition-all duration-300 hover:scale-[1.03] hover:text-[#ddd6fe] hover:drop-shadow-[0_0_20px_rgba(196,181,253,0.45)] sm:text-3xl md:text-5xl">
  Get to Know  <span className="text-white/85">About Me</span>
</h1>



  <div className="flex min-h-40 items-center rounded-2xl border border-sky-400/20 bg-slate-900/70 p-6 text-base leading-7 text-gray-300 shadow-lg shadow-sky-950/20 transition-colors duration-300 hover:border-sky-400/40 md:p-8">
<p className="sm:text-base md:text-2xl font-stardom leading-7 text-slate-300  md:leading-10 text-center ">
  I’m an Information Technology Engineering student at Virtual
  University of Pakistan and a passionate Web Developer with
  hands-on experience in building responsive, user-friendly web
  applications using React and modern frontend technologies.
  Currently, I’m expanding my skills in backend development with
  Node.js, Express.js, and MongoDB to build complete web applications.
  I enjoy solving problems, exploring new technologies, and turning
  ideas into practical digital solutions while continuously growing
  as a developer.
</p>
  </div>
</div>

  )
}

export default About
