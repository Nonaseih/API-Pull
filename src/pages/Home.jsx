/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 12:11:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * src/pages/Home.jsx — Final fixed version
 * Posts page with:
 * - NO random cat pictures in modal
 * - Cat Facts button added in header
 */

import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import PostGrid from "../components/Post/PostGrid";
import PostModal from "../components/Post/PostModal";
import SearchBar from "../components/UI/SearchBar";
import FilterMenu from "../components/UI/FilterMenu";
import SortMenu from "../components/UI/SortMenu";
import Pagination from "../components/UI/Pagination";

import "../styles/posts.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI state
  const [query, setQuery] = useState("");
  const [filterUser, setFilterUser] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const [layout, setLayout] = useState("grid");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("post_favs") || "[]");
    } catch {
      return [];
    }
  });

  const [modalPost, setModalPost] = useState(null);

  // LOAD POSTS
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    axios
      .get("/api/posts")
      .then((res) => {
        if (cancelled) return;

        const raw = res.data;

        let normalized = [];
        if (Array.isArray(raw)) normalized = raw;
        else if (Array.isArray(raw?.posts)) normalized = raw.posts;

        setPosts(normalized);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Keep favorites in LS
  useEffect(() => {
    localStorage.setItem("post_favs", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  // filtering + sorting
  const filtered = useMemo(() => {
    let out = posts.slice();

    if (query.trim()) {
      const s = query.toLowerCase();
      out = out.filter(
        (p) =>
          (p.title || "").toLowerCase().includes(s) ||
          (p.body || "").toLowerCase().includes(s)
      );
    }

    if (filterUser) out = out.filter((p) => Number(p.userId) === Number(filterUser));

    if (favoritesOnly) out = out.filter((p) => favorites.includes(p.id));

    if (sortBy === "title-asc")
      out.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    if (sortBy === "title-desc")
      out.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
    if (sortBy === "id-asc") out.sort((a, b) => a.id - b.id);
    if (sortBy === "id-desc") out.sort((a, b) => b.id - a.id);

    return out;
  }, [posts, query, filterUser, sortBy, favoritesOnly, favorites]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paged = useMemo(
    () =>
      filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE),
    [filtered, page]
  );

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  return (
    <div className="page-container p-6">
      {/* HEADER */}
      <header className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-4xl font-extrabold">Posts</h1>

        <div className="flex items-center gap-3">

          {/* GO TO CATS PAGE */}
          <button
            onClick={() => (window.location.href = "/cats")}
            className="btn bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700"
          >
            🐱 Cat Facts
          </button>

          {/* Favorites toggle */}
          <button
            onClick={() => setFavoritesOnly((v) => !v)}
            className={`btn toggle-fav ${favoritesOnly ? "active" : ""}`}
            title="Favorites only"
          >
            ★ Favorites
          </button>

          {/* Layout toggle */}
          <button
            onClick={() => setLayout((l) => (l === "grid" ? "masonry" : "grid"))}
            className="btn"
            title="Toggle layout"
          >
            {layout === "grid" ? "Masonry" : "Grid"}
          </button>
        </div>
      </header>

      {/* TOOLBAR */}
      <div className="toolbar mb-6">
        <SearchBar
          value={query}
          onChange={(v) => {
            setPage(1);
            setQuery(v);
          }}
        />
        <FilterMenu
          value={filterUser}
          onChange={(v) => {
            setPage(1);
            setFilterUser(v);
          }}
          posts={posts}
        />
        <SortMenu
          value={sortBy}
          onChange={(v) => {
            setPage(1);
            setSortBy(v);
          }}
        />
      </div>

      {/* STATES */}
      {loading && <div className="p-6 text-gray-600">Loading posts…</div>}
      {error && <div className="p-6 text-red-600">Failed to load posts.</div>}

      {/* CONTENT */}
      {!loading && !error && (
        <>
          <PostGrid
            posts={paged}
            layout={layout}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onDelete={handleDelete}
            onView={(p) => setModalPost(p)}
            startIndex={(page - 1) * ITEMS_PER_PAGE}
          />

          <Pagination current={page} totalPages={totalPages} onChange={setPage} />
        </>
      )}

      {/* MODAL */}
      <PostModal
        open={!!modalPost}
        post={modalPost}
        onClose={() => setModalPost(null)}
      />
    </div>
  );
}
