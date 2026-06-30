<template>
  <div class="min-vh-100 d-flex flex-column">
    <div class="text-center py-5">
      <h1 class="page-title">Sign up<span style="color:var(--accent)">.</span></h1>
    </div>
    <div class="d-flex justify-content-center px-3 pb-5">
      <form class="auth-box" @submit.prevent="handleSignup">
        <h2 class="mb-4" style="font-family:'Oswald',sans-serif;font-size:22px;font-weight:600">Create account</h2>
        <div class="mb-3">
          <label class="auth-label">Email</label>
          <input v-model="email" type="email" class="input-dark" placeholder="Enter email" required />
        </div>
        <div class="mb-3 position-relative">
          <label class="auth-label">Password</label>
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="input-dark"
            placeholder="Enter password"
            required
          />
          <i
            :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
            class="position-absolute"
            style="right:14px;top:38px;cursor:pointer;color:var(--text-2);font-size:14px"
            @click="showPassword = !showPassword"
          ></i>
        </div>
        <div class="mb-4">
          <label class="auth-label">Confirm password</label>
          <input
            v-model="confirm"
            :type="showPassword ? 'text' : 'password'"
            class="input-dark"
            placeholder="Confirm password"
            required
          />
        </div>
        <button type="submit" class="btn-accent w-100 justify-content-center mb-3" style="padding:12px">
          Sign up
        </button>
        <p style="font-size:14px;color:var(--text-2);text-align:center">
          Already have an account?
          <RouterLink to="/login" style="color:var(--accent)">Log in</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const confirm = ref('')
const showPassword = ref(false)
const router = useRouter()
const auth = useAuthStore()

function handleSignup() {
  if (password.value !== confirm.value) return
  auth.login(email.value)
  router.push('/')
}
</script>
