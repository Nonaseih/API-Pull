/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 13:17:27
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CatMasonry from "../../components/Cats/CatCard";
import InfiniteTrigger from "../../components/UI/InfiniteTrigger";

export default function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [finished, setFinished] = useState(false);

  const loadFacts = useCallback(async () => {
    if (loadingMore || finished) return;

    setLoadingMore(true);

    try {
      const res = await axios.get(`https://catfact.ninja/facts?page=${page}`);
      const newFacts = res.data.data;

      if (newFacts.length === 0) {
        setFinished(true);
        return;
      }

      setFacts((prev) => [...prev, ...newFacts]);
      setPage((p) => p + 1);
    } finally {
      setLoadingMore(false);
    }
  }, [page, loadingMore, finished]);

  // load first page
  useEffect(() => {
    loadFacts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6">Cat Facts</h1>

      <CatMasonry facts={facts} />

      {!finished && (
        <InfiniteTrigger onIntersect={loadFacts} />
      )}
    </div>
  );
}
