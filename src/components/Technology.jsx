import React from 'react'
import { SiFramework } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { AiFillDatabase } from "react-icons/ai";
import { GrConfigure } from "react-icons/gr";
const Technology = () => {
  return (
    <div className='pt-20'>
<h1 className="font-Panchang text-2xl font-bold tracking-wide text-[#F5E6CC] drop-shadow-[0_0_14px_rgba(245,230,204,0.18)] transition-all duration-300 hover:text-[#FFE4B5] hover:drop-shadow-[0_0_20px_rgba(245,230,204,0.35)] sm:text-3xl md:text-5xl text-center" id='skills'>
  Technologies <span className="text-white/85">& Expertise</span>
</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 mt-11">
    {/* ye mera first div hai jis mai tech on name aen gey is sey uper parent hai */}

{/*  */}
<div className="flex flex-col gap-5 rounded-2xl border border-sky-400/20 bg-slate-900/70 p-6 text-gray-300 shadow-lg shadow-sky-950/20 transition-all duration-300 hover:border-sky-400/40">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/10 font-mono text-lg font-bold text-fuchsia-300">
      {"</>"}
    </div>
    <h6 className="font-bold font-ClashDisplay  tracking-wide text-[#F5E6CC]">
      Frontend Languages
    </h6>
  </div>

  <div className="flex flex-wrap gap-5">
    <span className="rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-200 transition-colors hover:border-yellow-300/50 hover:bg-yellow-400/20">
      JavaScript (ES6+)
    </span>
    <span className="rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-200 transition-colors hover:border-yellow-300/50 hover:bg-yellow-400/20">
      Typescript
    </span>
    <span className="rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-200 transition-colors hover:border-yellow-300/50 hover:bg-yellow-400/20">
      HTML5
    </span>
    <span className="rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-200 transition-colors hover:border-yellow-300/50 hover:bg-yellow-400/20">
      CSS3
    </span>


  </div>
</div>
{/*  */}
<div className="flex flex-col gap-5 rounded-2xl border border-sky-400/20 bg-slate-900/70 p-6 text-gray-300 shadow-lg shadow-sky-950/20 transition-all duration-300 hover:border-sky-400/40">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/10 font-mono text-lg font-bold text-fuchsia-300">
      <SiFramework />
    </div>
    <h6 className="font-bold font-ClashDisplay  tracking-wide text-[#F5E6CC]">
      Frontend Frameworks & Libraries
    </h6>
  </div>

  <div className="flex flex-wrap gap-5">
    <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 transition-colors hover:border-blue-300/50 hover:bg-blue-400/20">
      React.js
    </span>
    <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 transition-colors hover:border-blue-300/50 hover:bg-blue-400/20">
      Next.js
    </span>
    <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 transition-colors hover:border-blue-300/50 hover:bg-blue-400/20">
      Tailwind CSS
    </span>
    <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 transition-colors hover:border-blue-300/50 hover:bg-blue-400/20">
      Bootstrap
    </span>
    <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 transition-colors hover:border-blue-300/50 hover:bg-blue-400/20">
      Redux Toolkit
    </span>
    <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 transition-colors hover:border-blue-300/50 hover:bg-blue-400/20">
      MaterialUI
    </span>
    <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 transition-colors hover:border-blue-300/50 hover:bg-blue-400/20">
      shadCN
    </span>


  </div>
</div>
{/*  */}
<div className="flex flex-col gap-5 rounded-2xl border border-sky-400/20 bg-slate-900/70 p-6 text-gray-300 shadow-lg shadow-sky-950/20 transition-all duration-300 hover:border-sky-400/40">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/10 font-mono text-lg font-bold text-fuchsia-300">
      <GrTechnology />
    </div>
    <h6 className="font-bold font-ClashDisplay  tracking-wide text-[#F5E6CC]">
      Backend Technologies
    </h6>
  </div>

  <div className="flex flex-wrap gap-5">
    <span className="rounded-lg border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-200 transition-colors hover:border-purple-300/50 hover:bg-purple-400/20">
      Node.js
    </span>
    <span className="rounded-lg border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-200 transition-colors hover:border-purple-300/50 hover:bg-purple-400/20">
        Express.js
    </span>
    <span className="rounded-lg border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-200 transition-colors hover:border-purple-300/50 hover:bg-purple-400/20">
     GraphQL
    </span>
    <span className="rounded-lg border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-200 transition-colors hover:border-purple-300/50 hover:bg-purple-400/20">
     ci/cd pipeline
    </span>
    <span className="rounded-lg border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-200 transition-colors hover:border-purple-300/50 hover:bg-purple-400/20">
      REST APIs
    </span>
    <span className="rounded-lg border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-200 transition-colors hover:border-purple-300/50 hover:bg-purple-400/20">
      Cloud deployment
    </span>


  </div>
</div>
{/*  */}
<div className="flex flex-col gap-5 rounded-2xl border border-sky-400/20 bg-slate-900/70 p-6 text-gray-300 shadow-lg shadow-sky-950/20 transition-all duration-300 hover:border-sky-400/40">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/10 font-mono text-lg font-bold text-fuchsia-300">
      <AiFillDatabase />
    </div>
    <h6 className="font-bold font-ClashDisplay  tracking-wide text-[#F5E6CC]">
      Database Technologies
    </h6>
  </div>

  <div className="flex flex-wrap gap-5">

<span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition-colors hover:border-emerald-300/50 hover:bg-emerald-400/20">
  MongoDB
</span>

<span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition-colors hover:border-emerald-300/50 hover:bg-emerald-400/20">
  PostgreSQL
</span>

<span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition-colors hover:border-emerald-300/50 hover:bg-emerald-400/20">
  MySQL
</span>

<span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition-colors hover:border-emerald-300/50 hover:bg-emerald-400/20">
  Supabase
</span>

<span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition-colors hover:border-emerald-300/50 hover:bg-emerald-400/20">
  REST APIs
</span>

<span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition-colors hover:border-emerald-300/50 hover:bg-emerald-400/20">
  Cloud Deployment
</span>



  </div>
</div>
{/*  */}
<div className="flex flex-col gap-5 rounded-2xl border border-sky-400/20 bg-slate-900/70 p-6 text-gray-300 shadow-lg shadow-sky-950/20 transition-all duration-300 hover:border-sky-400/40">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/10 font-mono text-lg font-bold text-fuchsia-300">
      <GrConfigure />
    </div>
    <h6 className="font-bold font-ClashDisplay  tracking-wide text-[#F5E6CC]">
      Development Tools & Workflow
    </h6>
  </div>

  <div className="flex flex-wrap gap-5">

<span className="rounded-lg border border-[#F5E6CC]/20 bg-[#F5E6CC]/10 px-4 py-2 text-sm font-medium text-[#F5E6CC] transition-colors hover:border-[#F5E6CC]/50 hover:bg-[#F5E6CC]/20">
  Git
</span>
<span className="rounded-lg border border-[#F5E6CC]/20 bg-[#F5E6CC]/10 px-4 py-2 text-sm font-medium text-[#F5E6CC] transition-colors hover:border-[#F5E6CC]/50 hover:bg-[#F5E6CC]/20">
  GitHub
</span>
<span className="rounded-lg border border-[#F5E6CC]/20 bg-[#F5E6CC]/10 px-4 py-2 text-sm font-medium text-[#F5E6CC] transition-colors hover:border-[#F5E6CC]/50 hover:bg-[#F5E6CC]/20">
  VS Code
</span>
<span className="rounded-lg border border-[#F5E6CC]/20 bg-[#F5E6CC]/10 px-4 py-2 text-sm font-medium text-[#F5E6CC] transition-colors hover:border-[#F5E6CC]/50 hover:bg-[#F5E6CC]/20">
  Postman
</span>
<span className="rounded-lg border border-[#F5E6CC]/20 bg-[#F5E6CC]/10 px-4 py-2 text-sm font-medium text-[#F5E6CC] transition-colors hover:border-[#F5E6CC]/50 hover:bg-[#F5E6CC]/20">
  npm
</span>
<span className="rounded-lg border border-[#F5E6CC]/20 bg-[#F5E6CC]/10 px-4 py-2 text-sm font-medium text-[#F5E6CC] transition-colors hover:border-[#F5E6CC]/50 hover:bg-[#F5E6CC]/20">
  Vite
</span>
<span className="rounded-lg border border-[#F5E6CC]/20 bg-[#F5E6CC]/10 px-4 py-2 text-sm font-medium text-[#F5E6CC] transition-colors hover:border-[#F5E6CC]/50 hover:bg-[#F5E6CC]/20">
  Version Control
</span>
<span className="rounded-lg border border-[#F5E6CC]/20 bg-[#F5E6CC]/10 px-4 py-2 text-sm font-medium text-[#F5E6CC] transition-colors hover:border-[#F5E6CC]/50 hover:bg-[#F5E6CC]/20">
  API Testing
</span>



  </div>
</div>
{/*  */}



</div>
    </div>
  )
}

export default Technology
