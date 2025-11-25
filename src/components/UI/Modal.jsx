/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 12:49:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Modal.jsx — final working translation modal
 */
import { motion } from "framer-motion";

export default function Modal({
  open,
  onClose,
  post,
  loading,
  translatedTitle,
  translatedBody,
}) {
  if (!open || !post) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          ✕
        </button>

        {/* Original Title */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          {post.title}
        </h2>

        {/* Original Body */}
        <p className="text-gray-700 leading-relaxed mb-6">
          {post.body}
        </p>

        <hr className="my-4" />

        {/* Translation Section */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-900">Translated</h3>

          {loading ? (
            <p className="mt-3 text-gray-600 text-lg">Translating…</p>
          ) : (
            <>
              <p className="mt-4 text-lg font-semibold text-gray-800">
                {translatedTitle || "— no translated title —"}
              </p>

              <p className="mt-2 text-gray-700 leading-relaxed">
                {translatedBody || "— no translated text —"}
              </p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
