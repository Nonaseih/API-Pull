/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 03:57:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/components/Cats/CatGrid.jsx
import React from "react";
import CatCard from "./CatCard";

export default function CatGrid({ facts = [], page = 1, favorites = [], onToggleFavorite, onDelete, onView }) {
  // facts array assumed to be the page-accumulated list
  return (
    <div className="square-grid">
      {facts.map((f, i) => {
        const globalIndex = i + 1; // caller keeps the concatenated list; index is stable per array
        const isFav = favorites.includes(globalIndex);
        return (
          <CatCard
            key={globalIndex}
            factObj={f}
            index={globalIndex}
            isFavorite={isFav}
            onToggleFavorite={() => onToggleFavorite(globalIndex)}
            onDelete={() => onDelete(globalIndex)}
            onView={(obj, idx) => onView && onView(obj, idx)}
          />
        );
      })}
    </div>
  );
}
