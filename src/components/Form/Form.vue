<script setup lang="ts">
import { ref } from 'vue'
import HeaderForm from './HeaderForm.vue'
import InformationForm from './InformationForm.vue'

const isClick = ref(false)
</script>

<template>
  <HeaderForm @add-form="isClick = true" />
  <InformationForm />
</template>

<style scoped></style>
