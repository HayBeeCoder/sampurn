<script lang="ts" setup>

</script>
<template>
  <button class="btn hero-btn btn-default-font yellow-orange-gradient shiny" @click="$emit('click', $event)">
    <p class="btn-mask-gradient">
      <slot></slot>
    </p>
  </button>
</template>

<style scoped>
.btn p {
  font-size: 1rem;
  font-weight: 700;
}

.btn {
  padding: 0.8em 2em;
  border-radius: 0.6em;
  border: 1px solid #feea15;
  cursor: pointer;
}

.hero-btn {
  margin-top: 2em;
}

.btn-default-font {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.4rem;
}
</style>
