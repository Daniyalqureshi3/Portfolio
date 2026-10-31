import React from 'react'

const Journey = () => {
  return (
    <div className='pt-20 flex flex-col gap-4'>
        <h1 className="mb-6 text-center font-Panchang text-2xl font-bold tracking-wide text-[#c4b5fd] drop-shadow-[0_0_14px_rgba(196,181,253,0.2)] transition-all duration-300 hover:scale-[1.03] hover:text-[#ddd6fe] hover:drop-shadow-[0_0_20px_rgba(196,181,253,0.45)] sm:text-3xl md:text-5xl">
  Get to Know  <span className="text-white/85">About Me</span>
</h1>

<div className="relative mx-auto max-w-5xl px-4 py-12">
  <div className="absolute left-9 top-0 h-full w-1 bg-linear-to-b from-sky-200 via-blue-500 to-blue-800 md:left-1/2 md:-translate-x-1/4 "></div>

  <div className="relative flex flex-col gap-12">
    <div className="relative md:grid md:grid-cols-2 md:gap-12">
<div className="absolute left-5 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-blue-400 bg-[#0a0a0a] md:left-1/2"></div>
      <div className="ml-10 rounded-2xl border border-blue-400/20 bg-white/3 p-6 transition hover:border-blue-400/50 md:ml-0">
        <span className="text-sm font-medium text-blue-400">Academic Education</span>
        <h3 className="mt-2 text-xl font-semibold text-[#F5E6CC]">BS Information Technology Engineering</h3>
        <p className="mt-2 text-sm text-gray-400">Virtual University of Pakistan</p>
        <p className="mt-3 text-sm leading-6 text-gray-300">Currently pursuing my degree and building a strong foundation in technology.</p>
      </div>
    </div>

    <div className="relative md:grid md:grid-cols-2 md:gap-12">
      <div className="absolute left-5 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-blue-400 bg-[#0a0a0a] md:left-1/2"></div>
      <div className="ml-10 rounded-2xl border border-blue-400/20 bg-white/3 p-6 transition hover:border-blue-400/50 md:col-start-2 md:ml-0">
        <span className="text-sm font-medium text-blue-400">Professional Training</span>
        <h3 className="mt-2 text-xl font-semibold text-[#F5E6CC]">Full-Stack MERN Development</h3>
        <p className="mt-2 text-sm text-gray-400">Saylani Mass IT Training (SMIT)</p>
        <p className="mt-3 text-sm leading-6 text-gray-300">Learning modern frontend and backend technologies through practical projects.</p>
      </div>
    </div>

    <div className="relative md:grid md:grid-cols-2 md:gap-12">
      <div className="absolute left-5 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-blue-400 bg-[#0a0a0a] md:left-1/2"></div>
      <div className="ml-10 rounded-2xl border border-blue-400/20 bg-white/3 p-6 transition hover:border-blue-400/50 md:ml-0">
        <span className="text-sm font-medium text-blue-400">Practical Experience</span>
        <h3 className="mt-2 text-xl font-semibold text-[#F5E6CC]">Projects & Hackathon</h3>
        <p className="mt-2 text-sm text-gray-400">Hands-on Development</p>
        <p className="mt-3 text-sm leading-6 text-gray-300">Building React applications, integrating APIs, and applying skills to real-world projects.</p>
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Journey
