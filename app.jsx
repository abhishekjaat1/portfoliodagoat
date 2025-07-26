import { useState } from "react";
import { Github, Linkedin, Instagram, Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file) {
      const newProject = {
        name: file.name,
        url: URL.createObjectURL(file),
      };
      setProjects([...projects, newProject]);
      setFile(null);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      <motion.header 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-2">👋 Hi, I'm Abhishek Jat</h1>
        <p className="text-xl">Psycho Da Goat 🐐 | Building Cool Stuff Online</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/" target="_blank"><Github className="w-6 h-6 hover:scale-125 transition-transform" /></a>
          <a href="https://linkedin.com/" target="_blank"><Linkedin className="w-6 h-6 hover:scale-125 transition-transform" /></a>
          <a href="https://instagram.com/" target="_blank"><Instagram className="w-6 h-6 hover:scale-125 transition-transform" /></a>
        </div>
      </motion.header>

      <motion.section className="mb-12" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <h2 className="text-3xl font-bold mb-4">🧩 Upload a Project</h2>
        <div className="flex gap-4 items-center">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} className="bg-white text-black p-2 rounded" />
          <button onClick={handleUpload} className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 flex items-center gap-2">
            <Upload className="w-4 h-4" /> Upload
          </button>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <h2 className="text-3xl font-bold mb-6">📁 My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white text-black p-4 rounded-xl shadow-lg">
              <h3 className="font-bold">{project.name}</h3>
              <a href={project.url} target="_blank" className="text-blue-600 underline">View File</a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
      }
