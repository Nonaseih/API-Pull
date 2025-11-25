/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 03:57:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/Cats/CatModal.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CatModal({ open, fact, index, onClose }) {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (!open) return;
    // get random cat image via placekitten or thecatapi (no key required for simple endpoints)
    async function fetchImg() {
      try {
        // TheCatAPI requires an API key for some features; using placekitten as fallback
        const r = await axios.get(`https://placekitten.com/800/600`, { responseType: "blob" });
        const url = URL.createObjectURL(r.data);
        setImgUrl(url);
      } catch (e) {
        setImgUrl(""); // okay to show no image
      }
    }
    fetchImg();
    return () => { setImgUrl(""); };
  }, [open]);

  if (!open || !fact) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(7,10,12,0.45)", padding: 20 }}
      onClick={onClose}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{ width: "min(920px, 96%)", maxHeight: "86vh", overflowY: "auto", padding: 22, borderRadius: 14 }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>{`Fact ${index}`}</h2>
          <button onClick={onClose} className="icon-btn" aria-label="Close">✕</button>
        </div>

        {imgUrl ? (
          <img src={imgUrl} alt="random cat" style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 8, marginTop: 12 }} />
        ) : null}

        <p style={{ marginTop: 14, color: "var(--muted)", fontSize: 16, lineHeight: 1.5 }}>
          {fact.fact}
        </p>

        <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "rgba(0,0,0,0.45)" }}>{fact.length} chars</div>
          <div style={{ color: "rgba(0,0,0,0.45)" }}>Source: catfact.ninja</div>
        </div>
      </div>
    </div>
  );
}
