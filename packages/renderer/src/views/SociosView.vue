<template>
  <div>SOCIOS</div>
  <pre>{{ documents }}</pre>
</template>

<script setup lang="ts">
import {useCollection} from 'vuefire';
import {sociosRef} from '../firebase';

const documents = useCollection(sociosRef);
</script>

<style scoped></style>
