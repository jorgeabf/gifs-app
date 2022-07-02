const API_KEY = "pVLWZI1CKBYwEpV9n5Jds2ZgfDmwSv28";

export default function getGifs({
  keyword = "homer",
} = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=16&offset=0&rating=g&lang=es`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
