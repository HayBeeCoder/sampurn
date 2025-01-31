<script lang="ts" setup>
const props = defineProps<{
  subHeading?: string
  heading?: string
  id?: "faq" | "about"
}>()
</script>

<template>
  <section class="mat" :id="id">
    <h1 class="mat-heading amarante-regular" v-if="props.heading">{{ props.heading }}</h1>
    <h3 class="mat-subheading" v-if="props.subHeading">{{ props.subHeading }}</h3>

    <slot></slot>
  </section>
</template>

<style>
.mat {
  width: 98vw;
  margin: 0 auto;
  background-image: url('@/assets/dark-brown-paper.png');
  background-repeat: no-repeat;
  /* background-position: 100% 100%; */
  background-size: 100% 100%;
  padding: 5rem 0.2em;
  
  text-align: center;
  position: relative;
  letter-spacing: 0.02em;
}

.mat-heading {
  color: #493a31;
  font-size: 2rem;

  margin: 1rem 1rem 2rem;
}

.mat-subheading {
  color: #bb9c70;
  font-weight: 600;
  margin: 0 0 2rem;
}

.mat-essay {
  color: #d9d9d9;
  text-align: center;
  font-size: 0.8rem;
}

@media (min-width: 369px) {
}
@media (min-width: 768px) {
  .mat{
    padding: 4rem 6rem;
  }
}

@media (min-width: 969px) {
  .mat {
    width: 80vw;
    max-width: 1000px;
    margin: 0 auto;
    padding: 8rem 4rem;
  }

  .mat-essay {
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
</style>
