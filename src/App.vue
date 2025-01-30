<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" class="logo-wrapper">

      <img alt="Sampurn logo" class="logo" src="@/assets/sampurn-logo.png" width="140px"/>
    </RouterLink>

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
  position: absolute;
  width: 100vw;

  line-height: 1.5;
  max-height: 100vh;
  padding: 1rem 1rem;

}

.logo {
  display: block;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;

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
