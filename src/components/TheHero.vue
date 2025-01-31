<script lang="ts" setup>
import TheButton from "@/components/TheButton.vue"
</script>

<template>
  <section class="hero-gradient wrapper">
    <img src="@/assets/sampurn-logo.png" alt="Sampurn's logo" class="hero-logo" />
    <p class="hero-tagline">Master Trading: Your Journey to Financial Freedom starts here</p>
    <TheButton>Enrol Now</TheButton>
  </section>
</template>

<style scoped>
.wrapper {
  overflow-x: hidden;
  min-height: 100vh;
  /* background: purple; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  /* border-bottom: 0.1em solid  ; */
}

.hero-logo {
  width: 300px;
}

.hero-tagline {
  font-size: 1.2rem;

  width: 80%;
  max-width: 420px;
  text-align: center;
  color: #d9d9d9;
}

@media (min-width: 369px) {}

@media (min-width: 768px) {
  .hero-logo {
    width: 400px;
  }

  .wrapper {
    background-image:
      linear-gradient(-180deg,
        hsla(0, 0%, 8%, 0.3) 0%,
        hsla(0, 0%, 6%, 0.6) 35%,
        hsla(0, 0%, 4%, 0.8) 65%,
        hsla(0, 0%, 4%, 1) 90%), url('../assets/desktop-hero-sampurn-temple.png');
    background-repeat: no-repeat;
    background-position: -40%;
    background-size: 100%;
    justify-content: center;
    /* padding-bottom: 50px; */
  }
}

@media (min-width: 969px) {

  .hero-logo {
    width: 7;
  }

  .wrapper {
    /* justify-content: flex-end; */
    /* padding: 50px; */
  }
}
</style>
