<script setup lang="ts">
import TheHero from '@/components/TheHero.vue'

import AboutUs from '@/components/AboutUs.vue'
import WhyChoose from '@/components/WhyChoose.vue'
import OurFaqs from '@/components/OurFaqs.vue'
import GreatScroll from '@/components/GreatScroll.vue'
import { ref, watch, type Ref } from 'vue'
import ModalComponent from '@/components/ModalComponent.vue'

const isModalOpen: Ref<boolean> = ref(false)
function onModal() {
  isModalOpen.value = true
}

watch(isModalOpen, (newValue) => {

  document.body.style.overflow = newValue ? 'hidden' : 'auto'
})
</script>

<template>
  <main :class="isModalOpen ? 'no-overflow-y' : 'overflow-y'">
    <TheHero :toggleOnModal="onModal" />
    <hr class="horizontal" />
    <div class="non-hero-wrapper">
      <AboutUs />
      <div class="relative">
        <div class="great-scroll-wrapper">
          <GreatScroll />
        </div>
      </div>
      <WhyChoose :toggleOnModal="onModal" />
      <OurFaqs />
    </div>
    
    <ModalComponent v-if="isModalOpen" :toggleOffModal="() => (isModalOpen = false)">
      <div @click="(e) => e.stopPropagation()">
        <!-- <PaystackButton @payment-success="( ) => (isModalOpen = false)"/> -->
      </div>
    </ModalComponent>
  </main>
</template>

<style scoped>
.horizontal {
  height: 1px;
  background: #421e00;
  opacity: 1;
  width: 100%;
  border: 0px;
}

.overflow- {
  overflow-y: auto;

}
.no-overflow-y {
  overflow-y: hidden;
  height: 100vh;
}
.non-hero-wrapper {
  position: relative;
  padding: 75px 0;
  /* background: rgb(27, 27, 31); */

  overflow-x: hidden;

  background: linear-gradient(
    -90deg,
    hsla(0, 0%, 4%, 1) 0%,
    hsla(0, 0%, 4%, 1) 80%,
    /* hsla(0, 0%, 0%, 0.4) 80%, */ hsla(0, 0%, 4%, 0.5) 95%
  );

  background: -moz-linear-gradient(
    -90deg,
    hsla(0, 0%, 4%, 1) 0%,
    hsla(0, 0%, 4%, 1) 80%,
    /* hsla(0, 0%, 0%, 0.4) 80%, */ hsla(0, 0%, 4%, 0.5) 95%
  );

  background: -webkit-linear-gradient(
    -90deg,
    hsla(0, 0%, 4%, 1) 0%,
    hsla(0, 0%, 4%, 1) 80%,
    /* hsla(0, 0%, 0%, 0.6) 70%, */ /* hsla(0, 0%, 0%, 0.6) 80%, */ hsla(0, 0%, 4%, 0.5) 95%
  );
  padding-bottom: 300px;
}

.non-hero-wrapper section {
  margin-top: 65px;
}

.relative {
  position: relative;
  width: 100%;
  height: min-content;
  /* background: orange; */
}

.great-scroll-wrapper {
  position: absolute;
  width: 200px;
  z-index: 500;
  /* top: 5%; */
  transform: rotate(45deg) translate(15%, 65%) scale(180%);
  right: -15%;
  /* overflow-x: hidden; */
}

@media (min-width: 469px) {
  .great-scroll-wrapper {
    width: 400px;
  }
}

@media (min-width: 979px) {
  .non-hero-wrapper {
    /* max-width: 1500px; */
    padding: 155px 0;

    background: linear-gradient(
      -90deg,
      hsla(0, 0%, 4%, 1) 0%,
      hsla(0, 0%, 4%, 1) 80%,
      /* hsla(0, 0%, 0%, 0.4) 80%, */ hsla(0, 0%, 4%, 0.5) 95%
    );

    background: -moz-linear-gradient(
      -90deg,
      hsla(0, 0%, 4%, 1) 0%,
      hsla(0, 0%, 4%, 1) 80%,
      /* hsla(0, 0%, 0%, 0.4) 80%, */ hsla(0, 0%, 4%, 0.5) 95%
    );

    background: -webkit-linear-gradient(
      -90deg,
      hsla(0, 0%, 4%, 1) 0%,
      hsla(0, 0%, 4%, 1) 80%,
      /* hsla(0, 0%, 0%, 0.6) 70%, */ /* hsla(0, 0%, 0%, 0.6) 80%, */ hsla(0, 0%, 4%, 0.5) 95%
    );
  }

  .non-hero-wrapper section {
    margin-bottom: 105px;
  }
}

@media (min-width: 969px) {
  .great-scroll-wrapper {
    right: -1%;
    width: 600px;
    transform: rotate(45deg) translate(10%, -40%);
  }
}
</style>
