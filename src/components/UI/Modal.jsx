/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 11:38:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * PostCard.jsx — Clean big cards with single View button
 */
import { useState } from "react";
import { toggleFavorite, isFavorite } from "../../utils/favorites";

export default function Modal({ open, onClose, post, translated, loading }) {
  if (!open || !post) return null; // prevents crashes

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]">
      <div className="bg-white rounded-xl p-8 w-[90%] max-w-3xl shadow-xl relative">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-6">{post.title}</h2>

        {/* ORIGINAL */}
        <div className="mb-6">
          <strong className="font-semibold">Original:</strong>
          <p className="mt-2 text-lg leading-relaxed">
            {post.body}
          </p>
        </div>

        {/* TRANSLATION */}
        <div className="bg-gray-100 p-4 rounded-lg text-lg">
          <strong className="font-semibold">Translation:</strong>
          <p className="mt-2">
            {loading ? "Translating..." : translated}
          </p>
        </div>
      </div>
    </div>
  );
}
