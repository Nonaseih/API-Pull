/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 10:32:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
/**
 * src/components/Post/PostModal.jsx
 * Shows post with big fonts, translated text (via /api/translate), and random cat image
 */
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostModal({ open = false, post = null, onClose = () => {} }) {
  const [loading, setLoading] = useState(false);
  const [translated, setTranslated] = useState({ title: "", body: "" });
  const [imageUrl, setImageUrl] = useState("");

  if (!open || !post) return null;

  const runTranslate = async () => {
    setLoading(true);
    setTranslated({ title: "Translating…", body: "Translating…" });
    try {
      const res = await axios.post("/api/translate", { title: post.title || "", body: post.body || "" });
      setTranslated({ title: res.data.title || "", body: res.data.body || "" });
    } catch (e) {
      setTranslated({ title: "Translation failed", body: "Translation failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-card">
        {imageUrl && (
          <div className="modal-image-wrap">
            <img src={imageUrl} alt="Random cat" className="modal-image" />
          </div>
        )}

        <div className="modal-body">
          <h2 className="modal-title">{post.title}</h2>
          <p className="modal-text">{post.body}</p>

          {translated.title || translated.body ? (
            <div className="translation-block">
              <h3 className="translation-title">Translated</h3>
              <h4 className="translation-sub">{translated.title}</h4>
              <p className="translation-body">{translated.body}</p>
            </div>
          ) : null}

          <div className="modal-actions">
            <button onClick={runTranslate} className="btn primary" disabled={loading}>
              {loading ? "Translating…" : "Translate"}
            </button>
            <button onClick={onClose} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
