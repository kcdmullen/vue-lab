<script setup>
import { ref, onMounted } from 'vue'
import { streetTypes } from '@/lib/streetTypes'
// import { useMouse } from './composables/useMouse'
import { useDateFormat, useNow, useDraggable } from '@vueuse/core'
// import { UseDraggable } from '@vueuse/components'

import { useTemplateRef } from 'vue'

// const { x, y} = useMouse()
const dateInput = ref()
const lastItem = ref()
const firstItem = ref()
const streetType = ref()

// https://vueuse.org/core/useNow Many composables
const formattedDate = useDateFormat(useNow(), 'MM-DD-YYYY')
const now = new Date() // provides datetime once
const now2 = useNow() // provides constantly updating datetime

const el = useTemplateRef('el') // Could use 'ref' here but useTemplateRef has advantages
const handle = ref()


// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  preventDefault: true,
  // with `preventDefault: true`
  // you can disable the native behavior (e.g., for img)
  // and control the drag-and-drop, preventing the browser interference.
  initialValue: { x: 40, y: 40 },
  handle // restrict the drag area to this element only
})

// Keeps user from moving on w/o completing required field
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
        id="dob"
        label="DOB"
        v-model="dateInput"
        ref="firstItem"
        :required="false"
        :disabled="false"
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
        class="form-element"
      />
    </div>
    <div class="row">
      <BaseSelect id="color" class="form-element" label="Choose" :items="['Red', 'Blue', 'Green']" />
    </div>
    <div class="row">
      <BaseInput id="ssn" class="form-element" type="ssn" label="SSN" :required="false" />
    </div>
    <div class="row">
      <BaseInput id="phone" class="form-element" type="tel" label="Phone" />
    </div>
    <div class="row">
      <BaseInput id="zip" class="form-element" type="zip" label="Zip" />
    </div>
    <div class="row">
      <v-btn
        id="submit"
        color="primary"
        variant="outlined"
        @keydown="findNext($event, 'lastItem')"
        ref="lastItem"
        >Last Item on Page</v-btn
      >
    </div>
      <!-- <div>Mouse position: {{ x }}, {{ y }}</div> -->
      <p>{{ formattedDate }}</p>
      <p>{{ now }}</p>
      <p>{{ now2 }}</p>
      <div id="draggable" ref="el" :style="style" style="position: fixed">
        <div ref="handle" class="cursor-move">
          👋 Drag here!
        </div>
        <div>Drag me! I am at {{ Math.round(x) }}, {{ Math.round(y) }}</div>
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
#draggable {
  border: 1px solid;
  border-radius: 4px;
  padding: 8px;
}
</style>
