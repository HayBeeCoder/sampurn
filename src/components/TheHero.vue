<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import TheButton from '../components/TheButton.vue'
defineProps<{
  toggleOnModal: () => void;

}>()



const showElements = ref(false)

onMounted(() => {
  showElements.value = true
})
</script>

<template>
  <section class="hero-gradient wrapper">
    <transition name="logo">


        <img src="@/assets/sampurn-logo.png" alt="Sampurn's logo" class="hero-logo" v-if="showElements" />

    </transition>
    <transition name="tagline">

      <p class="hero-tagline" v-if="showElements">Master Trading: Your Journey to Financial Freedom starts here</p>
    </transition>

    <transition name="button">
      <TheButton @click="toggleOnModal" v-if="showElements">Enrol Now</TheButton>
    </transition>
  </section>
</template>

<style scoped>

.logo-enter-from{
  opacity: 0;
  transform: translateY(-50vh);
}

.logo-enter-to{
  opacity: 1;
  transform: translateY(0);
}

.logo-enter-active{
  transition: all 1s;
}

.tagline-enter-from{
  opacity: 0;
  transform: translateY(50vh);
}

.tagline-enter-to{
  opacity: 1;
  transform: translateY(0);
}

.tagline-enter-active{
  transition: all 1s 1s;
}

.button-enter-from{
  opacity: 0;
  transform: translateY(50vh);
}

.button-enter-to{
  opacity: 1;
  transform: translateY(0);
}

.button-enter-active{
  transition: all 1s 1.2s;
}

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

@media (min-width: 369px) {
}

@media (min-width: 768px) {
  .hero-logo {
    width: 400px;
  }

  .wrapper {
    background-color: #A9663D;
    background-image: linear-gradient(
        -180deg,
        hsla(0, 0%, 8%, 0.3) 0%,
        hsla(0, 0%, 6%, 0.6) 35%,
        hsla(0, 0%, 4%, 0.8) 65%,
        hsla(0, 0%, 4%, 1) 90%
      ),
      url('../assets/desktop-hero-sampurn-temple.png');
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
