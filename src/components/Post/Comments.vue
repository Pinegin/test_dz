<script setup>
import Comment from '~/components/Post/Comment.vue'

const props = defineProps({
  postId: { type: Number, required: true },
})

const { total, comments } = await useApi.getCommentsPostById({ id: props.postId })
</script>

<template>
  <section class="comments">
    <div class="title">{{ total }} {{ useFilters.pluralize(total, 'комментарий', 'комментария', 'комментариев') }}</div>
    <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
  </section>
</template>

<style scoped>
.comments {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 40px;

  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
