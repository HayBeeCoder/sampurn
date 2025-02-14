<script lang="ts" setup>
defineProps<{
  copy: boolean
}>()
</script>

<template lang="">
  <section class="wrapper">
    <p class="address">Address</p>
    <p class="address address-value"><slot></slot></p>
    <!-- <button class="copy-button" v-if="copy">Copied</button> -->
    <button class="copy-button" @click="$emit('click', $event)">
      {{ copy ? 'Copied!' : 'Copy' }}
    </button>
  </section>
</template>

<style lang="css" scoped>
.wrapper {
  /* background: yellow; */
}

.address {
  font-size: 0.7em;
  font-weight: light;
  color: white;
}

.address-value {
  font-size: 0.9em;
  font-weight: bold;
  padding: 0.5em;
  background: rgba(255, 255, 255, 0.2);
  margin: 0.5em 0;
}

button {
  position: relative;
  padding: 1em 2.4em;
  border-radius: 0.8em;
  cursor: pointer;
  left: 100%;
  transform: translateX(-100%);
}

button:hover {
  opacity: 0.9;
}

button:active {
  opacity: 0.5;
}

@media (min-width: 969px ){
  .address-value {
  font-size: 1.2em;
}

}


</style>
