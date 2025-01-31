<script lang="ts" setup>
defineProps<{
  details: string
  showDetails: boolean
  faqId: string
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (faqId: number) => {
  emit('update:modelValue', faqId)
}
</script>

<template>
  <button class="faq-item" v-on:click="updateValue(Number(faqId))">
    <p class="faq-title">
      <slot></slot>
    </p>
    <span v-if="showDetails">-</span>
    <span v-else>+</span>
  </button>
</template>
<style lang="css" scoped>
.faq-item {
  cursor: pointer;
  display: flex;
  width: 100%;
  font-family: inherit;
  align-items: start;
  text-align: left;
  justify-content: space-between;
  gap: 6px;
  padding: 1rem 1.2rem;
  color: #493a31;
  background: transparent;
  background-image:   url("../assets/ribbon.png");
  background-origin: top left;
  background-repeat: repeat-y;
  background-size: 100% 50%;
  font-weight: 600;
  height: max-content;
}

.faq-details {
  background-image:   url("../assets/ribbon.png");
  background-repeat: repeat-y;
  background-size: 100%;
}

.faq-item span {
  display: inline-block;
  font-size: 1.5rem;
}

.faq-title {
  font-size: 0.9rem;
  /* text-align: justify; */
}

@media (min-width: 369px) {
  .faq-item {
    gap: 12px;
  }
}
@media (min-width: 768px) {
}

@media (min-width: 969px) {
}
</style>
