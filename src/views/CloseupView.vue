<template>
  <div class="min-vh-100 pb-5">
    <div v-if="movie" class="container py-5">
      <RouterLink
        to="/stash"
        class="d-inline-flex align-items-center gap-2 mb-4"
        style="color:var(--text-2);font-size:14px;text-decoration:none;transition:color 0.15s"
        @mouseenter="($event.target as HTMLElement).style.color='var(--text-1)'"
        @mouseleave="($event.target as HTMLElement).style.color='var(--text-2)'"
      >
        <i class="fas fa-arrow-left"></i>
        Back to Stash
      </RouterLink>

      <div class="row g-4">
        <div class="col-12 col-md-4 col-lg-3">
          <img
            :src="movie.posterUrl"
            :alt="movie.title"
            class="w-100"
            style="border-radius:var(--radius);display:block"
          />
        </div>
        <div class="col-12 col-md-8 col-lg-9">
          <h1 style="font-family:'Oswald',sans-serif;font-size:48px;font-weight:700;line-height:1.1;margin-bottom:24px">
            {{ movie.title }}
          </h1>

          <div style="display:grid;grid-template-columns:80px 1fr;gap:12px 16px;font-size:15px;margin-bottom:32px">
            <span style="color:var(--text-2);font-weight:500">Year</span>
            <span>{{ movie.year }}</span>
            <span style="color:var(--text-2);font-weight:500">Length</span>
            <span>{{ movie.length }}</span>
            <span style="color:var(--text-2);font-weight:500">Genre</span>
            <span>{{ movie.genre.join(', ') }}</span>
            <template v-if="movie.rating">
              <span style="color:var(--text-2);font-weight:500">Rating</span>
              <span style="color:var(--accent)">
                <i class="fas fa-star" style="font-size:12px"></i>
                {{ movie.rating }}/10
              </span>
            </template>
          </div>

          <div class="d-flex gap-3">
            <RouterLink to="/stash" class="btn-ghost">Back to Stash</RouterLink>
            <button class="btn-accent">Edit rating</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="container py-5 text-center">
      <p style="color:var(--text-2);margin-bottom:20px">Movie not found.</p>
      <RouterLink to="/stash" class="btn-accent">Back to Stash</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from '../stores/movies'

const route = useRoute()
const store = useMoviesStore()
const movie = computed(() => store.getById(Number(route.params.id)))
</script>
