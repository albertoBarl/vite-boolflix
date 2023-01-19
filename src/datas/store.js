import { reactive } from "vue";
export const store = reactive({
  movieUrl:
    "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=IT&query=",
  tvUrl:
    "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=IT&query=",
  movieList: [],
  TVList: [],
  movieGens: [
    {
      id: 28,
      name: "Azione",
    },
    {
      id: 12,
      name: "Avventura",
    },
    {
      id: 16,
      name: "Animazione",
    },
    {
      id: 35,
      name: "Commedia",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentario",
    },
    {
      id: 18,
      name: "Dramma",
    },
    {
      id: 10751,
      name: "Famiglia",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "Storia",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Musica",
    },
    {
      id: 9648,
      name: "Mistero",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Fantascienza",
    },
    {
      id: 10770,
      name: "televisione film",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "Guerra",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
});
