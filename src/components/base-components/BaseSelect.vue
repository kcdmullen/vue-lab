<script setup>
import { validationRules } from '../validation'
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
      @focus="showOptions = true"
      ref="meselect"
      :clearable="true"
      open-on-clear
    ></v-select>
  </div>
</template>
