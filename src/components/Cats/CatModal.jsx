/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 13:00:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/Cats/CatModal.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function CatModal({ open, fact, onClose }) {
  if (!open || !fact) return null;

  const randomImage = `https://cataas.com/cat?time=${Date.now()}`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl max-w-lg w-full p-6 glass-card shadow-xl relative"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={randomImage}
            alt="Random cat"
            className="w-full rounded-xl h-56 object-cover mb-5"
          />

          {/* Text */}
          <h2 className="text-xl font-bold text-gray-900 mb-3">Cat Fact</h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            {fact.fact}
          </p>

          <div className="text-xs text-gray-500">
            {fact.length} characters
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
