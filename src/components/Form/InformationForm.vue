<script setup lang="ts">
import InfoIcon from '@/assets/icons/InfoIcon.vue'
</script>

<template>
  <div class="information-form">
    <InfoIcon />
    <p>Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
  </div>
</template>

<style scoped>
.information-form {
  margin-bottom: 20px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: rgba(218, 218, 218, 0.63);
  border-radius: 8px;
}
</style>
