<template>
  <CollaborativeBanner :top="topData" />
  <CollaborativeIterator
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
    itemsPerPage: 8,
    offset: 8,
  }),
  computed: {
    topData() {
      return postStore.insight;
    },
    postData() {
      if (postStore.selectedLevel) {
        return postStore.insight.filter((data) =>
          data.level.includes(postStore.selectedLevel)
        );
      } else {
        return postStore.insight;
      }
    },
  },
  methods: {
    getPosts(page) {
      this.loading = true;
      let currentPage = page || 1;
      postStore.loadInsight(this.offset * this.itemsPerPage * currentPage);
      this.loading = false;
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
