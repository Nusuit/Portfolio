import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Award, Star, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'university',
    label: 'University',
    icon: <GraduationCap size={20} />,
    items: [
      {
        id: 'uit',
        title: "University of Information Technology",
        subtitle: "Information Systems — Ho Chi Minh City (2022 – 2026)",
        description: "Pursuing a Bachelor's degree in Information Systems at UIT, Ho Chi Minh City. Recipient of the NNS Scholarship, recognizing academic achievement and potential throughout the program.",
        image: "/images/UIT.jfif"
      }
    ]
  },
  {
    id: 'certificates',
    label: 'Certificates',
    icon: <Award size={20} />,
    items: [
      {
        id: 'ielts',
        title: "IELTS 6.0",
        subtitle: "English Proficiency Certificate",
        description: "Achieved an overall band score of 6.0, demonstrating competent proficiency in the English language across Listening, Reading, Writing, and Speaking.",
        image: "/images/ielts-certificate.jpg"
      },
      {
        id: 'computational-thinking',
        title: "Computational Thinking for Problem Solving",
        subtitle: "Coursera — University of Pennsylvania",
        description: "Completed a structured course covering decomposition, pattern recognition, abstraction, and algorithms — core foundations of computational thinking applied to real-world problem solving.",
        image: "/images/Coursera_ProblemSolving.png"
      }
    ]
  },
  {
    id: 'others',
    label: 'Others',
    icon: <Star size={20} />,
    items: [
      {
        id: 'meta-frontend',
        title: "Meta Frontend Developer Course",
        subtitle: "Continuous Learning — Self-paced",
        description: "Worked through Meta's professional frontend development curriculum, covering React fundamentals, UI/UX principles, version control, and modern JavaScript practices.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop"
      },
      {
        id: 'f8-fullstack',
        title: "Full-Stack Web Development",
        subtitle: "F8 (fullstack.edu.vn) — Self-paced",
        description: "Completed an in-depth fullstack web development course by F8, covering HTML/CSS, JavaScript, ReactJS, Node.js, and database management through hands-on projects.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
      },
      {
        id: 'aws-self',
        title: "AWS Cloud Computing",
        subtitle: "Self-Study via YouTube",
        description: "Self-studied AWS cloud computing concepts including EC2, S3, Lambda, and cloud architecture patterns to support backend and deployment skills in personal projects.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
      }
    ]
  }
];

export default function Education() {
  const [selectedItem, setSelectedItem] = useState(categories[0].items[0]);

  return (
    <div className="flex-1 flex items-center justify-center p-6 md:p-12 py-4">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-[80vh]">
        
        {/* Left Column: Navigation List */}
        <div className="lg:col-span-5 flex flex-col space-y-8 overflow-y-auto pr-4 scrollbar-hide">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-2 text-[#556b2f] font-serif font-bold uppercase tracking-wider text-sm border-b-2 border-[#4a3728]/20 pb-2">
                {category.icon}
                {category.label}
              </div>
              
              <div className="space-y-3">
                {category.items.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5 }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${
                      selectedItem.id === item.id 
                        ? 'bg-[#f4f1ea] border-[#556b2f] shadow-[4px_4px_0px_rgba(85,107,47,0.2)]' 
                        : 'bg-transparent border-transparent hover:bg-[#4a3728]/5 hover:border-[#4a3728]/10'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-bold text-lg font-serif ${selectedItem.id === item.id ? 'text-[#4a3728]' : 'text-[#4a3728]/80'}`}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#a0522d] mt-1 font-hand">{item.subtitle}</p>
                      </div>
                      {selectedItem.id === item.id && (
                        <ChevronRight className="text-[#556b2f] mt-1" size={18} />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Image Preview */}
        <div className="lg:col-span-7 relative h-full rounded-[2rem] overflow-hidden border-4 border-[#4a3728] bg-[#f4f1ea] shadow-[8px_8px_0px_rgba(74,55,40,0.15)]" style={{ borderRadius: '2% 1% 1% 2% / 1% 2% 2% 1%' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
