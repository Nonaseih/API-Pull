/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 01:18:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * src/components/Post/PostCard.jsx
 * Fix spacing, big numbers, no overlap, proper button
 */
import { motion } from "framer-motion";
import { getCached } from "../../utils/translationCache";

export default function PostCard({ post, index, openModal }) {
  const isTranslated = !!getCached(post.id);

  return (
    <motion.div
      className="card glass-card masonry-item relative p-7"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: index * 0.03 }}
    >

      {/* Big number OUTSIDE the card so it doesn't touch title */}
      <span className="absolute -top-4 -left-4 px-4 py-2 text-2xl font-extrabold bg-white border shadow-md rounded-lg">
        #{index + 1}
      </span>

      {/* Translated badge */}
      {isTranslated && (
        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-green-600 text-white rounded-full shadow">
          ✓ translated
        </span>
      )}

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold text-gray-900 leading-snug">
        {post.title}
      </h3>

      {/* Body */}
      <p className="mt-3 text-[15px] text-gray-700 leading-relaxed">
        {post.body}
      </p>

      {/* Big button with proper spacing */}
      <button
        onClick={() => openModal(post)}
        className="mt-6 px-6 py-3 rounded-lg bg-black text-white text-sm font-medium shadow-md hover:scale-[1.02] transition whitespace-nowrap"
      >
        Translate
      </button>

    </motion.div>
  );
}
