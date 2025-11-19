/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 11:52:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * PostCard.jsx — fixed layout, proper spacing, number above title
 */
import { motion } from "framer-motion";

export default function PostCard({
  post,
  index,
  openModal,
  isFavorited,
  onFavoriteChange,
}) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 12px 25px rgba(0,0,0,0.12)" }}
      className="card glass-card masonry-item p-6 rounded-xl shadow-md relative"
    >
      {/* STAR BUTTON */}
      <button
        onClick={() => onFavoriteChange(post.id)}
        className="absolute top-4 right-4 text-3xl transition hover:scale-110 select-none"
      >
        {isFavorited ? (
          <span className="text-yellow-400">★</span>
        ) : (
          <span className="text-gray-300">☆</span>
        )}
      </button>

      {/* NUMBER */}
      <div className="text-5xl font-extrabold text-gray-300 mb-6 select-none">
        {index}
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
        {post.title}
      </h2>

      {/* BODY TEXT */}
      <p className="text-gray-700 text-base leading-relaxed mb-6">
        {post.body}
      </p>

      {/* BUTTON */}
      <button
        onClick={() => openModal(post)}
        className="mt-2 px-6 py-3 w-full bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
      >
        View
      </button>
    </motion.div>
  );
}
