<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <RouterLink to="/" class="logo-wrapper">

      <img alt="Sampurn logo" class="logo" src="@/assets/sampurn-logo.png" width="140px"/>
    </RouterLink>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <nav>
      <RouterLink to="/" class="path">Home</RouterLink>
      <RouterLink to="#about" >About Us</RouterLink>
      <RouterLink to="/course" class="path">Course</RouterLink>
      <RouterLink to="#faq" >FAQs</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 1rem 3rem;
  /* background: #74210F; */
}

.logo {
  display: block;
  /* margin: 0 auto 2rem; */
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active.path {
  color: red;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color: var(--cream);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500

  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 900px) {
  header {
    display: flex;
    padding-top: 2rem;
    /* place-items: center; */
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #FF7200;
    /* padding-right: calc(var(--section-gap) / 2); */

  }

  .logo {
    /* margin: 0 2rem 0 0; */
  }


  nav {
    text-align: right;
    /* margin-left: -1rem; */
    font-size: 1rem;

    /* padding: 1rem 0; */
    /* margin-top: 1rem; */
  }
}
</style>
