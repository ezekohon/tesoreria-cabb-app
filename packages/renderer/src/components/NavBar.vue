<template>
  <Toolbar>
    <template #start>
      <Button
        label="Socios"
        icon="pi pi-plus"
        class="mr-2"
      />
      <Button
        label="?"
        icon="pi pi-upload"
        severity="success"
      />
      <i class="pi pi-bars p-toolbar-separator mr-2" />
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Toolbar from 'primevue/Toolbar';
</script>

<style scoped></style>
