import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

// Firefly Generator
const Fireflies = () => {
  const fireflies = new Array(15).fill(0).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    moveX: (Math.random() - 0.5) * 100 + 'px',
    moveY: (Math.random() - 0.5) * 100 + 'px',
    delay: Math.random() * 5 + 's',
    duration: 5 + Math.random() * 10 + 's'
  }));

  return (
    <>
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="firefly"
          style={{
            left: f.left,
            top: f.top,
            // @ts-ignore
            '--move-x': f.moveX,
            '--move-y': f.moveY,
            animationDelay: f.delay,
            animationDuration: f.duration
          }}
        />
      ))}
    </>
  );
};

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col font-hand">
      {/* Global Effects */}
      <div className="noise-overlay" />
      <div className="vintage-filter" />
      <Fireflies />

      {/* Navigation Bar */}
      <nav className="w-full p-6 md:px-12 flex justify-between items-center z-50 relative">
        <Link to="/" className="text-[#4a3728] font-serif font-bold text-2xl tracking-wide hover:text-[#556b2f] transition-colors">
          PORTFOLIO
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium transition-all duration-300 relative group ${
                location.pathname === item.path ? 'text-[#556b2f]' : 'text-[#4a3728]/70'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#556b2f] transition-all duration-300 ${
                location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#4a3728]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#f4f1ea] flex flex-col items-center justify-center gap-8 z-40"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-3xl font-serif font-bold ${
                  location.pathname === item.path ? 'text-[#556b2f]' : 'text-[#4a3728]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 w-full relative z-10 overflow-y-auto scrollbar-hide flex flex-col">
         <Outlet />
      </main>

      {/* Footer / Socials */}
      <footer className="p-6 md:px-12 flex justify-between items-end text-[#4a3728]/60 text-sm z-50 relative">
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#556b2f] transition-colors hover:scale-110 transform duration-200"><Github size={24} /></a>
          <a href="#" className="hover:text-[#556b2f] transition-colors hover:scale-110 transform duration-200"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-[#a0522d] transition-colors hover:scale-110 transform duration-200"><Mail size={24} /></a>
        </div>
        <div className="font-serif italic">
          © 2026 Handcrafted Portfolio
        </div>
      </footer>
    </div>
  );
}
