<template>
  <div class="min-vh-100 pb-5">
    <div class="text-center py-4">
      <h1 class="page-title">WatchList<span style="color:var(--accent)">.</span></h1>
    </div>

    <div class="container">
      <div class="row justify-content-center mb-4">
        <div class="col-12 col-md-9 col-xl-7">
          <div class="section-card" style="padding:14px 16px">
            <div class="d-flex flex-wrap align-items-center gap-2">
              <select v-model="selectedWatchlistId" class="input-dark flex-grow-1">
                <option :value="null">Select Watchlist</option>
                <option v-for="wl in store.watchlists" :key="wl.id" :value="wl.id">
                  {{ wl.name }}
                </option>
              </select>
              <div style="width:1px;height:28px;background:var(--border);flex-shrink:0"></div>
              <input
                v-model="newListName"
                type="text"
                class="input-dark"
                style="max-width:220px;flex-shrink:0"
                placeholder="New watchlist name..."
                @keyup.enter="addList"
              />
              <button type="button" class="btn-accent" style="flex-shrink:0" @click="addList">
                Add new
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeWatchlist">
        <div class="text-center mb-4">
          <p style="font-family:'Oswald',sans-serif;font-size:24px;font-weight:600">
            {{ activeWatchlist.name }}
          </p>
        </div>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <MovieCard
            v-for="movie in watchlistMovies"
            :key="movie.id"
            :movie="movie"
            :showAddToStash="true"
            :showRemove="true"
            @addToStash="store.addToStash($event)"
            @remove="store.removeFromWatchlist(activeWatchlist!.id, $event)"
          />
          <div v-if="watchlistMovies.length === 0" class="w-100 text-center py-5" style="color:var(--text-2)">
            No movies in this watchlist yet.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMoviesStore } from '../stores/movies'
import MovieCard from '../components/MovieCard.vue'

const store = useMoviesStore()
const selectedWatchlistId = ref<number | null>(store.watchlists[0]?.id ?? null)
const newListName = ref('')

const activeWatchlist = computed(() =>
  store.watchlists.find((w) => w.id === selectedWatchlistId.value) ?? null,
)

const watchlistMovies = computed(() => {
  if (!activeWatchlist.value) return []
  return activeWatchlist.value.movieIds
    .map((id) => store.getById(id))
    .filter((m) => m !== null)
})

function addList() {
  if (newListName.value.trim()) {
    store.addWatchlist(newListName.value.trim())
    newListName.value = ''
  }
}
</script>
