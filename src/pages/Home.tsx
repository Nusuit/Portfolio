import { motion } from 'motion/react';
import { Github, Linkedin, Facebook, Mail, FileText, Code, Briefcase, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-24 pt-4 pb-12 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#a0522d]/10 blob-shape-2 animate-breeze -z-10" style={{ animationDelay: '2s' }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-start">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center space-y-8 z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4 text-[#556b2f]">
                <Leaf size={24} className="animate-breeze" />
                <span className="font-hand text-xl tracking-widest">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#4a3728] mb-4 tracking-tight leading-none whitespace-nowrap">
              Phan Huy Kien
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#a0522d] font-hand font-bold italic mb-6">
              ~ Software Engineer ~
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-8"
          >
            {/* Organic Card 1 */}
            <div className="relative p-8 border-hand-drawn bg-[#f4f1ea] shadow-[4px_4px_0px_rgba(74,55,40,0.1)] hover:shadow-[6px_6px_0px_rgba(74,55,40,0.2)] transition-shadow duration-300">
              <h3 className="text-2xl font-serif font-bold text-[#4a3728] mb-3 flex items-center gap-2">
                <FileText size={24} className="text-[#556b2f]" />
                About Me
              </h3>
              <p className="text-lg text-[#4a3728]/80 leading-relaxed font-hand">
                I'm a Software Engineer with a passion for building clean, performant, and user-friendly applications. With hands-on experience across the full stack — from crafting pixel-perfect UIs with React & TypeScript to designing robust back-end services with Spring Boot and Node.js — I thrive on turning complex problems into elegant solutions. I'm a quick learner who adapts fast to new technologies, enjoys collaborative environments, and always aims to write code that's both meaningful and maintainable.
              </p>
            </div>

            {/* Organic Card 2 */}
            <div className="relative p-8 border-hand-drawn bg-[#f4f1ea] shadow-[4px_4px_0px_rgba(74,55,40,0.1)] hover:shadow-[6px_6px_0px_rgba(74,55,40,0.2)] transition-shadow duration-300" style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}>
              <h3 className="text-2xl font-serif font-bold text-[#4a3728] mb-3 flex items-center gap-2">
                <Code size={24} className="text-[#a0522d]" />
                My Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {['ReactJS', 'NextJS', 'TypeScript', 'JavaScript (ES6+)', 'Java Spring Boot', 'Node.js', 'ExpressJS', 'Docker', 'Git'].map((tech) => (
                    <span key={tech} className="px-4 py-1 bg-[#556b2f]/10 text-[#556b2f] rounded-full text-lg font-hand border border-[#556b2f]/30">
                        {tech}
                    </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
            <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="#" icon={<Mail size={20} />} label="Email" />
          </motion.div>
        </div>

        {/* Right Column: Photos */}
        <div className="hidden md:flex items-start justify-center relative pt-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full max-w-sm"
          >
            {/* ── Botanical branch cluster: top-right ── */}
            <div className="absolute -top-10 -right-8 z-20 pointer-events-none" style={{ opacity: 0.75 }}>
              <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 92 C55 68 50 44 68 12" stroke="#556b2f" strokeWidth="2" strokeLinecap="round"/>
                <path d="M57 56 C38 49 20 38 14 20" stroke="#556b2f" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M63 36 C80 28 95 18 96 6" stroke="#556b2f" strokeWidth="1.5" strokeLinecap="round"/>
                <ellipse cx="42" cy="30" rx="10" ry="5" fill="#84cc16" opacity="0.5" transform="rotate(-50 42 30)"/>
                <ellipse cx="20" cy="22" rx="9" ry="4.5" fill="#556b2f" opacity="0.4" transform="rotate(-60 20 22)"/>
                <ellipse cx="84" cy="14" rx="9" ry="4.5" fill="#84cc16" opacity="0.42" transform="rotate(22 84 14)"/>
                <ellipse cx="98" cy="7" rx="7" ry="3.5" fill="#556b2f" opacity="0.33" transform="rotate(30 98 7)"/>
                <ellipse cx="62" cy="46" rx="9" ry="5" fill="#84cc16" opacity="0.38" transform="rotate(-20 62 46)"/>
                <circle cx="68" cy="11" r="3" fill="#a0522d" opacity="0.5"/>
                <circle cx="72" cy="7" r="2" fill="#a0522d" opacity="0.4"/>
                <circle cx="64" cy="8" r="2" fill="#a0522d" opacity="0.35"/>
              </svg>
            </div>

            {/* ── Botanical sprig: top-left ── */}
            <div className="absolute -top-6 -left-10 z-20 pointer-events-none" style={{ opacity: 0.65, transform: 'scaleX(-1)' }}>
              <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
                <path d="M40 65 C37 48 33 30 44 8" stroke="#556b2f" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M38 44 C24 37 12 28 9 14" stroke="#556b2f" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M42 28 C56 22 63 14 62 5" stroke="#556b2f" strokeWidth="1.3" strokeLinecap="round"/>
                <ellipse cx="20" cy="20" rx="9" ry="4.5" fill="#84cc16" opacity="0.45" transform="rotate(-48 20 20)"/>
                <ellipse cx="56" cy="10" rx="8" ry="4" fill="#556b2f" opacity="0.35" transform="rotate(18 56 10)"/>
                <ellipse cx="39" cy="36" rx="8" ry="4.5" fill="#84cc16" opacity="0.4" transform="rotate(-25 39 36)"/>
              </svg>
            </div>

            {/* Personal Photo — main organic blob frame */}
            <div className="relative aspect-square z-10">
              <div className="absolute inset-0 border-[3px] border-[#4a3728] z-10" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
              <div className="absolute inset-2 overflow-hidden z-0" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
                <img
                  src="/images/avatar.jpg"
                  alt="Phan Huy Kien"
                  className="w-full h-full object-cover object-top sepia-[0.15] contrast-[0.95] brightness-[1.05]"
                />
              </div>

              {/* scattered leaves around the blob frame */}
              <div className="absolute -top-3 right-[28%] text-[#556b2f] animate-breeze z-20" style={{ transform: 'rotate(20deg)' }}>
                <Leaf size={20} fill="#556b2f" fillOpacity={0.4} />
              </div>
              <div className="absolute top-[12%] -right-5 text-[#84cc16] animate-breeze z-20" style={{ animationDelay: '0.6s', transform: 'rotate(-20deg)' }}>
                <Leaf size={17} fill="#84cc16" fillOpacity={0.45} />
              </div>
              <div className="absolute top-[38%] -right-7 text-[#556b2f] animate-breeze z-20" style={{ animationDelay: '1.3s', transform: 'rotate(45deg)' }}>
                <Leaf size={24} fill="#556b2f" fillOpacity={0.28} />
              </div>
              <div className="absolute bottom-[10%] -right-4 text-[#84cc16] animate-breeze z-20" style={{ animationDelay: '0.3s', transform: 'rotate(70deg)' }}>
                <Leaf size={16} fill="#84cc16" fillOpacity={0.35} />
              </div>
              <div className="absolute -bottom-3 right-[45%] text-[#a0522d] animate-breeze z-20" style={{ animationDelay: '0.9s', transform: 'rotate(-8deg)' }}>
                <Leaf size={18} fill="#a0522d" fillOpacity={0.32} />
              </div>
              <div className="absolute top-[55%] -left-6 text-[#556b2f] animate-breeze z-20" style={{ animationDelay: '1.8s', transform: 'rotate(55deg)' }}>
                <Leaf size={22} fill="#556b2f" fillOpacity={0.32} />
              </div>
              <div className="absolute top-[25%] -left-4 text-[#84cc16] animate-breeze z-20" style={{ animationDelay: '2.2s', transform: 'rotate(-35deg)' }}>
                <Leaf size={15} fill="#84cc16" fillOpacity={0.38} />
              </div>
            </div>

            {/* Forest image — polaroid style, peeking below the portrait */}
            <div className="relative -mt-10 mx-auto w-[85%] z-0" style={{ transform: 'rotate(2.5deg)' }}>
              <div className="bg-white p-2 pb-8 shadow-[4px_6px_16px_rgba(74,55,40,0.25)] border border-[#4a3728]/15">
                <div className="overflow-hidden aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop"
                    alt="Forest Spirit"
                    className="w-full h-full object-cover sepia-[0.3] contrast-[0.9] brightness-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#556b2f]/10 mix-blend-multiply" />
                </div>
              </div>
              <span className="absolute bottom-1.5 left-0 right-0 text-center text-sm text-[#4a3728]/50 font-hand italic">somewhere in the wild...</span>
            </div>

            {/* bottom-left accent */}
            <div className="absolute -bottom-2 -left-6 text-[#a0522d] animate-breeze z-20" style={{ animationDelay: '1s' }}>
              <Leaf size={28} fill="#a0522d" fillOpacity={0.22} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      className="p-3 bg-[#f4f1ea] border border-[#4a3728]/30 rounded-full text-[#4a3728] hover:bg-[#556b2f] hover:text-[#f4f1ea] hover:border-[#556b2f] transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
