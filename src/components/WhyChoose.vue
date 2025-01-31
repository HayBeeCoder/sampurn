<script lang="ts" setup>
import MatTemplate from './MatTemplate.vue';
import TheButton from './TheButton.vue';

type whyChooseUsItemType = {
  image?: string
  desc: string
}
const whyChooseUsItems: whyChooseUsItemType[] = [
  {
    image: new URL(`../assets/book.png`, import.meta.url).href,

    desc: 'Expert Led <br/> Courses',
  },
  {
    image: new URL(`../assets/camcorder.png`, import.meta.url).href,
    desc: 'Live Mentorship <br/> Sessions',
  },
  {
    image: new URL(`../assets/book.png`, import.meta.url).href,

    desc: 'Expert Led <br/> Courses',
  },
  {
    image: new URL(`../assets/camcorder.png`, import.meta.url).href,
    desc: 'Live Mentorship <br/> Sessions',
  },

]
</script>

<template>
  <MatTemplate subHeading="Why Choose Us">
  
    <div class="ancient-papers auto-grid">
      <div :key="key" v-for="(item, key) in whyChooseUsItems" class="ancient-paper">
        <span class="ancient-icon-wrapper">
          <img :src="item.image" class="icon" />
        </span>
        <p class="ancient-text" v-html="item.desc"></p>
      </div>
    </div>
    <TheButton>Enrol now</TheButton>
  </MatTemplate>

</template>

<style scoped>
.ancient-text {
  font-size: 0.8rem;
  font-weight: 700;
  color: #493A31;
}

.auto-grid {
  display: grid;
  gap: 40px
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
  display: inline-block;
  /* width: 100px; */
  /* height: 100px; */
  /* border-radius: 200px; */
  /* background: purple; */
}

.icon {
  width: 90px;
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
