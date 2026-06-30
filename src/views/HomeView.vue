<template>
  <div>
    <!-- Hero: posters as background with vignette + title on top -->
    <div class="home-hero">
      <div class="home-hero-bg">
        <div v-for="movie in posterMovies" :key="movie.id" class="poster">
          <img :src="movie.posterUrl" :alt="movie.title" />
        </div>
      </div>
      <div class="home-hero-vignette"></div>
      <div class="home-hero-content">
        <h1 class="page-title">WatchList<span class="dot">.</span></h1>
        <p class="home-subtitle">Track. Organize. Enjoy.</p>
      </div>
    </div>

    <!-- How it works -->
    <div class="home-how">
      <h2>How does it work?</h2>
      <div class="home-how-line"></div>
      <div class="container">
        <div class="row g-4 justify-content-center">
          <div class="col-12 col-md-5">
            <div class="feature-card">
              <div
                class="feature-card-bg"
                style="background-image: url('/img/header.jpg')"
              ></div>
              <div class="feature-card-overlay"></div>
              <div class="feature-card-body">
                <div class="feature-card-icon">
                  <i class="fas fa-film"></i>
                </div>
                <h3>Watchlists</h3>
                <p>
                  Create multiple watchlists for movies and shows you want to watch.
                  Never lose track of what's next.
                </p>
                <RouterLink to="/watch" class="btn-accent" style="align-self:flex-start">
                  My Watchlists <i class="fas fa-arrow-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5">
            <div class="feature-card">
              <div
                class="feature-card-bg"
                style="background-image: url('/img/about-us.jpg')"
              ></div>
              <div class="feature-card-overlay"></div>
              <div class="feature-card-body">
                <div class="feature-card-icon">
                  <i class="fas fa-box-archive"></i>
                </div>
                <h3>Stash</h3>
                <p>
                  Save movies and shows you've already watched.
                  Rate, comment and keep your collection organized.
                </p>
                <RouterLink to="/stash" class="btn-accent" style="align-self:flex-start">
                  Go to Stash <i class="fas fa-arrow-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMoviesStore } from '../stores/movies'

const store = useMoviesStore()
const posterMovies = store.movies
</script>
