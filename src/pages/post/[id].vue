<script setup>
import Post from '~/components/Post/Post.vue'
import Comments from '~/components/Post/Comments.vue'

const route = useRoute()

const post = await useApi.getPostById({ id: route.params.id })
</script>

<template>
  <section class="post">
    <Post :post="post" />
    <Comments :post-id="post.id" />
  </section>
</template>

<style scoped>
header {
  margin-bottom: 48px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: rgb(var(--color-primary-rgb));
}
</style>
