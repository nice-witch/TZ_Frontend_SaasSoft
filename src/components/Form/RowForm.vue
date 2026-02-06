<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Select from 'primevue/select'
import DeleteIcon from '@/assets/icons/DeleteIcon.vue'

type Errors = {
  selectType?: boolean
  login?: boolean
  password?: boolean
}

const props = defineProps<{
  mark: string
  selectType: string
  login: string
  password: string | null
  id: number
  errors: Errors
}>()

const emit = defineEmits<{
  (e: 'update:mark', value: string): void
  (e: 'update:selectType', value: string, id: number): void
  (e: 'update:login', value: string): void
  (e: 'update:password', value: string): void
  (e: 'delete', id: number): void
  (e: 'validate', id: number): void
}>()

const types = ['LDAP', 'Локальная']
</script>

<template>
  <div class="row-form">
    <InputText
      v-model="props.mark"
      placeholder="Метки"
      @update:model-value="(val) => emit('update:mark', val)"
      @blur="emit('validate', props.id)"
    />
    <Select
      v-model="props.selectType"
      :options="types"
      placeholder="Тип записи"
      :invalid="props.errors.selectType"
      @update:model-value="(val) => emit('update:selectType', val, props.id)"
    />
    <InputText
      v-model="props.login"
      placeholder="Логин"
      :invalid="props.errors.login"
      :class="{ twoColumn: props.selectType === 'LDAP' }"
      @update:model-value="(val) => emit('update:login', val)"
      @blur="emit('validate', props.id)"
    />
    <Password
      v-if="props.selectType !== 'LDAP'"
      v-model="props.password"
      placeholder="Пароль"
      :invalid="props.errors.password"
      @update:model-value="(val) => emit('update:password', val)"
      @blur="emit('validate', props.id)"
    />
    <DeleteIcon class="row-form_delete-icon" @click="emit('delete', props.id)" />
  </div>
</template>

<style scoped>
.row-form {
  margin-bottom: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 24px;
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
