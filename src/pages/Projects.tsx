import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Code2, Lightbulb, Target } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Token-Based Knowledge-Sharing Platform",
    date: "2025",
    category: "Web2.5 / Blockchain",
    image: "/images/knowledge_share_2.png",
    fit: "cover",
    purpose: "Applied Blockchain technology to develop a decentralized knowledge-sharing research project, enabling transparent content ownership and token-based incentives.",
    learnings: "Gained hands-on experience integrating smart contracts with a modern web frontend and exploring decentralized application architecture.",
    tech: ["Blockchain", "ReactJS", "TypeScript", "Solidity"],
    link: "https://knowledgeshare.nusuit.org"
  },
  {
    id: 2,
    title: "Knop Flashcard",
    date: "2024",
    category: "Mobile / Web / Desktop",
    image: "https://picsum.photos/seed/flashcard/800/600",
    fit: "cover",
    purpose: "Developed a smart learning app that integrates LLMs to generate explanations and implements the SM-2 spaced repetition algorithm to optimize study scheduling.",
    learnings: "Deepened understanding of the SM-2 algorithm and learned to integrate LLM APIs for context-aware, AI-powered learning experiences.",
    tech: ["Dart", "Flutter", "LLM APIs", "SM-2 Algorithm"],
    link: "https://knop.nusuit.org"
  },
  {
    id: 3,
    title: "Gym Management System",
    date: "2024",
    category: "Mobile App",
    image: "/images/peakmode_1.jpg",
    image2: "/images/peakmode_2.jpg",
    fit: "contain",
    purpose: "Built a mobile application to manage gym members, track memberships, and streamline daily gym operations for staff and administrators.",
    learnings: "Improved skills in mobile UI design, local data persistence, and building role-based access flows for real-world business scenarios.",
    tech: ["React Native", "Node.js", "SQLite"],
    link: "https://mobile.nusuit.org"
  },
  {
    id: 4,
    title: "OMR Scanner",
    date: "2024",
    category: "Mobile App",
    image: "/images/omr_1.jpg",
    image2: "/images/omr_2.jpg",
    fit: "contain",
    purpose: "Developed an Optical Mark Recognition mobile application that automates test grading by scanning and interpreting answer sheets from a device camera.",
    learnings: "Learned image processing techniques and how to apply computer vision algorithms in a mobile context for real-time document scanning.",
    tech: ["Flutter", "OpenCV", "Dart", "Image Processing"],
    link: "https://mobile.nusuit.org"
  },
  {
    id: 5,
    title: "Blog & Social Media Website",
    date: "2024",
    category: "Fullstack Web",
    image: "https://picsum.photos/seed/blog/800/600",
    fit: "cover",
    purpose: "Fullstack web application featuring user authentication, content posting, comments, and social interactions powered by a RESTful API backend.",
    learnings: "Strengthened fullstack skills by building a complete auth flow with JWT, designing REST APIs, and managing state across a multi-page React app.",
    tech: ["ReactJS", "Node.js", "ExpressJS", "MongoDB"],
    link: "https://firstproj.nusuit.org"
  },
  {
    id: 6,
    title: "Browser Extensions",
    date: "2023",
    category: "Browser Extension",
    image: "/images/pastel_extractor.png",
    image2: "/images/focus_blocker.png",
    fit: "contain",
    purpose: "Built 'Focus Blocker' (with a Pomodoro timer to block distracting sites) and 'Extract Color' (converts colors from any page to Tailwind CSS syntax).",
    learnings: "Learned the Chrome Extensions API, background service workers, and how to build minimal but highly practical utility tools with vanilla web technologies.",
    tech: ["HTML", "CSS", "JavaScript", "Chrome Extensions API"],
    link: "https://microsoftedge.microsoft.com/addons/detail/pastel-extractor/aiokdckcigpamfmaahjfdnkogmkeocag",
    link2: "https://microsoftedge.microsoft.com/addons/detail/focus-blocker/aliehoiagajkkmkajmpiiabjdlhgbklj",
    linkLabel: "Pastel Extractor",
    link2Label: "Focus Blocker"
  },
  {
    id: 7,
    title: "Portfolio Stock Management",
    date: "2025",
    category: "Fullstack Web",
    image: "/images/portfolio_stock.png",
    fit: "cover",
    purpose: "A portfolio stock management web app inspired by Snowball Analytics. Track investments, analyze performance, and visualize portfolio allocation with a clean, data-driven interface.",
    learnings: "Deepened knowledge of financial data visualization, real-time data handling, and building dashboard-style interfaces for complex datasets.",
    tech: ["ReactJS", "TypeScript", "Node.js", "Chart.js"],
    link: "https://portfolio.nusuit.org"
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeIndex];

  return (
    <div className="flex-1 w-full flex items-center justify-center overflow-hidden relative">
      
      <div className="relative z-10 w-full max-w-7xl px-6 flex items-center py-4">
        <AnimatePresence mode="wait">
            <motion.div 
                key={currentProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 relative items-center"
            >
                {/* LEFT: Main Visual Area */}
                <div className="lg:col-span-7 relative z-10">
                    <motion.div 
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative rounded-3xl overflow-hidden border-[3px] border-[#4a3728] shadow-[8px_8px_0px_rgba(74,55,40,0.2)] bg-[#f4f1ea] group"
                        style={{ borderRadius: '2% 1% 2% 1% / 1% 2% 1% 2%' }}
                    >
        {/* Image Container */}
                        <div className="aspect-[16/10] relative overflow-hidden bg-[#e8dfd0]">
                            {currentProject.image2 ? (
                              <div className="w-full h-full flex items-center justify-center gap-3 px-4 py-2">
                                <img
                                  src={currentProject.image}
                                  alt={currentProject.title}
                                  className="h-full w-auto object-contain sepia-[0.2] scale-90 drop-shadow-lg"
                                />
                                <img
                                  src={currentProject.image2}
                                  alt={currentProject.title}
                                  className="h-full w-auto object-contain sepia-[0.2] scale-90 drop-shadow-lg"
                                />
                              </div>
                            ) : (
                            <img 
                                src={currentProject.image} 
                                alt={currentProject.title}
                                className={`w-full h-full transition-transform duration-1000 sepia-[0.2] ${
                                  currentProject.fit === 'contain'
                                    ? 'object-contain scale-85'
                                    : 'object-cover group-hover:scale-105'
                                }`}
                                referrerPolicy="no-referrer"
                            />
                            )}
                            <div className="absolute inset-0 bg-[#4a3728]/10 mix-blend-multiply" />
                            
                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-[#4a3728]/90 to-transparent">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-[#556b2f] text-[#f4f1ea] text-xs font-bold uppercase tracking-widest rounded-full font-serif">
                                        {currentProject.category}
                                    </span>
                                    <span className="text-[#f4f1ea]/80 text-sm font-hand">{currentProject.date}</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-[#f4f1ea] tracking-tight font-serif">
                                    {currentProject.title}
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CONNECTOR: The "Vine" / Cable - Horizontal */}
                <div className="hidden lg:block absolute top-1/2 left-[58%] w-[10%] h-[100px] -translate-y-1/2 z-0 pointer-events-none">
                    <svg className="w-full h-full overflow-visible">
                        {/* The Cable Path - Horizontal Curve */}
                        <motion.path
                            d="M 0 50 C 50 50, 50 50, 100 50"
                            fill="none"
                            stroke="#556b2f"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                        {/* Leaves on the vine */}
                        <circle cx="50" cy="50" r="4" fill="#556b2f" />
                        <path d="M 40 50 Q 50 30 60 50" fill="#84cc16" opacity="0.8" />
                    </svg>
                </div>

                {/* RIGHT: Info Board - Side by Side */}
                <div className="lg:col-span-5 relative z-10 pl-8">
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 100, 
                            damping: 15, 
                            delay: 0.2 
                        }}
                        className="relative bg-[#f4f1ea] border-[3px] border-[#4a3728] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_rgba(74,55,40,0.15)]"
                        style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                    >
                        <div className="space-y-6">
                            {/* Purpose Section */}
                            <div>
                                <h3 className="flex items-center gap-2 text-[#556b2f] font-bold uppercase tracking-wider text-sm mb-2 font-serif">
                                    <Target size={18} />
                                    The Mission
                                </h3>
                                <p className="text-[#4a3728] leading-relaxed font-hand text-lg">
                                    {currentProject.purpose}
                                </p>
                            </div>

                            {/* Tech Stack Section */}
                            <div>
                                <h3 className="flex items-center gap-2 text-[#556b2f] font-bold uppercase tracking-wider text-sm mb-2 font-serif">
                                    <Code2 size={18} />
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {currentProject.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-[#a0522d]/10 border border-[#a0522d]/30 rounded-full text-sm text-[#a0522d] font-hand">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Learnings Section */}
                            <div>
                                <h3 className="flex items-center gap-2 text-[#556b2f] font-bold uppercase tracking-wider text-sm mb-2 font-serif">
                                    <Lightbulb size={18} />
                                    Key Learnings
                                </h3>
                                <p className="text-[#4a3728] leading-relaxed italic border-l-2 border-[#556b2f]/30 pl-4 font-hand text-lg">
                                    "{currentProject.learnings}"
                                </p>
                            </div>

                            {/* Action Area */}
                            <div className="pt-6 border-t-2 border-[#4a3728]/10 flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                  {currentProject.link2 ? (
                                    <>
                                      <a href={currentProject.link} target="_blank" rel="noopener noreferrer"
                                        className="text-[#4a3728] font-bold hover:text-[#556b2f] transition-colors flex items-center gap-1.5 group font-serif text-sm">
                                        {currentProject.linkLabel ?? 'View Live'} <ExternalLink size={13} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                      </a>
                                      <a href={currentProject.link2} target="_blank" rel="noopener noreferrer"
                                        className="text-[#4a3728] font-bold hover:text-[#556b2f] transition-colors flex items-center gap-1.5 group font-serif text-sm">
                                        {currentProject.link2Label ?? 'View Live 2'} <ExternalLink size={13} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                      </a>
                                    </>
                                  ) : (
                                    <a href={currentProject.link} target="_blank" rel="noopener noreferrer"
                                      className="text-[#4a3728] font-bold hover:text-[#556b2f] transition-colors flex items-center gap-2 group font-serif">
                                      View Live <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                  )}
                                </div>

                                <div className="flex items-center gap-1">
                                  {/* Triangle Prev Button */}
                                  <button
                                      onClick={prevProject}
                                      className="relative w-10 h-10 flex items-center justify-center group"
                                      aria-label="Previous Project"
                                  >
                                      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                                          <path
                                              d="M 70 20 L 20 50 L 70 80 Z"
                                              fill="#f4f1ea"
                                              stroke="#4a3728"
                                              strokeWidth="3"
                                              strokeLinejoin="round"
                                              className="group-hover:fill-[#556b2f] group-hover:stroke-[#556b2f] transition-all duration-300"
                                          />
                                      </svg>
                                  </button>
                                  {/* Triangle Next Button */}
                                  <button
                                      onClick={nextProject}
                                      className="relative w-10 h-10 flex items-center justify-center group"
                                      aria-label="Next Project"
                                  >
                                      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                                          <path 
                                              d="M 30 20 L 80 50 L 30 80 Z" 
                                              fill="#f4f1ea" 
                                              stroke="#4a3728" 
                                              strokeWidth="3" 
                                              strokeLinejoin="round"
                                              className="group-hover:fill-[#556b2f] group-hover:stroke-[#556b2f] transition-all duration-300" 
                                          />
                                      </svg>
                                  </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
