<script lang="ts" setup>
defineProps<{
  details: string
  showDetails: boolean
  faqId: string
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (faqId: number) => {
  alert(faqId)
  emit('update:modelValue', faqId)
}
</script>

<template>
  <button class="faq-item" v-on:click="updateValue(Number(faqId))">
    <slot></slot>
    <span>+</span>
  </button>
 
</template>
<style lang="css" scoped>
.faq-item {
  cursor: pointer;
  margin-bottom: 3px;
  display: flex;
  width: 100%;
  font-family: inherit;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  padding: 1rem 2rem;
  color: #493a31;
  background: #eaca91;
  background-image: url('');
  background-repeat: no-repeat;
  background-size: 100%;
  font-weight: 600;
}

.faq-details {
  background: #eaca91;
}

.faq-item span {
  display: inline-block;
  font-size: 1rem;
}

.faq-title {
  font-size: 0.8rem;
}

@media (min-width: 369px) {
}
@media (min-width: 768px) {
}

@media (min-width: 969px) {
}
</style>
