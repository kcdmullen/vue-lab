<script setup>
import { ref, onMounted } from 'vue'
import BaseDate from './components/BaseDate.vue'
import BaseSelect from './components/BaseSelect.vue'

const dateInput = ref()
const lastItem = ref()
const firstItem = ref()

function findNext(e, source) {
  if (e.shiftKey && source === 'firstItem') {
    e.preventDefault()
    lastItem.value.$el.focus()
  } else if (!e.shiftKey && source === 'lastItem') {
    e.preventDefault()
    firstItem.value.focus()
  }
}

onMounted(() => {
  firstItem.value.focus()
})
</script>

<template>
  <v-container id="container">
    <div class="row">
      <BaseDate
        label="DOB"
        v-model="dateInput"
        @keydown="findNext($event, 'firstItem')"
        ref="firstItem"
      />
    </div>
    <div class="row">
      <BaseSelect label="Choose" :items="['Red', 'Blue', 'Green']" />
    </div>
    <div class="row">
      <v-btn
        color="primary"
        variant="outlined"
        @keydown="findNext($event, 'lastItem')"
        ref="lastItem"
        >Last Item on Page</v-btn
      >
    </div>
  </v-container>
</template>

<style scoped>
#container {
  width: 100%;
  max-width: 500px;
  margin-top: 2rem;
}
.row {
  margin-bottom: 1rem;
}
</style>
