<script setup>
import { validationRules } from './validation'
import { ref } from 'vue'

defineOptions({
  inheritAttrs: false,
})
const props = defineProps({
  id: String,
  label: String,
  required: { type: Boolean, default: true },
  items: Array,
})
const showOptions = ref(false)
const tempLocalValue = ref(null)

function set(bool) {
  showOptions.value = false
  if (!tempLocalValue.value) {
    setTimeout(() => {
      showOptions.value = bool
    }, 25)
  }
}
function doSelect(e) {
  console.log('made it', e)
  tempLocalValue.value = e
  setTimeout(() => {
    tempLocalValue.value = null
  }, 500)
}
</script>

<template>
  <div>
    <v-select
      :id="props.id"
      :label="props.required ? `${props.label}*` : props.label"
      v-bind="$attrs"
      :items="props.items"
      variant="outlined"
      density="compact"
      :required="props.required"
      :menu="showOptions"
      :rules="props.required ? validationRules.requiredRule : []"
      @focus="set(tempLocalValue ? false : true)"
      @update:model-value="doSelect"
      ref="meselect"
      :clearable="true"
    ></v-select>
  </div>
</template>
