<script setup></script>

<template>
  <div class="wrapper">
    <TheHeader />

    <div>
      <slot />
    </div>
  </div>
</template>

<style>
:root {
  --color-primary-rgb: 255, 107, 0;
  --color-text-rgb: 5, 9, 14;
  --color-border-rgb: 4, 4, 5;
}

head,
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: rgb(var(--color-text-rgb));
  line-height: 1.5;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style scoped>
.wrapper {
  max-width: 676px;
  margin: 0 auto;
}
</style>
