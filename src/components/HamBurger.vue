<script lang="ts" setup>
defineProps<{
  toggleState: boolean
}>()

const emit = defineEmits(['update:toggleState'])

function updateToggleState() {
  emit('update:toggleState')
}
</script>

<template>
  <button class="hamburger is-lg" :class="{'is-active': toggleState}" v-on:click="updateToggleState()">
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
  </button>
</template>

<style scoped>
.hamburger {
  background: none;
  position: relative;
  width: 1em;
  /* background: orange; */
  height: 1em;
  font-size: inherit;
  transition: all 0.3s ease;
  cursor: pointer;
}

.hamburger.is-sm {
  font-size: 1rem;
}

.hamburger.is-md {
  font-size: 1.5rem;
}

.hamburger.is-lg {
  font-size: 2rem;
}

.hamburger-line {
  position: absolute;
  right: 0;
  width: 100%;
  height: 0.075em;
  border-radius: 0.125em;
  background: #ff7200;
  transition: inherit;
}

/* First Line */
.hamburger-line:nth-child(1) {
  top: 0.125em;
}

.hamburger.is-active .hamburger-line:nth-child(1),
.w-nav-button.w--open .hamburger-line:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotateZ(-135deg);
}

/* Second Line */
.hamburger-line:nth-child(2) {
  top: 0.438em;
}

.hamburger.is-active .hamburger-line:nth-child(2),
.w-nav-button.w--open .hamburger-line:nth-child(2) {
  right: 50%;
  width: 0;
}

/* Third Line */
.hamburger-line:nth-child(3) {
  top: 0.75em;
  width: 0.625em;
}

.hamburger.is-active .hamburger-line:nth-child(3),
.w-nav-button.w--open .hamburger-line:nth-child(3) {
  top: 50%;
  width: 100%;
  transform: translateY(-50%) rotateZ(135deg);
}
</style>
