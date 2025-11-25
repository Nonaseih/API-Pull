/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 16:40:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState } from "react";
import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { getPosts } from "../api/posts";

import PostList from "../components/Post/PostList";
import PostModal from "../components/Post/PostModal";

import { translateToEnglish } from "../utils/translate";

export default function Home() {
  const { data, loading } = useFetch(getPosts, []);
  const [modal, setModal] = useState(null);

  const view = async (post) => {
    setModal({ loading: true, post, translated: "" });

    try {
      const translated = await translateToEnglish(post.body);
      setModal({ loading: false, post, translated });
    } catch (err) {
      setModal({ loading: false, post, translated: "Translation failed." });
    }
  };

  return (
    <div className="p-6">
      {/* PAGE HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold">Posts</h1>

        {/* Cat Facts Button */}
        <Link
          to="/cats"
          className="
            px-4 py-2 
            bg-purple-600 
            text-white 
            rounded-lg 
            font-semibold 
            hover:bg-purple-700 
            transition
          "
        >
          🐱 Cat Facts
        </Link>
      </div>

      {/* POST LIST */}
      {loading ? (
        "Loading..."
      ) : (
        <PostList posts={data} page={1} perPage={100} onView={view} />
      )}

      {/* MODAL */}
      {modal && (
        <PostModal
          open={true}
          post={modal.post}
          translated={modal.translated}
          loading={modal.loading}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
