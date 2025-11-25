/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 03:57:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/api/catFacts.js
import axios from "axios";

const BASE = process.env.VITE_CAT_PROXY || "https://catfact.ninja";

export async function fetchFacts(page = 1) {
  // catfact.ninja returns paginated shape: { data: [...], ... }
  const url = `${BASE}/facts?page=${page}`;
  const res = await axios.get(url);
  return res.data; // caller expects { data: [...], ... }
}
