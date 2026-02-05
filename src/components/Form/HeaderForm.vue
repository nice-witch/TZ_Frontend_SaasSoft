<script setup lang="ts">
import {defineEmits} from "vue";
import Button from 'primevue/button';
import AddIcon from "@/assets/icons/AddIcon.vue"

const emit = defineEmits<{
  (e: 'addForm'): void
}>()
</script>

<template>
  <div class="header-form">
    <h1>Учетные записи</h1>
    <Button severity="secondary" @click="emit('addForm')">
      <AddIcon />
    </Button>
  </div>
</template>

<style scoped>
.header-form {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
