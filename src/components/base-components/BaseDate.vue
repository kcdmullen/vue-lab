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

const dateRule = ref(validationRules.dateRule)
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

  if (match[1]?.length === 1) {
    match[1] = '0' + match[1]
  }

  if (match[2]?.length === 1) {
    match[2] = '0' + match[2]
  }
  let [raw, mm, dd, yyyy] = match
  if (raw && mm?.length === 1) mm = '0' + mm;
  if (dd?.length === 1) dd = '0' + dd;

  const allComplete = mm && dd && yyyy?.length === 4
  if (allComplete) {
    dateInput.value = `${mm}-${dd}-${yyyy}`
  } else {
    // Show partial input as-is, using original values (no padding)
    dateInput.value = [mm, dd, yyyy].filter(Boolean).join('-')
  }
  emit('update:modelValue', `${dateInput.value}`)
}

const emit = defineEmits(['update:modelValue', 'hitEnter'])

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal === localValue.value) return
    localValue.value = newVal
  },
)

function preventSubmit(e) {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab']
  if (allowedKeys.includes(e.key)) return
  if (e.key === 'Enter') {
    // Keep from submitting the form, and instead emit an event to possibly
    // be used to do a search
    e.preventDefault()
    emit('hitEnter')
  } else if (!/^[\d-/]+/.test(e.key)) {
     e.preventDefault()
  }
}

function focus() {
  input.value.focus()
}

function onInput() {
  emit('update:modelValue', localValue.value)
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
      v-model="localValue"
      @input="onInput"
      @blur="onDateInput"
      @keydown="preventSubmit"
      :tabindex="1"
      ref="input"
      validateOn="blur"
    ></v-text-field>
  </div>
</template>
