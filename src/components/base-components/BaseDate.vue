<script setup>
import { onMounted, ref, watch } from 'vue'
import { validationRules } from '../validation'

defineOptions({
  inheritAttrs: false,
})

defineExpose({ focus })

const props = defineProps({
  id: String,
  label: String,
  required: { type: Boolean, default: true },
  error: { type: Boolean, default: false },
  modelValue: String,
})

const dateRule = ref(validationRules.dateule)
const dateInput = ref('')
const localValue = ref(props.modelValue)
const input = ref()

function onDateInput(event) {
  let val = event.target.value

  // Remove invalid characters and normalize separators
  val = val.replace(/[^\d/.-]/g, '').replace(/[-.]/g, '/')

  // Match 1–2 digit month, day, and 1–4 digit year
  const match = val.match(/^(\d{1,2})\/?(\d{1,2})?\/?(\d{1,4})?$/)
  if (!match) {
    dateInput.value = val
    return
  }

  let [raw, mm, dd, yyyy] = match
  if (raw.length === 2 && raw.includes('/')) {
    mm = '0' + mm
  }
  if (raw.length === 5 && raw.charAt(raw.length - 1) === '/') {
    dd = '0' + dd
  }

  const allComplete = mm && dd && yyyy?.length === 4
  if (allComplete) {
    dateInput.value = `${mm}-${dd}-${yyyy}`
  } else {
    // Show partial input as-is, using original values (no padding)
    dateInput.value = [mm, dd, yyyy].filter(Boolean).join('-')
  }
  emit('update:modelValue', dateInput.value)
}

const emit = defineEmits(['update:modelValue', 'hitEnter'])

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal
  },
)

function preventSubmit(e) {
  if (e.key === 'Enter') {
    // Keep from submitting the form, and instead emit an event to possibly
    // be used to do a search
    e.preventDefault()
    emit('hitEnter')
  }
}

function focus() {
  input.value.focus()
}

onMounted(() => {
  if (props.required) {
    dateRule.value = validationRules.requiredRule.concat(dateRule.value)
  }
})
</script>

<template>
  <div>
    <v-text-field
      :id="props.id"
      :label="props.required ? `${props.label}*` : props.label"
      placeholder="MM-DD-YYYY"
      variant="outlined"
      v-bind="$attrs"
      :required="props.required"
      :rules="dateRule"
      :error="props.error"
      :maxLength="10"
      density="compact"
      @input="onDateInput"
      v-model="localValue"
      @keydown="preventSubmit"
      :tabindex="1"
      ref="input"
    ></v-text-field>
  </div>
</template>
