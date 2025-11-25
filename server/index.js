/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 25/11/2025 - 11:51:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

/* TRANSLATE */
app.post("/api/translate", async (req, res) => {
  const { title, body } = req.body;

  try {
    const translate = async (text) => {
      const url = "https://translate.googleapis.com/translate_a/single";
      const params = new URLSearchParams({
        client: "gtx",
        sl: "auto",
        tl: "en",
        dt: "t",
        q: text,
      });

      const r = await fetch(`${url}?${params.toString()}`);
      const json = await r.json();
      return json[0].map((t) => t[0]).join("");
    };

    res.json({
      title: await translate(title),
      body: await translate(body),
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Translation failed" });
  }
});

/* CAT FACTS */
app.get("/api/catfacts", async (req, res) => {
  const page = req.query.page || 1;

  try {
    const r = await fetch(`https://catfact.ninja/facts?page=${page}`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error("Cat API error:", err);
    res.status(500).json({ error: "Failed to load cat facts" });
  }
});

/* POSTS (IMPORTANT) */
app.get("/api/posts", async (req, res) => {
  try {
    const r = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error("Posts API error:", err);
    res.status(500).json({ error: "Failed to load posts" });
  }
});

app.listen(5000, () => console.log("API running at http://localhost:5000"));
