<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import HelloWorld from './components/HelloWorld.vue'
import Beer from './components/Beer.vue'
import Person from './components/Person.vue'
import { ref } from 'vue'

const numeric = ref(0);
</script>

<template>
  <Person />
  <Beer />
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
