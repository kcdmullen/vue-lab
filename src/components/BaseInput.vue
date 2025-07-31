<script setup>
import { onMounted, ref, watch } from 'vue'
import { validationRules } from './validation'
import { vMaska } from 'maska/vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  id: String,
  label: String,
  type: String,
  maxLength: Number,
  required: { type: Boolean, default: true },
  error: { type: Boolean, default: false },
  serverError: {
    type: String,
    default: '',
  },
})
const typeRule = ref([])

const hint = ref()
const mask = ref()
const localError = ref('')

watch(() => props.serverError, (newVal) => {
  localError.value = newVal
})

onMounted(() => {
  if (validationRules[props.type]) {
    typeRule.value = validationRules[props.type]
  }
  if (props.required) {
    typeRule.value = validationRules.requiredRule.concat(typeRule.value)
  }
    switch (props.type) {
      case 'ssn':
        hint.value = 'xxx-xx-xxxx'
        mask.value = { mask: '###-##-####' }
        break
      case 'tel':
        hint.value = '+1 xxx-xxx-xxxx'
        mask.value = { mask: '+1 ###-###-####' }
        break
      case 'zip':
        mask.value = { mask: '#####' }
        break
      case 'datefield':
        hint.value = 'xx-xx-xxxx'
        mask.value = { mask: '##-##-####' }
        break
      default:
        break
    }
})
</script>
<template>
  <div>
    <v-text-field
      :id="props.id"
      :label="props.required ? `${props.label}*` : props.label"
      :placeholder="hint"
      v-maska="mask"
      :type="props.type || 'text'"
      variant="outlined"
      v-bind="$attrs"
      :required="props.required"
      :rules="typeRule"
      :error="props.error"
      :error-messages="localError"
      :maxLength="props.maxLength"
    ></v-text-field>
  </div>
</template>
