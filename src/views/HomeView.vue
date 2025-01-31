<script setup lang="ts">
import TheHero from '@/components/TheHero.vue'

import AboutUs from '@/components/AboutUs.vue'
import WhyChoose from '@/components/WhyChoose.vue'
import OurFaqs from '@/components/OurFaqs.vue';
import GreatScroll from "@/components/GreatScroll.vue"
</script>

<template>
  <main>
    <TheHero />
    <div class="non-hero-wrapper">

      <AboutUs />
      <div class="relative">

        <div class="great-scroll-wrapper">
          <GreatScroll />
        </div>

      </div>
      <WhyChoose />
      <OurFaqs />
    </div>
    <!-- <TheWelcome /> -->
  </main>
</template>


<style scoped>
.non-hero-wrapper {
  position: relative;
  padding: 75px 0;
  background-color: black;
  overflow-x: hidden;
}

.non-hero-wrapper section {
  margin-top: 65px
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
  transform: rotate(45deg) translateX(0%);
  right: -15%;
  /* overflow-x: hidden; */

}

@media (min-width: 469px){
  .great-scroll-wrapper{
    width: 400px;
  }
}

@media (min-width: 979px) {
  .non-hero-wrapper {
    padding: 155px 0;
  }
  
  .non-hero-wrapper section {
    margin-bottom: 105px
  }
}



@media ( min-width: 969px){
  .great-scroll-wrapper{
    right: -1%;
    width: 600px;
    transform: rotate(45deg) translate(10%,-40%);

    }
}
</style>
