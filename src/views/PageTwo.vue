<script setup>
import { reactive, onMounted } from 'vue'
import { uploadFile, testApi } from '@/services/apiService'

const payload = reactive([])

function submit() {
  payload.forEach((i) => {
    if (i.file && i.docketDate) {
      const formatted = new Date(i.docketDate).toISOString().slice(0,10).replace(/-/g, '');
      const fileName = `DailyDkt${formatted}.pdf`
      const renamedFile = new File([i.file], fileName, { type: i.file.type } )
      sendOneForm(renamedFile)
    }
  })
}
async function sendOneForm(file) {
  try {
    await uploadFile(file)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('done')
  }
}
function addRow() {
  if (payload.length < 5) {
    payload.push({ file: null, date: null })
  }
}
function deleteRow() {
  if (payload.length > 1) {
    payload.pop()
  }
}
function setForm() {
  payload.length = 0
  for (let i = 0; i < 3; i++ ) {
    payload.push({ file: null, docketDate: null })
  }
}
async function doTest() {
  const res = await testApi()
  console.log(res)
}

onMounted(() => {
  setForm()
})
</script>

<template>
  <div>
    <h1>Page Two</h1>
    <v-form>
      <v-row v-for="(item, index) in payload" :key="item.date">
        <v-col cols="12" md="4">
          <v-file-input v-model="payload[index].file" accept=".pdf"></v-file-input>
        </v-col>
        <v-col cols="12" md="4">
          <v-date-input label="Docket Date" v-model="payload[index].docketDate"></v-date-input>
        </v-col>
         <v-col cols="12" md="4">
          <v-btn variant="flat" color="success" @click="addRow">+</v-btn>
          <v-btn variant="flat" color="info" @click="deleteRow">-</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn variant="flat" color="primary" @click="submit">Submit</v-btn>
          <v-btn variant="flat" color="info" @click="setForm">Clear</v-btn>
          <v-btn variant="flat" color="info" @click="doTest">Test</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
