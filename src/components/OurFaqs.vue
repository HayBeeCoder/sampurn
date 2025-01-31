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
    display: 'Does registration start on the 1st of Feb or 15th?',
    details: 'Registration (Payment) starts on the 15th of February.',
  },
  {
    display: 'How can one join the waitlist to pay just $100?',
    details:
      'By 5pm on the 1st of Feb, a link to a telegram group will be posted on my WhatsApp status. The group has been automated to accept only 100 people. Those first 100 are the ones paying $100. Every other person will access Sampurn for $150.',
  },
  {
    display: 'Will there be extra tutors for Sampurn?',
    details: 'No. It’s just me.',
  },
  {
    display: 'Can a complete beginner with no prior knowledge of trading join Sampurn?',
    details:
      'Yes. Sampurn starts from scratch, from 0. Someone who has never even placed a trade before is safe to join.',
  },
  {
    display: 'How long is the mentorship access and will we have full access to you?',
    details:
      'The mentorship lasts for one year. During this one year, your growth is my utmost priority. You have complete access to me.',
  },
  {
    display: 'How long will the period of tutorship last before we start executing?',
    details:
      'Sampurn covers crypto, forex, and synthetics courses. This means that we have to cover a lot, so the period of tutorship may extend to 1.5 - 2 months.',
  },
  {
    display: 'Can students or 9-5ers also pay for Sampurn?',
    details:
      'Yes. I’m a medical student myself, so I understand how tight student schedules can be. The timing will be comfortable enough for people in these shoes.',
  },
  {
    display:
      'Since the waitlist will accommodate only 100 people, don’t you think people will join that day, fill it up without an intent to pay, thereby blocking others from getting in?',
    details: 'Everybody that gets on the waitlist will be screened before registration starts.',
  },
  {
    display: 'Will stacking at specific points be taught?',
    details:
      'I have always been an advocate of not stacking randomly. So yes, Sampurn students will be taught to do it right.',
  },
  {
    display: 'Will you teach how you passed your prop firm challenges?',
    details: 'Yes.',
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
  <MatTemplate heading="FAQs" id="faq">
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
  transition:
    transform 0.5s ease-in-out,
    opacity 0.1s ease-in-out;
  top: -2px;
  position: absolute;
}

.show-faq-details {
  opacity: 1;
  transform: scaleY(1);
  transition:
    transform 0.5s ease-in-out,
    opacity 0.3s ease-in-out;
  position: relative;
}

@media (min-width: 369px) {
}
@media (min-width: 768px) {
}

@media (min-width: 969px) {
  .faq-list {
    max-width: 80%;
  }
}
</style>
