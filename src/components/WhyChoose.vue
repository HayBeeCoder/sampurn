<script lang="ts" setup>
import MatTemplate from './MatTemplate.vue';
import GreatScroll from "./GreatScroll.vue"

type whyChooseUsItemType = {
  image: string
  desc: string
}
const whyChooseUsItems: whyChooseUsItemType[] = [
  {
    image: '',
    desc: 'Expert Led Courses',
  },
  {
    image: '',
    desc: 'Expert Led Courses',
  },
  {
    image: '',
    desc: 'Expert Led Courses',
  },
  {
    image: '',
    desc: 'Expert Led Courses',
  },
]
</script>

<template>
  <MatTemplate subHeading="Why Choose Us">
    <div class="great-scroll-wrapper">

      <GreatScroll />
    </div>
    <div class="ancient-papers auto-grid">
      <div :key="key" v-for="(item, key) in whyChooseUsItems" class="ancient-paper">
        <span class="ancient-icon-wrapper"></span>
        <p class="ancient-text">{{ item.desc }}</p>
      </div>
    </div>
  </MatTemplate>

</template>

<style scoped>
.ancient-text {
  font-size: 0.8rem;
}

.great-scroll-wrapper {
  position: absolute;
  transform: translateX(50%);
  width: 400px;
  transform: rotate(45deg) translateX(40%);
  top: -15%;
}

.ancient-paper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  place-items: center;
  justify-content: center;
  background: url("@/assets/ancient-paper.png");

  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  /* background: orange; */
  aspect-ratio: 16/14;
}

.ancient-icon-wrapper {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 200px;
  background: purple;
}



@media (min-width: 369px) {}

@media (min-width: 768px) {}

@media (min-width: 969px) {


  .ancient-papers {
    /* display: block */
    /* max-width: 1000px;
    margin: 0 auto; */
  }

  .auto-grid {
    --auto-grid-min-size: 16rem;

    display: grid;
    grid-template-columns: repeat(2, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 1rem;
  }
}
</style>
