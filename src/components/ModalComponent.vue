<script lang="ts" setup>
defineProps<{
  toggleOffModal: () => void
}>()

</script>

<template lang="">
 <section class="modal" @click="toggleOffModal">
  <slot></slot>
 </section>
</template>

<style scoped>
.modal{
  position: fixed;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  z-index: 100000;
  color: white;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>
