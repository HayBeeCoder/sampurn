<script setup lang="ts">
import TheHero from '@/components/TheHero.vue'
import AboutUs from '@/components/AboutUs.vue'
import WhyChoose from '@/components/WhyChoose.vue'
import OurFaqs from '@/components/OurFaqs.vue'
import GreatScroll from '@/components/GreatScroll.vue'
import { onBeforeUnmount, onMounted, ref, watch, type Ref } from 'vue'
import ModalComponent from '@/components/ModalComponent.vue'
import TheButton from '@/components/TheButton.vue'
import CryptoAddressbanner from '@/components/CryptoAddressbanner.vue'
import { useClipboard } from '@/composable/useClipboard'

const isModalOpen: Ref<boolean> = ref(true)
const showUSDTBtn = ref(true)
const copy = ref(false)



// insert USDT address into below 
const ADDRESS = ref('')
const { copyText } = useClipboard()

function onModal() {
  isModalOpen.value = true
}

function openExternalLink() {
  window.open('https://tix.africa/starrxsampurn', '_blank')
}

watch(isModalOpen, (newValue) => {
  document.documentElement.style.overflow = newValue ? 'hidden':''; // Prevent scrolling on the entire page

  document.body.style.overflow = newValue ? 'hidden' : ''
})

function handleScroll(event: Event) {
  if (!isModalOpen.value) {
    event.preventDefault()
  }
}

function toggleUSDTBtn() {
  showUSDTBtn.value = false
}

function handleCopyClick(e: Event) {
  if (copy.value) {
    e.preventDefault()
  }
  copyText(ADDRESS.value, copy)
}

onMounted(() => {
  document.body.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  document.body.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main>
    <TheHero :toggleOnModal="onModal" />
    <hr class="horizontal" />
    <div class="non-hero-wrapper">
      <AboutUs />
      <div
        class="relative z-infinity"
        :style="{ zIndex: 1000000 }"
        data-aos="fade-up-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div class="great-scroll-wrapper">
          <GreatScroll />
        </div>
      </div>
      <WhyChoose :toggleOnModal="onModal" />
      <OurFaqs />
    </div>

    <ModalComponent
      v-if="isModalOpen"
      :toggleOffModal="
        () => {
          isModalOpen = false
          showUSDTBtn = true
          copy = false
        }
      "
    >
      <div @click="(e) => e.stopPropagation()">
        <h1 :style="{ textAlign: 'center' }">Enrol for the class</h1>
        <div class="btns-wrapper">
          <TheButton @click="openExternalLink"> pay using Naira (₦) </TheButton>

          <TheButton @click="toggleUSDTBtn" v-if="showUSDTBtn"> pay using USDT </TheButton>
        </div>
        <CryptoAddressbanner :copy="copy" v-if="!showUSDTBtn" @click="handleCopyClick">
          {{ ADDRESS }}
        </CryptoAddressbanner>
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

.btns-wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 75vw;
  margin: 0 auto 1.4em;
  max-width: 400px;
}

.overflow-y {
  overflow-y: auto;
}
.no-overflow-y {
  overflow-y: hidden;
  height: 100vh;
}
.z-infinity {
  z-index: 100000000;
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
  z-index: 200;
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
