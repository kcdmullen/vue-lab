<script setup>
import { ref, onMounted, nextTick } from 'vue'

const dateInput = ref()
const lastItem = ref()
const firstItem = ref()
const streetType = ref()

function findNext(e, source) {
  if (e.shiftKey && source === 'firstItem') {
    e.preventDefault()
    lastItem.value.$el.focus()
  } else if (!e.shiftKey && source === 'lastItem') {
    e.preventDefault()
    firstItem.value.focus()
  }
}

const streetTypes = [
  {
    name: 'ALY - Alley',
    value: 'ALY',
  },
  {
    name: 'AR - Arcade',
    value: 'AR',
  },
  {
    name: 'AVE - Avenue',
    value: 'AVE',
  },
  {
    name: 'BEND - Bend',
    value: 'BEND',
  },
  {
    name: 'BLVD - Boulevard',
    value: 'BLVD',
  },
  {
    name: 'CIR - Circle',
    value: 'CIR',
  },
  {
    name: 'COVE - Cove',
    value: 'COVE',
  },
  {
    name: 'CT - Court',
    value: 'CT',
  },
  {
    name: 'DL - Dale',
    value: 'DL',
  },
  {
    name: 'DR - Drive',
    value: 'DR',
  },
  {
    name: 'FRWY - Freeway',
    value: 'FRWY',
  },
  {
    name: 'GL - Glen',
    value: 'GL',
  },
  {
    name: 'HTS - Heights',
    value: 'HTS',
  },
  {
    name: 'HWY - Highway',
    value: 'HWY',
  },
  {
    name: 'IN - Interstate',
    value: 'IN',
  },
  {
    name: 'LN - Lane',
    value: 'LN',
  },
  {
    name: 'LOOP - Loop',
    value: 'LOOP',
  },
  {
    name: 'MEWS - Mews',
    value: 'MEWS',
  },
  {
    name: 'PASS - Pass',
    value: 'PASS',
  },
  {
    name: 'PIKE - Pike',
    value: 'PIKE',
  },
  {
    name: 'PKWY - Parkway',
    value: 'PKWY',
  },
  {
    name: 'PL - Place',
    value: 'PL',
  },
  {
    name: 'PT - Point',
    value: 'PT',
  },
  {
    name: 'PZ - Plaza',
    value: 'PZ',
  },
  {
    name: 'RD - Road',
    value: 'RD',
  },
  {
    name: 'RG - Ridge',
    value: 'RG',
  },
  {
    name: 'SQ - Square',
    value: 'SQ',
  },
  {
    name: 'ST - Street',
    value: 'ST',
  },
  {
    name: 'TER - Terrace',
    value: 'TER',
  },
  {
    name: 'TRCE - Trace',
    value: 'TRCE',
  },
  {
    name: 'TRL - Trail',
    value: 'TRL',
  },
  {
    name: 'TU - Turn',
    value: 'TU',
  },
  {
    name: 'VI - View',
    value: 'VI',
  },
  {
    name: 'WAY - Way',
    value: 'WAY',
  },
]

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
        :required="false"
      />
    </div>
    <div class="row">
      <BaseSelect
        id="type"
        label="Type"
        v-model="streetType"
        :required="false"
        :items="streetTypes"
        item-title="name"
        item-value="name"
      />
    </div>
    <div class="row">
      <BaseSelect label="Choose" :items="['Red', 'Blue', 'Green']" />
    </div>
    <div class="row">
      <BaseInput type="ssn" label="SSN" />
    </div>
    <div class="row">
      <BaseInput type="tel" label="Phone" />
    </div>
    <div class="row">
      <BaseInput type="zip" label="Zip" />
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
