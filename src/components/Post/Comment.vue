<script setup>
defineProps({
  comment: { type: Object, required: true },
})
</script>

<template>
  <div class="comment">
    <div class="avatar"></div>
    <div class="name">{{ comment.user.username }}</div>
    <div class="content">{{ comment.body }}</div>
    <div class="options">
      <div class="date">Today</div>
      <button class="delete">Удалить</button>
    </div>
  </div>
</template>

<style scoped>
.comment {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(3, auto);
  column-gap: 8px;

  .avatar {
    grid-area: 1 / 1 / 4 / 2;
    width: 48px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    border: 3px solid rgb(var(--color-border-rgb));
  }
  .name {
    font-size: 20px;
    font-weight: bold;
  }
  .content {
    font-size: 18px;
  }
  .options {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    font-size: 12px;

    .date {
      color: rgba(var(--color-border-rgb), 22%);
      cursor: default;
    }
    .delete {
      display: inline-block;
      margin: 0;
      padding: 0;
      appearance: none;
      border: none;
      background: none;
      font-size: inherit;
      line-height: 1;
      color: rgb(255, 59, 48);
      text-decoration: none;
      border-bottom: 1px solid rgba(255, 59, 48, 30%);
    }
  }
}
</style>
