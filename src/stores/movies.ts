import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Movie {
  id: number
  title: string
  year: number
  genre: string[]
  rating: number | null
  posterUrl: string
  trailerUrl: string
  length: string
  dateStashed: string | null
}

export interface Watchlist {
  id: number
  name: string
  movieIds: number[]
}

const MOCK_MOVIES: Movie[] = [
  {
    id: 1,
    title: 'Taxi Driver',
    year: 1976,
    genre: ['Drama', 'Crime'],
    rating: 7,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    trailerUrl: '',
    length: '1h 54m',
    dateStashed: '2024-05-10',
  },
  {
    id: 2,
    title: 'Godzilla Minus One',
    year: 2023,
    genre: ['Action', 'Drama', 'Horror'],
    rating: 7,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOTI5MjNjMTMtN2NiNC00YjBlLTgzMWQtMGRhZDZkYmY1NGU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
    trailerUrl: '',
    length: '2h 5m',
    dateStashed: '2024-05-22',
  },
  {
    id: 3,
    title: 'The Godfather',
    year: 1972,
    genre: ['Drama', 'Crime'],
    rating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    trailerUrl: '',
    length: '2h 55m',
    dateStashed: null,
  },
  {
    id: 4,
    title: 'Interstellar',
    year: 2014,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    trailerUrl: '',
    length: '2h 49m',
    dateStashed: null,
  },
  {
    id: 5,
    title: 'Parasite',
    year: 2019,
    genre: ['Comedy', 'Drama', 'Thriller'],
    rating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    trailerUrl: '',
    length: '2h 12m',
    dateStashed: null,
  },
]

const MOCK_WATCHLISTS: Watchlist[] = [
  { id: 1, name: 'Movies to watch this month', movieIds: [3, 4, 5] },
  { id: 2, name: 'Horror classics', movieIds: [] },
]

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>(MOCK_MOVIES)
  const watchlists = ref<Watchlist[]>(MOCK_WATCHLISTS)
  const stash = ref<Movie[]>(MOCK_MOVIES.filter((m) => m.dateStashed !== null))

  function getById(id: number) {
    return movies.value.find((m) => m.id === id) ?? null
  }

  function addToStash(movieId: number) {
    const movie = movies.value.find((m) => m.id === movieId)
    if (movie && !stash.value.find((m) => m.id === movieId)) {
      movie.dateStashed = new Date().toISOString().slice(0, 10)
      stash.value.push(movie)
    }
  }

  function removeFromWatchlist(watchlistId: number, movieId: number) {
    const wl = watchlists.value.find((w) => w.id === watchlistId)
    if (wl) wl.movieIds = wl.movieIds.filter((id) => id !== movieId)
  }

  function addWatchlist(name: string) {
    const id = Math.max(0, ...watchlists.value.map((w) => w.id)) + 1
    watchlists.value.push({ id, name, movieIds: [] })
  }

  return { movies, watchlists, stash, getById, addToStash, removeFromWatchlist, addWatchlist }
})
