/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 14:11:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useEffect, useState } from "react";

export default function useFetch(fn, deps = []) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fn()
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, deps);

  return { data, loading, error };
}
