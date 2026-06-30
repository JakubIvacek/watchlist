<template>
  <!-- Horizontal layout (stash) -->
  <div v-if="horizontal" class="movie-card-h">
    <div class="img-container">
      <img :src="movie.posterUrl" :alt="movie.title" />
    </div>
    <div class="card-body">
      <p class="card-title">{{ movie.title }}</p>
      <p class="card-meta">{{ movie.year }} · {{ movie.genre.join(', ') }}</p>
      <p v-if="movie.rating" class="card-rating">
        <i class="fas fa-star" style="font-size:11px"></i> {{ movie.rating }}/10
      </p>
      <div class="card-actions">
        <RouterLink v-if="showDetails" :to="`/stash/${movie.id}`" class="btn-accent">
          View detail
        </RouterLink>
        <button v-if="showAddToStash" class="btn-accent" @click="emit('addToStash', movie.id)">
          Add to stash
        </button>
        <button v-if="showRemove" class="btn-ghost" @click="emit('remove', movie.id)">
          Remove
        </button>
      </div>
    </div>
  </div>

  <!-- Vertical layout (watchlist / default) -->
  <div v-else class="movie-card">
    <div class="img-container">
      <img :src="movie.posterUrl" :alt="movie.title" />
    </div>
    <div class="card-body">
      <p class="card-title">{{ movie.title }}</p>
      <p class="card-meta">{{ movie.year }} · {{ movie.genre[0] }}</p>
      <p v-if="movie.rating" class="card-rating">
        <i class="fas fa-star" style="font-size:11px"></i> {{ movie.rating }}/10
      </p>
      <div class="card-actions">
        <RouterLink v-if="showDetails" :to="`/stash/${movie.id}`" class="btn-accent">
          View detail
        </RouterLink>
        <button v-if="showAddToStash" class="btn-accent" @click="emit('addToStash', movie.id)">
          Add to stash
        </button>
        <button v-if="showRemove" class="btn-ghost" @click="emit('remove', movie.id)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '../stores/movies'

defineProps<{
  movie: Movie
  horizontal?: boolean
  showDetails?: boolean
  showAddToStash?: boolean
  showRemove?: boolean
}>()

const emit = defineEmits<{
  addToStash: [id: number]
  remove: [id: number]
}>()
</script>
