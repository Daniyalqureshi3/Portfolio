
import React from "react";
import { FaGithub, FaLinkedinIn, FaArrowUp, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const navigation = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Journey", link: "#journey" },
    { name: "Projects", link: "#projects" },
    { name: "Services", link: "#services" },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-sky-400/20 bg-white/2">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-7 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          <div className="flex flex-col gap-5">
            <a
              href="#home"
              className="w-fit font-ClashDisplay text-3xl font-bold tracking-wider text-[#F5E6CC]"
            >
              Daniyal<span className="text-sky-400">.</span>
            </a>

            <p className="max-w-sm font-ClashDisplay text-sm leading-7 tracking-wide text-slate-400">
              Building modern, responsive, and user-focused web applications
              with clean code, thoughtful design, and modern technologies.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Daniyalqureshi3"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/60 hover:bg-sky-400/10 hover:text-sky-300"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/daniyal-qureshi-824b53290/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/60 hover:bg-sky-400/10 hover:text-sky-300"
              >
                <FaLinkedinIn size={19} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-ClashDisplay text-lg font-bold tracking-wider text-[#F5E6CC]">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="w-fit font-ClashDisplay text-sm tracking-wide text-slate-400 transition-colors duration-300 hover:translate-x-1 hover:text-sky-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-ClashDisplay text-lg font-bold tracking-wider text-[#F5E6CC]">
              Let's Connect
            </h3>

            <p className="max-w-sm font-ClashDisplay text-sm leading-7 tracking-wide text-slate-400">
              Have a project in mind or looking for a developer? Let's connect
              and discuss how we can build something meaningful together.
            </p>

            <a
              href="#contact"
              className="group flex w-fit items-center gap-3 rounded-xl border border-sky-400/30 bg-sky-400/[0.07] px-5 py-3 font-ClashDisplay text-sm font-semibold tracking-wide text-sky-300 transition-all duration-300 hover:border-sky-300/60 hover:bg-sky-400/15 hover:text-sky-200"
            >
              Get In Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-7 sm:flex-row">
          <p className="flex flex-wrap items-center justify-center gap-1 font-ClashDisplay text-xs tracking-wide text-slate-500">
            <FaRegCopyright size={11} />
            {new Date().getFullYear()} Muhammad Daniyal. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 font-ClashDisplay text-xs tracking-wider text-slate-400 transition-colors duration-300 hover:text-sky-300"
          >
            Back to Top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/5">
              <FaArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
