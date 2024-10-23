export default {
  getPosts({ page = 1, limit = 5 } = {}) {
    return $fetch(`https://dummyjson.com/posts`, {
      method: 'GET',
      params: { limit, skip: page * limit - limit },
    }).catch(() => ({}))
  },
  getPostById({ id }) {
    return $fetch(`https://dummyjson.com/posts/${id}`, {
      method: 'GET',
    }).catch(() => ({}))
  },
  getCommentsPostById({ id }) {
    return $fetch(`https://dummyjson.com/posts/${id}/comments`, {
      method: 'GET',
    }).catch(() => ({}))
  },
}
