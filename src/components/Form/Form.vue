<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import HeaderForm from './HeaderForm.vue'
import InformationForm from './InformationForm.vue'
import RowForm from './RowForm.vue'
import { useFormStore } from '@/stores/FormStore.ts'

const formStore = useFormStore()
const { form } = storeToRefs(formStore)

const showPasswordColumn = computed(() => form.value.some((el) => el.selectType !== 'LDAP'))
</script>

<template>
  <HeaderForm @add-form="formStore.addRow()" />
  <InformationForm />

  <div v-if="form.length" class="header-row">
    <p>Метки</p>
    <p>Тип записи</p>
    <p>Логин</p>
    <p v-if="showPasswordColumn">Пароль</p>
  </div>

  <RowForm
    v-for="data in form"
    :key="data.id"
    :id="data.id"
    :errors="data.errors"
    v-model:mark="data.mark"
    v-model:selectType="data.selectType"
    v-model:login="data.login"
    v-model:password="data.password"
    @update:mark="changeMark"
    @update:selectType="formStore.changeType"
    @delete="formStore.deleteRow(data.id)"
  />
</template>

<style scoped>
.header-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 24px;
  gap: 12px;
  align-items: center;
  margin-bottom: 14px;
}
</style>
