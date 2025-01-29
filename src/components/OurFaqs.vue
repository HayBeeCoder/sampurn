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
    display: 'Does registrationasdajsdkfjasd safljkdfdf asdfkflasdfk;j asfdkskadlj start on the 1st of Feb or 25th?',
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
  } else {
    openFaq.value = faqNumber
  }
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
        <p class="faq-details" :class="{ 'show-faq-details': openFaq == key }">
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
  /* width: 80%; */
  max-width: 95%;
  margin: 0 auto;
}

.faq-list li {
  position: relative;

  margin-top: 3px;
}

.faq-details {
  text-align: justify;
  background: #eaca91;
  padding: 0rem 1.2rem 1rem;

  font-size: 0.8rem;
  /* height: 0px; */
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  transition: transform 0.5s ease-in-out, opacity 0.1s ease-in-out;
  top: -2px;
  position: absolute;
}

.show-faq-details {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
  position: relative;
}



@media (min-width: 369px) {
}
@media (min-width: 768px) {
}

@media (min-width: 969px) {
  .faq-list{
    max-width: 80%;
  }
}
</style>
