import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Award, Feather, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: "Cohart",
    link: "https://www.cohart.com/",
    logo: "https://picsum.photos/seed/cohart/200/200",
    background: "/images/cohart.png",
    role: "Intern Frontend Developer",
    period: "Feb 2025 - Aug 2025",
    location: "Ho Chi Minh City, VN",
    achievements: [
      "Resolved front-end bugs and implemented new features using TypeScript and JavaScript to improve UI responsiveness.",
      "Collaborated with the team to optimize performance across key product surfaces.",
      "Completed 40+ LeetCode challenges to strengthen algorithmic problem-solving skills."
    ]
  },
  {
    company: "Wisdom Engineering & Business Solutions",
    link: "https://wisdomrobotics.org/",
    logo: "https://picsum.photos/seed/wisdom/200/200",
    background: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop",
    role: "Intern Fullstack Developer",
    period: "Aug 2024 - Jan 2025",
    location: "Ho Chi Minh City, VN",
    achievements: [
      "Developed web applications using ReactJS and Java Spring Boot for cloud-based projects.",
      "Built RESTful APIs for sensor monitoring systems and cloud-based platforms.",
      "Participated in the full software development lifecycle from design to deployment."
    ]
  },
  {
    company: "TP Law Company",
    link: "https://tplaw.com.vn/",
    logo: "https://picsum.photos/seed/tplaw/200/200",
    background: "/images/tplaw.png",
    role: "Technical Support",
    period: "Nov 2022 - Aug 2024",
    location: "Ho Chi Minh City, VN",
    achievements: [
      "Maintained WordPress websites, ensuring security patches and resolving uptime issues.",
      "Provided IT support and managed internal network infrastructure for the company.",
      "Improved website reliability and reduced downtime through proactive monitoring."
    ]
  }
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const currentExp = experiences[currentIndex];

  return (
    <div className="relative flex-1 w-full flex items-center justify-center py-2 px-4">
      
      {/* Book Container */}
      <div className="relative w-full max-w-6xl min-h-[520px] md:min-h-[580px] bg-[#f4f1ea] shadow-[0_20px_50px_rgba(74,55,40,0.3)] rounded-r-3xl border-l-8 border-[#4a3728] flex overflow-hidden">
        
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-10" />

        {/* Left Page (Image) */}
        <div className="hidden md:block w-1/2 relative overflow-hidden border-r border-[#4a3728]/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExp.company}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-4 rounded-xl overflow-hidden shadow-inner"
            >
              <img 
                src={currentExp.background} 
                alt="Office" 
                className="w-full h-full object-cover sepia-[0.4] contrast-[0.9]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#4a3728]/20 mix-blend-multiply" />
              
              {/* Logo Stamp */}
              <div className="absolute bottom-6 right-6 w-24 h-24 bg-[#f4f1ea] rounded-full p-4 shadow-lg rotate-[-10deg] flex items-center justify-center border-2 border-[#4a3728]/20">
                 <img src={currentExp.logo} alt="Logo" className="w-full h-full object-contain opacity-80" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Page (Content) */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between relative z-20">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col"
            >
              <div className="border-b-2 border-[#4a3728]/10 pb-4 mb-6">
                <h2 className="text-4xl font-serif font-bold text-[#4a3728] mb-2">{currentExp.company}</h2>
                <a href={currentExp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-hand text-[#556b2f] hover:text-[#a0522d] transition-colors mb-1">
                  Visit This Company <ExternalLink size={13} />
                </a>
                <h3 className="text-xl font-hand font-bold text-[#556b2f]">{currentExp.role}</h3>
                <div className="flex gap-4 mt-2 text-[#a0522d] font-hand text-lg">
                    <span className="flex items-center gap-1"><Calendar size={16} /> {currentExp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={16} /> {currentExp.location}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h4 className="font-serif font-bold text-[#4a3728] flex items-center gap-2">
                    <Feather size={18} className="text-[#556b2f]" />
                    Notes from the journey:
                </h4>
                <ul className="space-y-4">
                    {currentExp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#4a3728]/90 font-hand text-xl leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#a0522d] shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#4a3728]/10">
             <button onClick={prevSlide} className="flex items-center gap-2 text-[#4a3728] hover:text-[#556b2f] font-hand font-bold text-lg transition-colors">
                <ChevronLeft size={20} /> Previous Page
             </button>
             <span className="font-serif italic text-[#4a3728]/40 text-sm">Page {currentIndex + 1} of {experiences.length}</span>
             <button onClick={nextSlide} className="flex items-center gap-2 text-[#4a3728] hover:text-[#556b2f] font-hand font-bold text-lg transition-colors">
                Next Page <ChevronRight size={20} />
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
