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

      <WhyChoose />
      <OurFaqs />
    </div>
     <!-- <TheWelcome /> -->
  </main>
</template>


<style scoped>
.non-hero-wrapper{
  padding:  75px 0;
background-color: black;
overflow-x: hidden;
}

.non-hero-wrapper section{
  margin-top: 65px
}

@media (min-width: 979px){
  .non-hero-wrapper{
    padding: 155px 0;
  }
  
  .non-hero-wrapper section{
    margin-bottom: 105px
  }
}
</style>
