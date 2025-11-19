/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 12:05:55
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Home.jsx — Splash + Favorites + Filters + Working Star Buttons
 */
import { useState } from "react";
import { getPosts } from "../api/posts";
import useFetch from "../hooks/useFetch";

import SplashPage from "../components/UI/SplashPage";
import PostMasonry from "../components/Post/PostMasonry";
import SearchBar from "../components/UI/SearchBar";
import FilterMenu from "../components/UI/FilterMenu";
import SortMenu from "../components/UI/SortMenu";
import Pagination from "../components/UI/Pagination";
import Modal from "../components/UI/Modal";

import { translateToEnglish } from "../utils/translate";
import { getCached, setCached } from "../utils/translationCache";

export default function Home() {
  const { data, loading, error } = useFetch(getPosts);

  // Splash
  const [showSplash, setShowSplash] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [filterUser, setFilterUser] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  // Favorites
  const [favorites, setFavorites] = useState([]);
  const [showOnlyFav, setShowOnlyFav] = useState(false);

  const ITEMS_PER_PAGE = 12;

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPost, setModalPost] = useState(null);
  const [modalTranslated, setModalTranslated] = useState("");
  const [modalLoading, setModalLoading] = useState(false);

  if (loading) return <p className="p-5">Loading...</p>;
  if (error) return <p className="p-5 text-red-500">Failed to load</p>;

  // FAVORITES HANDLER
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  // FILTER
  let result = data.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.body.toLowerCase().includes(search.toLowerCase());

    const matchesUser = filterUser ? p.userId === Number(filterUser) : true;

    return matchesSearch && matchesUser;
  });

  // APPLY FAVORITES FILTER
  if (showOnlyFav) {
    result = result.filter((p) => favorites.includes(p.id));
  }

  // SORT
  if (sort === "title-asc") result.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "title-desc") result.sort((a, b) => b.title.localeCompare(a.title));
  if (sort === "id-asc") result.sort((a, b) => a.id - b.id);
  if (sort === "id-desc") result.sort((a, b) => b.id - a.id);

  // PAGINATION
  const totalPages = Math.ceil(result.length / ITEMS_PER_PAGE);
  const paged = result.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // MODAL
  const openModal = async (post) => {
    setModalPost(post);
    setModalOpen(true);

    const cached = getCached(post.id);
    if (cached) {
      setModalTranslated(cached);
      return;
    }

    setModalLoading(true);
    try {
      const translated = await translateToEnglish(post.body);
      setCached(post.id, translated);
      setModalTranslated(translated);
    } catch {
      setModalTranslated("Translation failed.");
    }
    setModalLoading(false);
  };

  // SPLASH
  if (showSplash) return <SplashPage onContinue={() => setShowSplash(false)} />;

  return (
    <div className="p-4">

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
        POSTS
      </h1>

      {/* Toolbar */}
      <div className="sticky top-0 z-40 bg-white py-3 shadow-md mb-6 flex gap-4 flex-wrap">
        <SearchBar value={search} onChange={(v) => { setPage(1); setSearch(v); }} />
        <FilterMenu value={filterUser} onChange={(v) => { setPage(1); setFilterUser(v); }} />
        <SortMenu value={sort} onChange={(v) => { setPage(1); setSort(v); }} />

        {/* Favorites filter */}
        <button
          onClick={() => setShowOnlyFav(!showOnlyFav)}
          className="px-4 py-2 rounded-lg bg-black text-white font-semibold"
        >
          {showOnlyFav ? "Show All" : "Favorites Only"}
        </button>
      </div>

      <PostMasonry
        posts={paged}
        page={page}
        perPage={ITEMS_PER_PAGE}
        openModal={openModal}
        favorites={favorites}
        onFavoriteChange={toggleFavorite}
      />

      <Pagination current={page} totalPages={totalPages} onChange={setPage} />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        post={modalPost}
        translated={modalTranslated}
        loading={modalLoading}
      />
    </div>
  );
}
