import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ZoomOut, FileText } from 'lucide-react';

const cvRoles = [
  {
    id: 'software-engineer',
    label: 'Software Engineer',
    pages: [
      '/images/CV_SoftwareEng_page1.png',
      '/images/CV_SoftwareEng_page2.png',
    ],
  },
];

export default function CV() {
  const [activeRole, setActiveRole] = useState(cvRoles[0].id);
  const [zoom, setZoom] = useState(1);

  const currentRole = cvRoles.find((r) => r.id === activeRole)!;

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top bar: role tabs + zoom controls */}
      <div className="flex items-center justify-between px-6 md:px-12 py-3 border-b border-[#4a3728]/10 bg-[#f4f1ea]/80 backdrop-blur-sm z-20">
        {/* Role tabs */}
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-[#556b2f]" />
          <div className="flex gap-1">
            {cvRoles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`px-4 py-1.5 font-hand text-sm font-bold rounded-full border-2 transition-all duration-200 ${
                  activeRole === role.id
                    ? 'bg-[#556b2f] text-[#f4f1ea] border-[#556b2f]'
                    : 'bg-transparent text-[#4a3728]/70 border-[#4a3728]/20 hover:border-[#556b2f]/50 hover:text-[#556b2f]'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        {/* Zoom controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            className="p-2 rounded-full border border-[#4a3728]/20 text-[#4a3728]/60 hover:text-[#556b2f] hover:border-[#556b2f]/40 transition-all"
            aria-label="Zoom out"
          >
            <ZoomOut size={16} />
          </button>
          <span className="font-hand text-sm text-[#4a3728]/50 w-12 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="p-2 rounded-full border border-[#4a3728]/20 text-[#4a3728]/60 hover:text-[#556b2f] hover:border-[#556b2f]/40 transition-all"
            aria-label="Zoom in"
          >
            <ZoomIn size={16} />
          </button>
        </div>
      </div>

      {/* CV pages scroll area */}
      <div className="flex-1 overflow-auto scrollbar-hide px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            {currentRole.pages.map((src, i) => (
              <div
                key={i}
                className="shadow-[0_8px_30px_rgba(74,55,40,0.2)] border border-[#4a3728]/10"
                style={{
                  width: `${Math.round(700 * zoom)}px`,
                  maxWidth: '95vw',
                  transformOrigin: 'top center',
                }}
              >
                <img
                  src={src}
                  alt={`CV page ${i + 1}`}
                  className="w-full h-auto object-contain bg-white"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
