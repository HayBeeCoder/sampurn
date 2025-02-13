<script lang="ts" setup>
import paystack from 'vue3-paystack'
import { computed, defineEmits } from 'vue'

const amount = 5000
const email = 'haybeecodes@gmail.com'
const emit = defineEmits(['paymentSuccess'])

const publicKey = 'pk_test_eed8ecb7f1dec765ab5f2d5fcacc736c9c4dbd81' // Replace with your Paystack Public Key

const reference = computed(() => {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 10; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
})

function processPayment(reference: string) {
  console.log({ reference })
  window.alert('Payment recieved')
  emit('paymentSuccess')
}
function close() {
  window.alert('Payment unsuccessful')
  console.log('You closed checkout page')
}
</script>

<template>
  <div>
    <paystack
      :amount="amount * 100"
      :email="email"
      :publicKey="publicKey"
      :reference="reference"
      :callback="processPayment"
      :close="close"
      class="pay-button"
      buttonText="Make Payment"
      :onSuccess="processPayment"
      :onCancel="close"
      :channels="['bank_transfer','ussd','card']"
    >
    </paystack>
  </div>
</template>

<style>
.pay-button {
  background-color: #3bb75e;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
