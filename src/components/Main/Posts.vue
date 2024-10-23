<script setup>
import Post from '~/components/Post/Post.vue'

const { posts } = await useApi.getPosts({ page: 1, limit: 5 })
</script>

<template>
  <section class="posts">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<style scoped>
.posts {
  display: grid;
  gap: 32px;
  margin-bottom: 60px;
}
</style>
