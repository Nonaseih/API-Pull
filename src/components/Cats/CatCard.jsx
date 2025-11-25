/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 03:57:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/Cats/CatCard.jsx
import React from "react";

export default function CatCard({ factObj, index, isFavorite, onToggleFavorite, onDelete, onView }) {
  const length = factObj?.length ?? (factObj?.fact ? factObj.fact.length : 0);
  return (
    <article className="square-card card glass">
      <div className="card-top">
        <div className="card-number">{index}</div>

        <div style={{display:"flex", gap:8, alignItems:"center"}}>
          <button
            className="icon-btn"
            aria-pressed={!!isFavorite}
            title={isFavorite ? "Unfavorite" : "Favorite"}
            onClick={(e) => { e.stopPropagation(); onToggleFavorite && onToggleFavorite(index); }}
          >
            <span style={{ color: isFavorite ? "#F6C84C" : "rgba(15,23,42,0.25)", fontSize:18 }}>
              {isFavorite ? "★" : "☆"}
            </span>
          </button>
        </div>
      </div>

      <div className="card-body" onClick={() => onView && onView(factObj, index)}>
        <p>{factObj?.fact}</p>
      </div>

      <div className="card-footer">
        <div className="small-meta">{length} chars</div>

        <div style={{display:"flex", gap:8, alignItems:"center"}}>
          <button className="view-btn" onClick={(e) => { e.stopPropagation(); onView && onView(factObj, index); }}>
            View
          </button>

          <button
            className="delete-btn"
            title="Remove this fact (temporary)"
            onClick={(e) => { e.stopPropagation(); onDelete && onDelete(index); }}
          >
            ✕
          </button>
        </div>
      </div>
    </article>
  );
}
