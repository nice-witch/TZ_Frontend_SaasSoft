<script setup lang="ts">
import { ref } from 'vue'
import HeaderForm from './HeaderForm.vue'
import InformationForm from './InformationForm.vue'
import RowForm from './RowForm.vue'

interface RowForm {
  mark: string
  selectType: string
  login: string
  password: string | null
  index: number
}

const dataForm = ref<RowForm[]>([
  {
    mark: '',
    selectType: 'Локальная',
    login: '',
    password: '',
    index: 1,
  },
])

const addRow = () => {
  dataForm.value.push({
    mark: '',
    selectType: 'Локальная',
    login: '',
    password: '',
    index: dataForm.value.length + 1,
  })
}

const deleteRow = (index: number) => dataForm.value.splice(index - 1, 1)
</script>

<template>
  <HeaderForm @add-form="addRow" />
  <InformationForm />

  <RowForm
    v-for="data in dataForm"
    :key="data.index"
    :index="data.index"
    v-model:mark="data.mark"
    v-model:selectType="data.selectType"
    v-model:login="data.login"
    v-model:password="data.password"
    @delete="deleteRow"
  />
</template>

<style scoped></style>
