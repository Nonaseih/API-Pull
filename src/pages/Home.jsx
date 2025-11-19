/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/11/2025 - 01:18:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * Home.jsx — with global numbering support
 */
import { useState } from "react";
import { getPosts } from "../api/posts";
import useFetch from "../hooks/useFetch";

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

  const [search, setSearch] = useState("");
  const [filterUser, setFilterUser] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalPost, setModalPost] = useState(null);
  const [modalTranslated, setModalTranslated] = useState("");
  const [modalLoading, setModalLoading] = useState(false);

  if (loading) return <p className="p-5">Loading...</p>;
  if (error) return <p className="p-5 text-red-500">Failed to load</p>;

  // Search + filter
  let result = data.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.body.toLowerCase().includes(search.toLowerCase());

    const matchesUser = filterUser ? p.userId === Number(filterUser) : true;

    return matchesSearch && matchesUser;
  });

  // Sort
  if (sort === "title-asc") result.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "title-desc") result.sort((a, b) => b.title.localeCompare(a.title));
  if (sort === "id-asc") result.sort((a, b) => a.id - b.id);
  if (sort === "id-desc") result.sort((a, b) => b.id - a.id);

  // Pagination
  const totalPages = Math.ceil(result.length / ITEMS_PER_PAGE);
  const paged = result.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Open modal
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
    } catch (err) {
      console.error("Modal translation failed:", err);
      setModalTranslated("Translation failed.");
    }

    setModalLoading(false);
  };

  return (
    <div className="p-4">

      {/* Toolbar */}
      <div className="sticky top-0 z-40 bg-white py-3 shadow-md mb-4 flex gap-3 flex-wrap">
        <SearchBar value={search} onChange={(v) => { setPage(1); setSearch(v); }} />
        <FilterMenu value={filterUser} onChange={(v) => { setPage(1); setFilterUser(v); }} />
        <SortMenu value={sort} onChange={(v) => { setPage(1); setSort(v); }} />
      </div>

      {/* Masonry */}
      <PostMasonry 
        posts={paged} 
        openModal={openModal}
        page={page}
        perPage={ITEMS_PER_PAGE}
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
