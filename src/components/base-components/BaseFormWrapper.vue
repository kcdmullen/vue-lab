<template>
  <div>
    <slot
      :id="id"
      :label="required ? `${label}*` : label"
      :placeholder="hint"
      :type="type || 'text'"
      :variant="'outlined'"
      :required="required"
      :rules="rules"
      :error="error"
      :errorMessages="errorMessages"
      :maxLength="maxLength"
    />
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  hint: String,
  type: String,
  required: Boolean,
  rules: Array,
  error: Boolean,
  errorMessages: [String, Array],
  maxLength: Number,
})
</script>
