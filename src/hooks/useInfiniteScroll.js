/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 14:12:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useEffect } from "react";

export default function useInfiniteScroll(callback) {
  useEffect(() => {
    const handle = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        callback();
      }
    };

    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, [callback]);
}
