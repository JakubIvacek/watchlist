<template>
  <div class="min-vh-100 py-5 text-light">
    <div class="text-center mb-5">
      <h1 class="page-title">Admin.</h1>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-xl-6 bg-black rounded p-4">
          <h2 class="text-center mb-4 times-roman text-warning">Add show / movie</h2>
          <form class="times-roman" @submit.prevent="handleSubmit">
            <div class="mb-3">
              <input v-model="form.name" type="text" class="input-dark" placeholder="Enter name" required />
            </div>
            <div class="mb-3">
              <input v-model="form.length" type="text" class="input-dark" placeholder="Enter length (e.g. 2h 10m)" />
            </div>
            <div class="mb-3">
              <input v-model="form.trailerUrl" type="text" class="input-dark" placeholder="Enter YouTube URL" />
            </div>
            <div class="mb-3">
              <input v-model="form.date" type="text" class="input-dark" placeholder="Enter release year" />
            </div>
            <div class="mb-4">
              <input type="file" class="input-dark" accept="image/*" />
            </div>
            <button type="submit" class="btn btn-warning times-roman fw-bold">Add show / movie</button>
          </form>
          <p v-if="added" class="text-success times-roman mt-3">Added successfully (mock).</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({ name: '', length: '', trailerUrl: '', date: '' })
const added = ref(false)

function handleSubmit() {
  added.value = true
  Object.assign(form, { name: '', length: '', trailerUrl: '', date: '' })
  setTimeout(() => (added.value = false), 3000)
}
</script>
