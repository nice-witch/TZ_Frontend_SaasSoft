<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Select from 'primevue/select'
import DeleteIcon from '@/assets/icons/DeleteIcon.vue'

const props = defineProps<{
  mark: string
  selectType: string
  login: string
  password: string
  index: number
}>()

const emit = defineEmits<{
  (e: 'update:mark', value: string): void
  (e: 'update:selectType', value: string): void
  (e: 'update:login', value: string): void
  (e: 'update:password', value: string): void
  (e: 'delete', index: number): void
}>()

const types = ['LDAP', 'Локальная ']
</script>

<template>
  <div class="row-form">
    <InputText
      v-model="props.mark"
      placeholder="Метки"
      @update:model-value="(val) => emit('update:mark', val)"
    />
    <Select
      v-model="props.selectType"
      :options="types"
      placeholder="Тип записи"
      @update:model-value="(val) => emit('update:selectType', val)"
    />
    <InputText
      v-model="props.login"
      placeholder="Логин"
      @update:model-value="(val) => emit('update:login', val)"
      :class="{ twoColumn: props.selectType === 'LDAP' }"
    />
    <Password
      v-if="props.selectType !== 'LDAP'"
      v-model="props.password"
      placeholder="Пароль"
      @update:model-value="(val) => emit('update:password', val)"
    />
    <DeleteIcon class="row-form_delete-icon" @click="emit('delete', props.index)" />
  </div>
</template>

<style scoped>
.row-form {
  margin-bottom: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  gap: 12px;
  align-items: center;
}

.twoColumn {
  grid-column: 2 span;
}

.row-form_delete-icon {
  cursor: pointer;
  transition: color 0.2s ease;
}

.row-form_delete-icon:hover {
  color: #9e0101;
}
</style>
