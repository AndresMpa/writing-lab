<template>
  <CollaborateActivity
    @page-change="getPosts"
    :itemsPerPage="itemsPerPage"
    :loading="loading"
    :post="postData"
    class="pb-2"
  />
</template>

<script>
import { usePostStore } from "@/stores/postStore";

const postStore = usePostStore();

export default {
  data: () => ({
    loading: true,
    itemsPerPage: 4,
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
      this.loading = true;
      let currentPage = page || 1;
      postStore.loadTogether(this.offset * this.itemsPerPage * currentPage);
      this.loading = false;
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
