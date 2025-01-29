<script setup lang="ts">
import { ref } from 'vue'
import FaqItem from './FaqItem.vue'
import MatTemplate from './MatTemplate.vue'

type FaqItem = {
  display: string
  details: string
}
const Faqs: FaqItem[] = [
  {
    display: 'Does registrationasdajsdkfjasd start on the 1st of Feb or 25th?',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nihil explicabo placeat ex accusantium dolorum sapiente modi illo maiores esse.',
  },
  {
    display: 'Does registration start on the 1st of Feb or 25th?',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nihil explicabo placeat ex accusantium dolorum sapiente modi illo maiores esse.',
  },
  {
    display: 'Does registration start on the 1st of Feb or 25th?',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nihil explicabo placeat ex accusantium dolorum sapiente modi illo maiores esse.',
  },
  {
    display: 'Does registration start on the 1st of Feb or 25th?',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nihil explicabo placeat ex accusantium dolorum sapiente modi illo maiores esse.',
  },
  {
    display: 'Does registration start on the 1st of Feb or 25th?',
    details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nihil explicabo placeat ex accusantium dolorum sapiente modi illo maiores esse.',
  },
]

const openFaq = ref<number | undefined>()

function onClickFaq(faqNumber: number) {
  if (openFaq.value == faqNumber) {
    openFaq.value = undefined
  }
  openFaq.value = faqNumber
}
</script>

<template>
  <MatTemplate heading="FAQs">
    <ul class="faq-list">
      <li v-for="(item, key) in Faqs" :key="key">
        <FaqItem
          :details="item.display"
          :showDetails="openFaq == key"
          :faqId="String(key)"
          v-on:update:model-value="(faqNumber) => onClickFaq(faqNumber)"
        >
          {{ item.display }}
        </FaqItem>
        <p v-if="openFaq == key" class="faq-details">
          {{ item.details }}
        </p>
      </li>
    </ul>
  </MatTemplate>
</template>

<style scoped>
.faq-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 80%;
  margin: 0 auto;
}
</style>
