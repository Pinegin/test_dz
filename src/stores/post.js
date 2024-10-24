export const usePostStore = defineStore('site', () => {
  const userPostsLike = ref([])
  const userPostsTrash = ref([])

  const isPostLike = (id) => computed(() => userPostsLike.value.includes(id))
  const isPostTrash = (id) => computed(() => userPostsTrash.value.includes(id))

  function postLike(id) {
    if (!isPostLike(id).value) {
      userPostsLike.value.push(id)
    } else {
      const index = userPostsLike.value.indexOf(id)
      userPostsLike.value.splice(index, 1)
    }
  }
  function postTrash(id) {
    if (!isPostTrash(id).value) {
      userPostsTrash.value.push(id)
    } else {
      const index = userPostsTrash.value.indexOf(id)
      userPostsTrash.value.splice(index, 1)
    }
  }

  return {
    userPostsLike,
    userPostsTrash,

    // getters
    isPostLike,
    isPostTrash,

    // actions
    postLike,
    postTrash,
  }
})
