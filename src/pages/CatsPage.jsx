/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 04:15:41
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * CatsPage.jsx — FIXED to use CatGrid instead of broken CatMasonry
 */
import { useState, useEffect } from "react";
import axios from "axios";

import CatGrid from "../components/Cats/CatGrid";
import CatModal from "../components/Cats/CatModal";

export default function CatsPage() {
  const [facts, setFacts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(34);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalFact, setModalFact] = useState(null);

  const loadPage = async (p) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://catfact.ninja/facts?page=${p}`);
      setFacts(res.data.data);
      setTotalPages(res.data.last_page ?? 34);
    } catch (err) {
      console.log("Cat API issue:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPage(page);
  }, [page]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const deleteCard = (id) => {
    setFacts((prev) => prev.filter((_, i) => i + 1 !== id));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Cat Facts</h1>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900"
        >
          ← Back to Posts
        </button>
      </div>

      {/* FIX — Using CatGrid */}
      <CatGrid
        facts={facts}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onDelete={deleteCard}
        onView={setModalFact}
      />

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-40"
        >
          Previous
        </button>

        <span className="font-semibold text-gray-700">
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      <CatModal
        open={!!modalFact}
        fact={modalFact}
        onClose={() => setModalFact(null)}
      />
    </div>
  );
}
