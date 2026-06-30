<template>
  <nav class="app-nav">
    <RouterLink to="/" class="nav-logo">
      <img src="/img/kangaroo-128-w.png" alt="logo" />
      WatchList<span style="color:var(--accent)">.</span>
    </RouterLink>

    <div class="nav-links">
      <RouterLink class="nav-link" to="/stash">My Stash</RouterLink>
      <RouterLink class="nav-link" to="/watch">To Watch</RouterLink>
    </div>

    <div class="nav-search">
      <div class="nav-search-box">
        <i class="fas fa-search"></i>
        <input v-model="query" type="search" placeholder="Search movie or show here" />
      </div>
    </div>

    <div class="nav-actions">
      <select v-model="lang" class="nav-lang">
        <option value="sk">SK</option>
        <option value="en">EN</option>
      </select>
      <RouterLink to="/login" class="nav-user-icon">
        <i class="fas fa-circle-user"></i>
      </RouterLink>
      <button v-if="auth.isLoggedIn" class="btn-ghost" style="padding:6px 14px;font-size:13px" @click="auth.logout()">
        Logout
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const query = ref('')
const lang = ref('sk')
const auth = useAuthStore()
</script>
