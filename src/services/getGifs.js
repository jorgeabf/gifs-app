const API_KEY = "pVLWZI1CKBYwEpV9n5Jds2ZgfDmwSv28";

export default function getGifs({
  keyword = "homer",
} = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map(
        (image) => image.images.downsized_medium.url
      );
      return gifs;
    });
}
