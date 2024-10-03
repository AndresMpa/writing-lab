<template>
  <CollaborateActivity :activities="postData" />
</template>

<script>
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  data: () => ({
    offset: 4,
  }),
  computed: {
    postData() {
      if (postStore.selectedLevel) {
        return postStore.together.filter((data) =>
          data.level.includes(postStore.selectedLevel)
        );
      } else {
        return postStore.together;
      }
    },
  },
  methods: {
    getPosts(page) {
      let currentPage = page || 1;
      postStore.loadTogether(this.offset * currentPage);
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
