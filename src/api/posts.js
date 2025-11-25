/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 20/11/2025 - 14:11:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import axios from "axios";

export const getPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};
