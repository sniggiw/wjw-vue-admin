<script setup lang="ts">
import { env } from '@/types/helper';

console.log(typeof env.VITE_SOME_KEY);
console.log(typeof import.meta.env.VITE_SOME_KEY);
</script>

<template>
    <div class="bg-red-500">home...</div>
</template>

<style lang="scss" scoped></style>
