<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HamBurger from './components/HamBurger.vue'

import { ref, } from 'vue'

const isOpen = ref<boolean>(false)

function toggleisOpen() {
  isOpen.value = !isOpen.value
}

// Using scrollIntoView() function to achieve the scrolling
function scrollTo(idOfElement: string) {
  const element = document.getElementById(idOfElement)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header>
    <RouterLink to="/" class="logo-wrapper">
      <img alt="Sampurn logo" class="logo" src="@/assets/sampurn-logo.png" width="140px" />
    </RouterLink>

    <HamBurger :toggleState="isOpen" v-on:update:toggleState="toggleisOpen()" />

    <nav :class="{ close: !isOpen }">
      <RouterLink to="/" class="path">Home</RouterLink>
      <RouterLink to="/#about" v-on:click="scrollTo('about')">About Us</RouterLink>
      <RouterLink to="/course" class="path disabled-link">Course</RouterLink>
      <RouterLink to="/#faq" v-on:click="scrollTo('faq')">FAQs</RouterLink>
    </nav>
  </header>

  <RouterView />
  <footer>
    <p>
      © Sampurn 2025 ®
    </p>
  </footer>
</template>

<style scoped>
header {
  z-index: 1000;
  position: absolute;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;

  line-height: 1.5;
  max-height: 100vh;
  padding: 1rem 1rem;

  border-bottom: 1px solid #ff7200;
}

footer{
  padding: 1rem 1rem;
  text-align: center;
  border-top: 1px solid #ff7200;
  color: #ff7200;
  background-color: rgba(0,0,0,0.6);
}

.logo {
  display: block;
}



nav {
  top: 100%;
  width: 30vw;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
  position: absolute;
  right: 0;
  margin-right: 1rem;
  border-left: 1px solid #ff7200;
  border-right: 1px solid #ff7200;
  transform-origin: top;
  opacity: 1;
  transform: scaleY(1) translateY(0);
  transition: transform 0.3s ease-in-out, opacity 0.5s ease-in-out;
  z-index: 100;
  background-color: rgba(0,0,0,0.3);
}

nav.close {
  opacity: 0;
  transform: scaleY(0) translateY(-100%), ;
  transition: transform 0.3s ease-in-out, opacity 0.5s ease-in-out;
}

nav a.router-link-exact-active.path {
  color: #ff7200;

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.8em 0.5em;

  border-bottom: 1px solid #ff7200;


  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;

  font-size: 1rem;

  /* border-left: 1px solid var(--color-border); */
}

nav a:not(.disabled-link) {
  color: var(--cream);

}

nav a:last-child {
  border-bottom: 0;
}

/* nav a:first-of-type {
  border: 0;
} */

@media (min-width: 769px) {
  nav {
    position: relative;
    opacity: 1;
    transform: translate(0);
    flex-direction: row;
    width: auto;
    max-width: none;
    border: 0
      /* display: none; */
  }

  nav a {
    border: 0px;
  }

  nav.close {
    transform: translate(0);
    opacity: 1
  }
}

@media (min-width: 900px) {
  header {
    width: 100%;
    display: flex;
    /* padding-top: 0.8rem; */
    /* padding-bottom: 0.6rem; */
    /* place-items: center; */
    justify-content: space-between;
    align-items: center;


    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    /* margin: 0 2rem 0 0; */
  }

  nav {
    position: relative;
    text-align: right;
    /* margin-left: -1rem; */
    font-size: 1rem;

    /* padding: 1rem 0; */
    /* margin-top: 1rem; */
  }

  nav a {
    padding: 0 1rem;
  }
}
</style>
