/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 24/11/2025 - 13:12:55
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/pages/Cats.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getCatFacts } from "../api/cats";
import CatMasonry from "../components/Cats/CatGrid";

export default function Cats() {
  const [facts, setFacts] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef(null);

  // Load cat facts
  const loadMore = async () => {
    if (loading) return;
    setLoading(true);

    const data = await getCatFacts(page);
    setFacts((prev) => [...prev, ...data.data]);
    setPage((p) => p + 1);

    setLoading(false);
  };

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);

  // Delete fact temporarily
  const deleteFact = (index) => {
    setFacts((prev) => prev.filter((_, i) => i !== index));
  };

  // Favorite toggle
  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">🐱 Cat Facts</h1>

      <CatMasonry
        facts={facts}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onDelete={deleteFact}
      />

      {/* infinite scroll trigger */}
      <div ref={loaderRef} className="py-10 text-center text-gray-500">
        {loading ? "Loading..." : "Scroll to load more"}
      </div>
    </div>
  );
}
