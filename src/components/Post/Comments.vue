<script setup>
import Comment from '~/components/Post/Comment.vue'

const props = defineProps({
  postId: { type: Number, required: true },
})

const { total, comments } = await useApi.getCommentsPostById({ id: props.postId })
const totalRef = ref(total)
const commentsRef = ref([...comments])

function handleDelete(index) {
  totalRef.value--
  commentsRef.value.splice(index, 1)
}
</script>

<template>
  <section class="comments">
    <div class="title">{{ totalRef }} {{ useFilters.pluralize(totalRef, 'комментарий', 'комментария', 'комментариев') }}</div>
    <Comment v-for="(comment, index) in commentsRef" :key="comment.id" :comment="comment" @delete="handleDelete(index)" />
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
