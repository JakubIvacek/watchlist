<template>
  <div class="min-vh-100 pb-5">
    <div class="text-center py-4">
      <h1 class="page-title">Stash<span style="color:var(--accent)">.</span></h1>
    </div>

    <div class="container">
      <div class="row justify-content-center mb-4">
        <div class="col-12 col-md-10 col-xl-8">
          <div class="section-card" style="padding:14px 16px">
            <div class="d-flex flex-wrap align-items-center gap-2">
              <select v-model="filters.genre" class="input-dark" style="width:auto;flex-shrink:0">
                <option value="">All Genres</option>
                <option>Horror</option>
                <option>Comedy</option>
                <option>Action</option>
                <option>Drama</option>
              </select>
              <select v-model="filters.year" class="input-dark" style="width:auto;flex-shrink:0">
                <option value="">All Years</option>
                <option v-for="y in years" :key="y">{{ y }}</option>
              </select>
              <select v-model="filters.sort" class="input-dark" style="width:auto;flex-shrink:0">
                <option value="newest">Newer first</option>
                <option value="oldest">Older first</option>
                <option value="best">Best rating</option>
                <option value="worst">Worst rating</option>
              </select>
              <div class="search-box-dark flex-grow-1" style="min-width:160px">
                <i class="fas fa-search"></i>
                <input v-model="filters.query" type="text" placeholder="Search in stash..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-3" style="font-family:'Oswald',sans-serif;font-size:22px;font-weight:600">
        My Stash
      </div>

      <div class="row g-3">
        <div v-for="movie in filteredStash" :key="movie.id" class="col-12 col-md-6 col-xl-4">
          <MovieCard :movie="movie" :horizontal="true" :showDetails="true" />
        </div>
      </div>

      <div v-if="filteredStash.length === 0" class="text-center py-5">
        <i class="fas fa-box-open fa-2x mb-3" style="color:var(--text-2)"></i>
        <p style="color:var(--text-2)">No movies in stash yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useMoviesStore } from '../stores/movies'
import MovieCard from '../components/MovieCard.vue'

const store = useMoviesStore()
const filters = reactive({ genre: '', year: '', sort: 'newest', query: '' })
const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018]

const filteredStash = computed(() => {
  let list = store.stash.filter((m) => {
    if (filters.query && !m.title.toLowerCase().includes(filters.query.toLowerCase())) return false
    if (filters.genre && !m.genre.includes(filters.genre)) return false
    if (filters.year && m.year !== Number(filters.year)) return false
    return true
  })
  if (filters.sort === 'oldest') list = [...list].reverse()
  if (filters.sort === 'best') list = [...list].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
  if (filters.sort === 'worst') list = [...list].sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0))
  return list
})
</script>
